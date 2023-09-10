import fs from 'fs';

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const students = data.toString().split('\n')
          .filter((line) => line.length > 0)
          .slice(1)
          .map((student) => student.split(','))
          .map((student) => ({
            firstName: student[0],
            lastName: student[1],
            age: student[2],
            field: student[3],
          }));

        const fields = students.map((student) => student.field);
        const majors = new Set(fields);
        const majorStudents = {};

        for (const major of majors) {
          majorStudents[major] = [students.filter((student) => student.field === major)];
        }
        resolve(majorStudents);
      }
    });
  });
}
