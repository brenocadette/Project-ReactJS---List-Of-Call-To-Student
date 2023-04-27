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

      <button type="button">Add</button>

      <Card name="Breno" time="10:10:10" id="01"/>
      <Card name="Ana" time="11:11:11" id="02"/>
    </div>
    )
}

