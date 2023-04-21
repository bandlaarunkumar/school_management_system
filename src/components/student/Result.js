import React from 'react'
import Bar from './Bar'
import {NavLink, useNavigate } from 'react-router-dom'
function Result() {
    const navigate = useNavigate();
  return (
    <div style={{display:'flex'}}>
        <div>
        <Bar/>
        </div>
        <div style={{marginLeft:"90%",marginTop:'15%',position:'fixed'}}>
            <NavLink to='/assignment' onClick={()=> navigate('./components/student/Assignment')} ><h5 style={{border:'2px solid orange',padding:'20px',cursor:'pointer'}}>Assignment</h5></NavLink>
            <NavLink to='/term' onClick={()=> navigate('./components/student/term')} ><h5 style={{border:'2px solid orange',padding:'20px',cursor:'pointer'}}>MidTerm</h5></NavLink>
            <NavLink to='/term' onClick={()=> navigate('./components/student/term')} ><h5 style={{border:'2px solid orange',padding:'20px',cursor:'pointer'}}>EndTerm</h5></NavLink>
        </div>

    </div>
  )
}

export default Result