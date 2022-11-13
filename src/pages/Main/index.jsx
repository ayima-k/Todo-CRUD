import React from 'react'
import { Route, Routes, Navigate, Link } from 'react-router-dom'
import Main from './main/Main'
import Admin from './admin/Admin'

const LayouRoutes = () => {
	const access = localStorage.getItem('accessToken')
	const isActivated = !!localStorage.getItem('isActivated')

	if(!access & !isActivated) {
    return (
      <div className='not-auth'>
        <h1>Not Auth</h1>
        <Link to='/auth/register'>Go to register</Link>
      </div>
    )
  }

	return (
		<Routes>
			<Route path='/' element={<Main/>}/>
			<Route path='/admin' element={<Admin/>}/>
      <Route path='*' element={<Navigate to='/'/>} />
		</Routes>
	)
}

export default LayouRoutes