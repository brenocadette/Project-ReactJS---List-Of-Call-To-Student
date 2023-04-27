import './style.css';
import {Card} from '../../componentes/Card/index'

export function Home() {

  return (
    <div className='container'> 
      <h1>List Of Attendance</h1>

      <input type="text" placeholder="Write a name..." />
      <button type="button">Add</button>

      <Card />
    </div>
    )
}

