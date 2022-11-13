import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import AuthRoutes from './pages/Auth';
import LayouRoutes from './pages/Main';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/auth/*' element={<AuthRoutes/>}/>
        <Route path='/*' element={<LayouRoutes/>}/>
      </Routes>
    </>
  );
}

export default App;