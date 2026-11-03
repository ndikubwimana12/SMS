const express = require("express");
const app = express();
app.use(express.json());
const db = require('./database/db');


//Get all students API
app.get('/students', (req, res) => {
    const sql = "SELECT * FROM students";
    db.query(sql, (error, result) => {
        
        if (error) {
            console.log("failed to fetch students");
            return;
        }
        res.json(result)
    })
})


//select one student API

app.get('/students/:id', (req, res) => {

    const id = req.params.id;

    const sql = "SELECT * FROM students WHERE id = ?";

    db.query(sql, [id], (error, results) => {

        if (error) {
            return res.status(500).json({
                message: "Database error"
            });
        }


        if (results.length === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }


        res.json(results[0]);

    });

});


//Insert student API


app.post('/students', (req, res) => {

    const { name, address, course } = req.body;


    const sql = `
        INSERT INTO students 
        (name, address, course)
        VALUES (?, ?, ?)
    `;


    db.query(
        sql,
        [name, address, course],
        (error, result) => {

            if (error) {
                return res.status(500).json({
                    message: "Database error"
                });
            }


            res.json({
                message: "Student added successfully",
                id: result.insertId
            });

        }
    );

});


//PUT update student API

app.put('/students/:id', (req, res) => {

    const id = req.params.id;

    const { name, address, course } = req.body;


    const sql = `
        UPDATE students
        SET name=?, address=?, course=?
        WHERE id=?
    `;


    db.query(
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


//delete student API

app.delete('/students/:id', (req, res) => {

    const id = req.params.id;


    const sql = "DELETE FROM students WHERE id=?";


    db.query(
        sql,
        [id],
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
                message: "Student deleted successfully"
            });

        }
    );

});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})