export default function updateStudentGradeByCity(stds, city, newGrades){
    let filterdStd = stds.filter(std => std.location === city);

    let stdsWithGrades = filterdStd.map(
        (std) => {
            for (let gradeDetails of newGrades){
                if(std.id === gradeDetails.studentId){
                    std.grade = gradeDetails.grade;
                }
            }
            if(std.grade === undefined){
                std.grade = 'N/A';
            }
            return std;
        }
    );

    return stdsWithGrades;
};