const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  fs.readFile(process.argv[2], (error, data) => {
    if (error) {
      res.statusCode = 500;
      res.end('Cannot load the database');
    } else {
      res.statusCode = 200;
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

      res.write(`Number of students: ${students.length}\n`);
      res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
      res.end();
    }
  });
});

app.listen(1245, '127.0.0.1');

module.exports = app;
