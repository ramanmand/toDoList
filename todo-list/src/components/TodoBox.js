import React , {useState} from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { ToDo, Todo } from "./ToDo";
import { EditTodoForm } from "./EditForm";
uuidv4();

export const TodoBox = () => {
      const [todos, setTodos] = useState([]); //this will parse the value from todoForm
      const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task:todo, completed:false, isEditing:false}])
      }
      console.log(todos); //to check if the prop parse works

      const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo))
      } // this will check if the id is equal to the parsed id

      const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id)) //if id= to the id we parsed in
      }

      const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {
          ...todo, isEditing: !todo.isEditing} : todo
        ))
      }

      const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing} : todo))
      }

      

  return (
    <div className= "TodoBox">
      <h1>My To-Do List</h1>
      <TodoForm addTodo= {addTodo} /> {/*prop to parse the value*/}
      {todos.map((toDo, index) => (
        toDo.isEditing ? (
          <EditTodoForm editTodo={editTask} task ={toDo}/>
        ) : (
          <Todo task={toDo} key={index} 
        toggleComplete={toggleComplete} 
        deleteTodo ={deleteTodo} 
        editTodo={editTodo}
        /> 
        )
      
      ))} 
      
    </div>
  )
}