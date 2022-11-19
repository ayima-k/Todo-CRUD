import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import PrivateRoutes from './components/PrivateRoutes';
import Main from './pages/Main/main/Main'
import Admin from './pages/Main/admin/Admin'
import Auth from './pages/Auth/auth/Auth'
import Register from './pages/Auth/register/Register'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<Main/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='*' element={<Navigate to='/'/>} />
        </Route>
        <Route path='/auth/login' element={<Auth/>}/>
        <Route path='/auth/register' element={<Register/>}/>
        <Route path='*' element={<Navigate to='/auth/register'/>}/>
      </Routes>
    </>
  );
}

export default App;