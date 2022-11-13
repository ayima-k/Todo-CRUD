import { API } from './api';

export const getRegister = (data) => {
  return API.post('/registration', data)
}

export const getAuth = (data) => {
  return API.post('/login', data)
}

export const getOut = (data) => {
  return API.post('/logout', data)
}

export const createTodo = (accessToken , data) => {
  return API.createTodo(accessToken, data)
}

export const deleteTodo = (id , accessToken) => {
  return API.deleteTodo(id , accessToken)
}
export const editTodo = (id , accessToken , data) => {
  return API.editTodo(id , accessToken , data)
}

export const getTodos = (accessToken) => {
  return API.getAllTodos(accessToken)
}

export const getCompleted = (id , accessToken) => {
  return API.get(`/todos/${id}/completed`, id, accessToken)
}

export const getSingleTodo = (id , accessToken) => {
  return API.getSingleTodo(id, accessToken)
}