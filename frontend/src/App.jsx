import React from 'react'
import Home from './home/Home'
import {Route, Routes} from 'react-router-dom'
import Courses from './courses/Courses';
import Signup from './components/Signup';
const App = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/course' element={<Courses/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App