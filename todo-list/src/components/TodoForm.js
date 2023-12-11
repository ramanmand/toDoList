import React , {useState} from "react";


export const TodoForm = ({addTodo}) => {   //importing prop here
  const [value, setValue] = useState("")
  const handleSubmit = e => { //fn to capture the state upon form submission
    e.preventDefault(); //prevents reloading of the page when task is submitted
    console.log(value); //for testing
    addTodo(value) //parsing state from todo form

    setValue("") //to clear the form after submit
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value={value} placeholder="Enter yout task here" onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" className="todo-btn">Add Task</button>
      </form>
  )
}