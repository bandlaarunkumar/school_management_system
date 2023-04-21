import { Routes, Route } from 'react-router-dom'
import Main from './Main'
import Home from './components/Navpages/Home'
import Register from './components/Navpages/Register'
import Portal from './components/student/Portal'
import Notifications  from './components/Navpages/Notifications'
import Contact from './components/Navpages/Contact'
import About from './components/Navpages/About'
//import Sidebar from './components/student/Bar'
import Data from './components/Navpages/Data'
//import Index from './components/student/News/Index'
//import News from "./components/student/News/News";
import Timetable from "./components/student/Timetable"
import Dashboard from './components/student/Dashboard/Dashboard'
import Result from './components/student/Result'
import Assignment from './components/student/Assignment'
import Term from './components/student/Term'
import Upload from './components/student/Upload'
import Profile from './components/student/Profile'
import Notice from './components/student/Notice'


import './App.css';
//import {useState } from 'react'

const App = () => {

  return (
    <div  >
    <Main/>
    
    <div className="homeBg" >
    <Routes>
        <Route path="/login" element={<Home/>}/>
        <Route path="/Notifications" element={Data.map((val)=><Notifications  id={val.id}  imgSrc={val.imgSrc} alt={val.alt}/>)}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/portal" element={<Portal/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/timetable" element={<Timetable/>}/>
        <Route path="/analytics" element={<Result/>}/>
        <Route path='/assignment' element={<Assignment/>}/>
        <Route path='/term' element={<Term/>}/>
        <Route path="/test" element={<Upload/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/notice' element={<Notice/>}/>
        {/*<Route path="/index" element={<Index/>}/>
        <Route exact path="/International"></Route>
        <Route path="/National"></Route>
        <Route path="/Business"></Route>
        <Route path="/Health"></Route>
        <Route path="/Sports"></Route> */}
        
        
    </Routes>
    </div>
    
    </div>
  )
}

export default App