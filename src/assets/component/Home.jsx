import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp';


  function Home(){

    const [todo , setTodo ]= useState([])

    const styles = {
        center: {
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center"
 
          
        }
      }

      useEffect (() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodo(result.data))
        .catch( err => console.log(err))

      }, [])


      const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/'+id)
        .then(result => {
          location.reload()
        })
        .catch( err => console.log(err))

      }

      const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result => {
          location.reload(alert("Want to delete this"))
        })
        .catch( err => console.log(err))
        
      }

  return (
    <div className='bar'>
    <div className= {styles.center}>
         <h1>To-do</h1>
         <Create />
         {

            todo.length === 0
            ?
             <div> <h2>No Record</h2> </div>
            :
            todo.map(todo => (
                <div className='task'  style={{display:"flex",alignItems:"center", width:"345px", justifyContent: "space-between",backgroundColor: "black", color: "white", height:"35px",padding:"2px 5px 2px 5px" , marginTop:"3px"}} >
                  <div className='checkbox ' onClick={ () => handleEdit(todo._id) }>
                    {todo.done ? <CheckBoxSharpIcon className="check" ></CheckBoxSharpIcon>
                    : <CheckBoxOutlineBlankIcon className="check" />}
              
                <p  className={todo.done ? "line-through" : ""}  >{todo.task}</p>
                </div>
                <div >
               <span> <DeleteOutlineIcon className="delete" onClick={ () => handleDelete(todo._id)}  style={{cursor:"pointer"}}/></span>
                     </div>

                </div>
            )) 
         }
      
    </div>
    </div>
  )
}

export default Home
