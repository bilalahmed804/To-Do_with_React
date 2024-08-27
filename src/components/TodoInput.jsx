import { useEffect } from "react"

function TodoInput({onChange,onClick,value}) {

  useEffect(()=>{
   
    
  },[onClick])
    return (
        <div className="py-5">
        <input onChange={onChange} 
         className='border rounded-sm p-2' type="text" placeholder='Add Todo' value={value}/>
        <button onClick={onClick} 
        disabled = {value === ""}
        style={{backgroundColor: value === "" && "gray"}}
        className='p-2 ml-2 rounded-sm bg-blue-400'>Add</button>
      </div>
    )
  }

export default TodoInput