const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "studentsdb",
  password: "root",
  port: 5432
});


// GET ALL STUDENTS
app.get("/students", async (req, res) => {
  const result = await pool.query("SELECT * FROM students");
  res.json(result.rows);
});


// ADD STUDENT
app.post("/students", async (req, res) => {

  const { name, email, age } = req.body;

  const result = await pool.query(
    "INSERT INTO students(name,email,age) VALUES($1,$2,$3) RETURNING *",
    [name, email, age]
  );

  res.json(result.rows[0]);
});


// UPDATE STUDENT
app.put("/students/:id", async (req, res) => {

  const { id } = req.params;
  const { name, email, age } = req.body;

  const result = await pool.query(
    "UPDATE students SET name=$1,email=$2,age=$3 WHERE id=$4 RETURNING *",
    [name, email, age, id]
  );

  res.json(result.rows[0]);
});


// DELETE STUDENT
app.delete("/students/:id", async (req, res) => {

  const { id } = req.params;

  await pool.query(
    "DELETE FROM students WHERE id=$1",
    [id]
  );

  res.json({ message: "Student deleted" });

});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});