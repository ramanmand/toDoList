import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task, toggleComplete}) => {

  return (
    <div className='Todo'>
    <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : "" }`} > {/*toggle completed on click*/} 
    {task.task} </p> {/*prop for storing task*/}
    <div>
    <FontAwesomeIcon icon={faPenToSquare} /> {/* adds pen icon to task */}
    <FontAwesomeIcon icon={faTrash} /> {/* adds delete icon to task*/}
    </div>
    </div>
  )
}