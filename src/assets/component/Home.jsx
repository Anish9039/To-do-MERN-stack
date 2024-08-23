import React, { useState } from 'react'
import Create from './Create'



  function Home(){

    const [todo , setTodo ]= useState([])

    const styles = {
        center: {
          marginLeft: "auto",
          marginRight: "auto"
        }
      }
  return (
    <div className={styles.center}  >
         <h1>To do app</h1>
         <Create />
         {

            todo.length === 0
            ?
            <div> <h2>No Record</h2> </div>
            :
            todo.map(todo => (
                <div>
                {todo}
                </div>
            )) 
         }
      
    </div>
  )
}

export default Home
