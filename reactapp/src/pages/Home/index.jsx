import React, {useEffect, useState} from 'react';// é um hook que permite que nós criemos um estado 

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
const [user, setUser] = useState({name: "", avatar: ""})

function handleAddStudent() {
  const newStudent = {
    name: studentName,
    time: new Date().toLocaleTimeString("pt-br", {
    hour: "2-digit",
    minute:"2-digit",
    second: "2-digit",
    
    }),

  }

  setStudents(prevState => [...prevState, newStudent]);

}
//Puxando dados do github
//Not is possible criate UseEffects with function assync
useEffect(() => {

  fetch("https://api.github.com/users/brenocadette")
.then(response => response.json())
.then(data => {
  console.log(data);
  setUser({
    name: data.name,
    avatar: data.avatar_url
  })
})
.catch(error => console.log(error))

}, []);



  return (
    <div className='container'> 
      <header>
        <h1>List Of Attendance </h1>
        <h1>Name: {studentName}</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="" />
        </div>
      </header>
      

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
        students.map(student => <Card name={student.name} time={student.time} key={student.time}/>
      )

      }
    </div>
    )
}

