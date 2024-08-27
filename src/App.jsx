import TodoInput from "./components/TodoInput"

import TodoList from "./components/TodoList"

import { useCallback, useState } from "react"
import './App.css'


function App() {

  const [todo , setTodo] = useState("");

  const [todos , setTodos]=  useState([
    {
      todo: "Reading Book",
      id:Date.now(),
      completed:false,
    } 
  ]);

  const handleAndTodo =useCallback(()=>{
    const todosArr = [...todos , {
      todo,
      id:Date.now(),
      completed:false,
    }];
    setTodos([...todosArr]);
    setTodo("");
  },[todo])


  const handleOnDelete = useCallback((id)=>{
    console.log("id=>", id);

    const filter = todos.filter((data) => data.id !== id)
    console.log("filter=>" , filter);
    setTodos([...filter])
    
  },[todos]);

  return (
    <div className='w-3/4 mx-auto'>
    <h1 className='font-bold text-3xl'>To-Do App</h1>

    <TodoInput value={todo} onChange={(e)=> setTodo(e.target.value)} 
      onClick={handleAndTodo}/>

    <TodoList  todos={todos} onDelete = {handleOnDelete}/>
    </div>
  )
}

export default App
