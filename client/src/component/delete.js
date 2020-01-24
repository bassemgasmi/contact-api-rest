import React, { Component } from 'react'
import Axios from 'axios'


const Delete =(props)=> {

   const clickHandleDelete = async () => {
      let id = props.id
      console.log(id)
      Axios.delete(`http://localhost:8080/contacts/${id}`)
          .then(function (response) {
            console.log("delete sucess", props);
           props.deleteDone()
          })
          .catch(function (error) {
            console.log(error);
          });
    }
 
  
        return (
            <div>
               <button onClick={clickHandleDelete}>delete</button> 
            </div>
        )
    
}

export default Delete