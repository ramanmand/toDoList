import React , {useState} from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { ToDo, Todo } from "./ToDo";
uuidv4();

export const TodoBox = () => {
      const [todos, setTodos] = useState([]); //this will parse the value from todoForm
      const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task:todo, completed:false, isEditing:false}])
      }
      console.log(todos); //to check if the prop parse works
  return (
    <div className= "TodoBox">
      <h1>My To-Do List</h1>
      <TodoForm addTodo= {addTodo} /> {/*prop to parse the value*/}
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))} 
      
    </div>
  )
}