import React , {useState} from "react";


export const EditTodoForm = ({editTodo , task}) => {   //importing prop here
  const [value, setValue] = useState("")
  const handleSubmit = e => { //fn to capture the state upon form submission
    e.preventDefault(); //prevents reloading of the page when task is submitted
    console.log(value); //for testing
    editTodo(value , task.id) //parsing state from todo form

    setValue("") //to clear the form after submit
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value={value} placeholder="update task" onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" className="todo-btn">Update Task</button>
      </form>
  )
}