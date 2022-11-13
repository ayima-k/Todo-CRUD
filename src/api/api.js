const BASE_URL = 'https://todo-itacademy.herokuapp.com/api'

export const API = {
  post: (url, data) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(data)
      })
      .then(res => res.json())
  },
  createTodo: (accessToken, data) => {
    return fetch(`${BASE_URL}/todos/create`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  },
  deleteTodo: (id , accessToken) => {
    return fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    })
    .then(res => res.json())
  },
  editTodo: (id, accessToken , body) => {
    return fetch(`${BASE_URL}/todos/${id}`, {
      method:'PUT',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body:JSON.stringify(body)
    })
    .then(res => res.json())
  },
  get: (url, accessToken) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    })
    .then(res => res.json())
  },
  getSingleTodo: (id, accessToken) => {
    return fetch(`${BASE_URL}/todos/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      })
      .then(res => res.json())
  },
  getAllTodos: (accessToken) => {
    return fetch(`${BASE_URL}/todos/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      })
      .then(res => res.json())
  },
}