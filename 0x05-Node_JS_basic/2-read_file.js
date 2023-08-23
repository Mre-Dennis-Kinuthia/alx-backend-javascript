const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
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

                if (field in studentsByField) {
                    studentsByField[field].push(firstname);
                } else {
                    studentsByField[field] = [firstname];
                }
            }
        });

        console.log(`Number of students: ${lines.length - 1}`); // Subtract 2 to exclude header and empty line
        for (const field in studentsByField) {
            const studentCount = studentsByField[field].length;
            const studentList = studentsByField[field].join(', ');
            console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
