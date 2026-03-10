import React, { useState, useEffect } from "react";

const StudentForm = ({ addStudent, updateStudent, editStudent }) => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");

  useEffect(()=>{

    if(editStudent){
      setName(editStudent.name);
      setEmail(editStudent.email);
      setAge(editStudent.age);
    }

  },[editStudent]);


  const handleSubmit = (e)=>{

    e.preventDefault();

    if(!name || !email || !age){
      alert("All fields required");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;

    if(!emailPattern.test(email)){
      alert("Invalid email");
      return;
    }

    const student = {name,email,age};

    if(editStudent){
      updateStudent({...student,id:editStudent.id});
    }
    else{
      addStudent(student);
    }

    setName("");
    setEmail("");
    setAge("");

  };


  return(

    <form onSubmit={handleSubmit} className="form">

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e)=>setAge(e.target.value)}
      />

      <button type="submit">
        {editStudent ? "Update Student" : "Add Student"}
      </button>

    </form>

  );
};

export default StudentForm;