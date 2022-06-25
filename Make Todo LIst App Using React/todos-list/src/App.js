
import './App.css';
import React, { useState } from 'react';
import { TodoList } from './TodoList';

function App() {
  const [inputList,setInputList] = useState("")
  const [todos,setTodos]=useState([])
function List1(){
  setTodos([...todos,inputList]);

}
  function handleInput(event){
    setInputList(event.target.value)


  }

  function Clear(id){
    console.log('deleted');
    setTodos((oldItem)=>{
      return oldItem.filter((arr,index)=>{
           return index!==id;
      })
    });

}
  return (
    
      <div className='App-header'>
        <div className='CenterDiv'>
          <div className='head'><h1>To-Do List</h1></div>
        
            <input type='text' placeholder='Enter Your To-do'    onChange={handleInput} />
            <button onClick={List1}>+</button>

            <ol>
              {todos.map((todo,index)=>(
                     <TodoList
                     text={todo}
                     key={index}
                     id={index}
                     
                     onSelect={Clear}
                      />
              ))}
            </ol>
          
        </div>

      </div>
     
   
  );
}

export default App;
