import React, {useState} from 'react';// é um hook que permite que nós criemos um estado 

import './style.css';
import {Card} from '../../componentes/Card/index'

export function Home() {
 /*
   let studentName = "";

function handleNameChange (name){
  console.log(name);
  studentName=name;

}*/

const [studentName, setStudentName] = useState("Student");
const [students, setStudents] = useState([]);

function handleAddStudent() {
  const newStudent = {
    name: studentName,
    time: new Date().toLocaleTimeString("pt-br", {
    hour: "2-digit",
    minute:"2-digit",
    second: "2-digit",
    
    }),

  }

  setStudents([newStudent]);

}



  return (
    <div className='container'> 
      <h1>List Of Attendance </h1>
      <h1>Name: {studentName}</h1>

      <input 
      type="text" 
      placeholder="Write a name..." 
      //onChange={mudancaValue => handleNameChange(mudancaValue.target.value)}
      onChange={mudancaValue => setStudentName(mudancaValue.target.value)}

      />

      <button 
      type="button" onClick={handleAddStudent}>
        Add</button>

      {
        students.map(student => <Card name={student.name} time={student.time} id="01"/>
      )

      }
    </div>
    )
}

