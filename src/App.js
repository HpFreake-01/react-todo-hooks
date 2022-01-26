import React from "react";
import { useRef, useState } from "react/cjs/react.development";
import { Input } from "./Input";


function App() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef(null);
  const addTask = (input) =>{
    const newTodo = {
      id: Math.random().toString(36).substr(2,9),
      title: input
    }
    setTodos([...todos, newTodo])
  }
  const removeTodo = (todoId) =>{
    setTodos([...todos.filter(todo => todo.id !== todoId)])
  }
  const searchClick = () =>{
    setTodos([...todos.filter(todo => todo.title.includes(inputRef.current.value))])
  }
  return(
    <div>
      <Input addTask={addTask}/>
      <input type='text' ref={inputRef}/>
      <button onClick={searchClick}>Search</button>
      <div>
        {todos.map(todo => {
          return(
            <div>
              <li key={todo.id}>{todo.title}</li>
              <button onClick={() => {removeTodo(todo.id)}}>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default App;
