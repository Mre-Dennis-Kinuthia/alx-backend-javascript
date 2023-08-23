const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n');
      const headers = lines[0].split(','); // Get the headers
      const firstnameIndex = headers.indexOf('firstname'); // Find the index of 'firstname' column
      const fieldIndex = headers.indexOf('field'); // Find the index of 'field' column

      const studentsByField = {};

      lines.slice(1).forEach((line) => {
        // Skip empty lines
        if (line.trim() !== '') {
          const values = line.split(',');
          const firstname = values[firstnameIndex];
          const field = values[fieldIndex];

          if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
            studentsByField[field].push(firstname);
          } else {
            studentsByField[field] = [firstname];
          }
        }
      });

      console.log(`Number of students: ${lines.length - 1}`); // Subtract 1 to exclude the header
      for (const field in studentsByField) {
        if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
          const studentCount = studentsByField[field].length;
          const studentList = studentsByField[field].join(', ');
          console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
        }
      }

      resolve(); // Resolve the promise
    });
  });
}

module.exports = countStudents;
