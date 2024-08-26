import React, { useState } from 'react'
import axios  from 'axios'


function Create (){
 
  const [task , setTask] = useState([])

  const Handleclick = () => {
    axios .post('http://localhost:3001/add', {task:task})
   .then(result =>{
    location.reload()
   })
   .catch(err=> console.log(err))
  } 

  return (


    <div className='form' >
     <input  type='text' name='' id='' style={{padding  : "10px" , width:"300px", borderBottom: "1px solid"}} onChange = {(e) => setTask(e.target.value)} />
     <button type='button' style={{padding  : "10px" , cursor: "pointer", color:"white", backgroundColor:"black" }} onClick={Handleclick} > Add </button>
    </div>
  )
}

export default Create
