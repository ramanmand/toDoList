import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task}) => {

  return (
    <div className='Todo'>
    <p> {task.task} </p>
    <div>
    <FontAwesomeIcon icon={faPenToSquare} /> {/* adds pen icon to task */}
    <FontAwesomeIcon icon={faTrash} /> {/* adds delete icon to task*/}
    </div>
    </div>
  )
}