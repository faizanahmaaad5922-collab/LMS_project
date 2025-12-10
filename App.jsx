import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './assets/login/login'
import Resgister from './assets/register/register'
import Dashboard from './dashboard/dashboard'
import Student from './student/student'
import Exam from './assets/exam/exam'
import Teacher from './assets/teacher/teacher'
import Admin from './admin/admin'
import Detail from './admin/detail/detail'
import Staff from './admin/detail/staff/staff'
import Nstaff from './admin/detail/staff/nstaff/nstaff'
import Nparent from './nparent/nparent'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Resgister/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/exam' element={<Exam/>}/>
      <Route path='/teacher' element={<Teacher/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/staff' element={<Staff/>}/>
      <Route path='/nstaff' element={<Nstaff/>}/>
      <Route path='/nparent' element={<Nparent/>}/>
     </Routes>
     </BrowserRouter>
    </>
    
  )
}

export default App;


