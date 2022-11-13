import React, { useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {FaEdit} from 'react-icons/fa'
import { getCompleted, deleteTodo, getSingleTodo, editTodo } from '../../api/index';

const TodoCard = ({item , setUpdateUseEffect}) => {
  const accessToken = localStorage.getItem('accessToken')
  const [show , setShow] = useState(false)
  const [title , setTitle] = useState(null)
  const [newTitle , setNewTitle] = useState('')

  const handleCompleteTodo = (id) => {
    getCompleted(id, accessToken)
    .then(() => setUpdateUseEffect('Completed'))
  }

  const handleDeleteTodo = (id) => {
    deleteTodo(id , accessToken)
    .then(() => setUpdateUseEffect('Deleted'))
  } 

  const handleTitleToEdit = (id) => {
    getSingleTodo(id , accessToken)
    .then(res => {
      setUpdateUseEffect('Edit')
      setShow(true)
      setTitle(res)
    })
  }
  
  const editTodos = (id) => {
    editTodo(
      id, 
      accessToken, 
      {
        title: newTitle.length !== 0 && newTitle || title.title,
      }
    )
    .then(() => {
      setShow(false)
      setUpdateUseEffect('Edited')
    })
  }

  return (
    <div key={item.id} className='card'>
      {item.completed && <img className='completed' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/2048px-Check_green_icon.svg.png'/>}
      <div className='card-header'>
        <h3>{item.title}</h3>
      </div>
      <div className='card-body'>
        <p>
          {item.content}
        </p>
        <p className='date'>{item.date}</p>
      </div>
      <div className='card-input'>
        {show && <p>Change title to:</p>}
        {show && <input type='text' onChange={(e) => setNewTitle(e.target.value)} placeholder='Change to new Title' defaultValue={title.title}/>}
        {
          show && (
            <div className='change_btn'>
              <button onClick={() => editTodos(item.id)}>Change</button>
            </div>
          )
        }
      </div>
      <div className='card-footer'>
        <button onClick={() => handleDeleteTodo(item.id)}><AiFillDelete /></button>
        <button onClick={() => handleCompleteTodo(item.id)}><BsFillCheckCircleFill /></button>
        <button onClick={() => handleTitleToEdit(item.id)}><FaEdit /></button>
      </div>
    </div>
  )
}

export default TodoCard