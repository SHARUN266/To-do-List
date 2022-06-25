import React from "react";

export function TodoList(props){

   
     return  (
        <>
          <div className="todo-style">
         
          <li>{props.text}</li>
        
          <img   onClick={()=>{
            props.onSelect(props.id)
          }} id="icon" height="30px" src="https://cdn-icons-png.flaticon.com/512/190/190406.png" alt="pic"/>
          
          </div>
       

        </>

     ) 
}