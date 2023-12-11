import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {

  return (
    <div className='Todo'>
    <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : "" }`} > {/*toggle completed on click*/} 
    {task.task} </p> {/*prop for storing task*/}
    <div>
    <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />{/* adds pen icon to task */}
    <FontAwesomeIcon icon={faTrash} onClick={() =>
      deleteTodo(task.id)} /> {/* adds delete icon and deletes the task*/}
    </div>
    </div>
  )
}