import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    readDatabase(process.argv[2]).then((data) => {
      res.statusCode = 200;
      res.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}\n`);
      res.end();
    }).catch((err) => {
      res.statusCode = 500;
      res.send(err.message);
    });
  }

  static getAllStudentsByMajor(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    const { major } = req.params;
    if (major !== 'CS' || major !== 'SWE') {
      res.statusCode = 500;
      res.send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2]).then((data) => {
        res.statusCode = 200;
        res.send(`List: ${data[major].join(', ')}\n`);
      }).catch((err) => {
        res.statusCode = 500;
        res.send(err.message);
      });
    }
  }
}

export default StudentsController;
