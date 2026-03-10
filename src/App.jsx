import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

const App = () => {

  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  // FETCH STUDENTS
  useEffect(() => {

    axios.get("http://localhost:5000/students")
    .then((res)=>{
      setStudents(res.data);
    });

  },[]);


  // ADD STUDENT
  const addStudent = async(student)=>{

    const res = await axios.post(
      "http://localhost:5000/students",
      student
    );

    setStudents([...students,res.data]);
  };


  // UPDATE STUDENT
  const updateStudent = async(updatedStudent)=>{

    const res = await axios.put(
      `http://localhost:5000/students/${updatedStudent.id}`,
      updatedStudent
    );

    setStudents(
      students.map(s =>
        s.id === updatedStudent.id ? res.data : s
      )
    );

    setEditStudent(null);
  };


  // DELETE STUDENT
  const deleteStudent = async(id)=>{

    const confirmDelete = window.confirm("Delete student?");

    if(confirmDelete){

      await axios.delete(`http://localhost:5000/students/${id}`);

      setStudents(
        students.filter(s => s.id !== id)
      );

    }

  };


  return (

    <div className="container">

      <h1>Students Table</h1>

      <StudentForm
        addStudent={addStudent}
        updateStudent={updateStudent}
        editStudent={editStudent}
      />

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
        setEditStudent={setEditStudent}
      />

    </div>

  );
};

export default App;