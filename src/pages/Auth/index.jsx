import React from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import Auth from './auth/Auth'
import Register from './register/Register'

const AuthRoutes = () => {
	const navigate = useNavigate()
	const user = localStorage.getItem('accessToken')
	const isActivated = !!localStorage.getItem('isActivated')

	if (user & isActivated) navigate('/')

	return (
		<Routes>
			<Route path='/login' element={<Auth/>}/>
			<Route path='/register' element={<Register/>}/>
			<Route path='*' element={<Navigate to='/auth/register'/>}/>
		</Routes>
	)
}

export default AuthRoutes