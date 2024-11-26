const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Attempt to read the CSV file asynchronously
    const data = await fs.readFile(path, 'utf8');
    
    // Split the content into lines and filter out any empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    // If the file contains no valid data
    if (lines.length < 2) {
      console.log("Number of students: 0");
      return;
    }

    // Extract headers (first line) and student data (remaining lines)
    const headers = lines[0].split(',').map(header => header.trim());
    const students = lines.slice(1);

    // Initialize an object to store student counts and lists by field
    const fieldCounts = {};

    // Process each student data line
    students.forEach((student) => {
      const studentData = student.split(',').map(value => value.trim());

      // Skip any invalid or incomplete lines
      if (studentData.length !== headers.length || studentData.includes('')) {
        return;
      }

      const firstName = studentData[0];  // First name
      const field = studentData[3];      // Field (CS, SWE, etc.)

      // Update field counts and lists
      if (!fieldCounts[field]) {
        fieldCounts[field] = { count: 0, students: [] };
      }

      fieldCounts[field].count += 1;
      fieldCounts[field].students.push(firstName);
    });

    // Calculate total number of students
    const totalStudents = students.filter(student => student.trim() !== '').length;
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students per field and their names
    Object.keys(fieldCounts).forEach(field => {
      const { count, students } = fieldCounts[field];
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    });

  } catch (error) {
    // If an error occurs (e.g., file not found), throw an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
