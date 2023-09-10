const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const students = data.toString().split('\n')
          .filter((line) => line.length > 0)
          .map((line) => line.split(','))
          .slice(1)
          .map((student) => ({
            firstName: student[0],
            lastName: student[1],
            age: student[2],
            field: student[3],
          }));

        const csStudents = students
          .filter((student) => student.field === 'CS')
          .map((student) => student.firstName);

        const sweStudents = students
          .filter((student) => student.field === 'SWE')
          .map((student) => student.firstName);

        console.log(`Number of students: ${students.length}`);
        console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);

        resolve();
      }
    });
  });
}

module.exports = countStudents;
