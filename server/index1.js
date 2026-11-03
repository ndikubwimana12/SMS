const db1 = require('./database/db1');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

//get one student from database
app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM students WHERE id=?';

    db1.query(sql, [id], (error, result) => {

        if (error) {
            console.log("error in select");
            return;
        }
        res.json(result[0]);
    })
})

//get all students from database
app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM students';

    db1.query(sql, (error, result) => {
        
        if (error) {
            console.log("error in select");
            return;
        }
        res.json(result);
    })
})

//post new students in database

app.post('/addstudent', (req, res) => {
    const { name, address, course } = req.body;
    const sql = 'INSERT INTO students(name,address,course) VALUES(?,?,?)';

    db1.query(sql, [name,address,course], (error, result) => {

        if (error) {
            console.log("error in insert");
            return;
        }
        res.json({
            id: result.insertId,
            name,
            address,
            course
        })
    })
})


//PUT update student API

app.put('/students/:id', (req, res) => {

    const id = req.params.id;

    const { name, address, course } = req.body;


    const sql = `
        UPDATE students
        SET name=?, address=?, course=?
        WHERE id=?
    `;


    db1.query(
        sql,
        [name, address, course, id],
        (error, result) => {

            if (error) {
                return res.status(500).json({
                    message: "Database error"
                });
            }


            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Student not found"
                });
            }


            res.json({
                message: "Student updated successfully"
            });

        }
    );

});

app.listen(5000, () => {
    console.log('server is running on port 5000');
})