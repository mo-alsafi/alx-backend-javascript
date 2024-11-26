const fs = require('fs');

function countStudents(path) {
  try {
    // Attempt to read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the file content into lines and remove empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // If the file is empty or has no valid data
    if (lines.length < 2) {
      console.log("Number of students: 0");
      return;
    }

    // Extract headers (first line) and student data (subsequent lines)
    const headers = lines[0].split(',').map(header => header.trim());
    const students = lines.slice(1);

    // Initialize an object to store the count of students per field
    const fieldCounts = {};

    // Loop over each student and process their data
    students.forEach((student) => {
      const studentData = student.split(',').map(value => value.trim());

      // Skip invalid lines (e.g., empty lines or rows with missing data)
      if (studentData.length !== headers.length || studentData.includes('')) {
        return;
      }

      const firstName = studentData[0]; // Get first name
      const field = studentData[3]; // Get field (CS, SWE, etc.)

      // Update field count and list of students
      if (!fieldCounts[field]) {
        fieldCounts[field] = { count: 0, students: [] };
      }

      fieldCounts[field].count += 1;
      fieldCounts[field].students.push(firstName);
    });

    // Log total number of students
    const totalStudents = students.filter(student => student.trim() !== '').length;
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their first names
    Object.keys(fieldCounts).forEach(field => {
      const { count, students } = fieldCounts[field];
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    });

  } catch (error) {
    // Handle file reading errors
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
