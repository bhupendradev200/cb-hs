
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import Login from './pages/login';
import privateRouter from './layout/privateRouter';
import Dashboard from './pages/Dashboard';



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<privateRouter><Dashboard /></privateRouter>} />
          </Route>
        </Routes>


      </Router>


      <h1>Hello World</h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Hello</button>

    </>
  )
}

export default App
