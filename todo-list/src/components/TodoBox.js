import React , {useState} from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

export const TodoBox = () => {
      const [todos, setTodos] = useState([]); //this will parse the value from todoForm
      const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task:todo, completed:false, isEditing:false}])
      }
  return (
    <div className= "TodoBox">
      <TodoForm addTodo= {addTodo} /> {/*prop to parse the value*/}
    </div>
  )
}