import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


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
        axios.put('http://localhost:3001/update'+id)
        .then(result => console.log(result))
        .catch( err => console.log(err))

      }

  return (
    <div className='bar'>
    <div className= {styles.center}  >
         <h1>To-do</h1>
         <Create />
         {

            todo.length === 0
            ?
             <div> <h2>No Record</h2> </div>
            :
            todo.map(todo => (
                <div className='task'onClick={ () => handleEdit(todo._id) } style={{display:"flex",alignItems:"center", width:"345px", justifyContent: "space-between",backgroundColor: "black", color: "white", height:"35px",padding:"2px 5px 2px 5px" , marginTop:"3px"}} >
                  <div className='checkbox'>
                <CheckBoxOutlineBlankIcon className="check" />
                <p>{todo.task}</p>
                </div>
                <div>
               <span> <DeleteOutlineIcon className="delete" /></span>
                     </div>

                </div>
            )) 
         }
      
    </div>
    </div>
  )
}

export default Home
