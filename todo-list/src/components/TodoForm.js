import React , {useState} from "react";


export const TodoForm = () => {
  const [value, setValue] = useState("")
  const handleSubmit = e => { //fn to capture the state upon form submission
    e.preventDefault(); //prevents reloading of the page when task is submitted
    console.log(value);
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" placeholder="Enter yout task here" onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" className="todo-btn">Add Task</button>
      </form>
  )
}