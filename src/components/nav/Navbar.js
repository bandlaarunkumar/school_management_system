import { NavLink } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'
//import {useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();

  //const [mode, setMode] = useState("night.jpg");
  return (
    <>
    <nav className="navbar">
    <div className="container">
      <div className="logo">
        <img src="./img.png" alt='logo' />
        <h1>SRI AKSHARA HIGH SCHOOL</h1> 
      </div>
      <div className="nav-elements">
        <ul>
         
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/notifications">Notifications</NavLink>
          </li>
          <li>
            <NavLink to="/register">Apply Now</NavLink>
          </li>
          
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <div>
            <NavLink to="/login"  className = "login" onClick={()=>navigate("./Navpages/Home")}>Login</NavLink>
          </div>

              {/*<div className="mode"><img id ="src" src={mode} onClick={ (mode==="night.jpg") ? setMode("light.jpg") : setMode("night.jpg")}/></div>*/}

        </ul>
      </div>
    </div>

  </nav>
  
    </>
  )
}

export default Navbar