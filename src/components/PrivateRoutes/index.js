import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
	const user = localStorage.getItem('accessToken')
	const isActivated = !!localStorage.getItem('isActivated')

  if (!user && !isActivated) {
    return <div className='not-auth'>
      <h1>Not Auth</h1>
      <Link to='/auth/register'>Go to register</Link>
    </div>
  }

	return user && isActivated ? <Outlet/> : <Link to='/auth/*'/>
}

export default PrivateRoutes