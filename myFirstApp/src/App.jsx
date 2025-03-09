import './App.css';
import Employee from './Components/Employee';
import { useState } from 'react';

function App() {
  let [role,setRole]=useState('dev');
  return (
   <>
      <input type='text'
          onChange={(e)=>{
            console.log(e.target.value);
            setRole(e.target.value);
          }}
      />
        <Employee name='Tenzing' role='intern'/>
        <Employee name='Alok' role={role}/>
        <Employee name='Tonong'/>
   </>
  )
}

export default App
