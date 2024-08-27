import { useCallback } from "react"

function TodoList({todos ,onDelete}){
    useCallback(()=> {
        console.log("onDelete Changed");
        
    },[onDelete])
return(
    <>
     {
      todos.map((todo,ind)=>{
        return (
          <div className="flex my-2 bg-blue-200" key={todo.id}>
            <h3 className="text-2xl font-mono pl-2 py-2 text-left font-medium flex-1">{todo.todo}</h3>
            <button onClick={()=> onDelete(todo.id)}
             className="bg-red-200 rounded-sm p-2 px-4">Delete</button>
          </div>
        )
      })
    }
    </>
)
}

export default TodoList