import React, { useState } from 'react'
import {ImFileEmpty} from 'react-icons/im'
import { getTodos } from '../../../api';
import TodoCard from '../../../components/TodoCard/TodoCard';
import Loader from '../../../components/Loader/Loader'
import './Main.scss'

const Main = () => {
  const accessToken = localStorage.getItem('accessToken')
  const [data , setData] = useState(null)
  const [updateUseEffect, setUpdateUseEffect] = useState('')

  React.useEffect(() => {
    getTodos(accessToken)
    .then(r => r.data)
    .then(res => {
      setData(res)
      setUpdateUseEffect('Got')
    })
  }, [updateUseEffect])

  return (
    <div className='container'>
      <h1 className='count'>Todo count: <span>{data ? data?.todosCount : 0}</span></h1>
      <div className='block'>
        {
          data && data?.todos.length !== 0 ? (
            data?.todos.map(item => (
              <TodoCard key={item.id} item={item} setUpdateUseEffect={setUpdateUseEffect}/>
            ))
          ) : data === null ? <Loader /> : <h1>
            <ImFileEmpty style={{color: 'white'}} />
          </h1>
        }
      </div>
    </div>
  )
}

export default Main