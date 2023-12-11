import React from "react";


export const TodoForm = () => {
  return (
    <form className="TodoForm">
      <input type="text" className="todo-input" placeholder="Enter yout task here"/>
      <button type="submit" className="todo-btn" />
      </form>
  )
}