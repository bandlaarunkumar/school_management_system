import React,{useRef,useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'
function Register() {
  const navigate = useNavigate();
 const input = useRef(null);
 const [name,setName] = useState();
 const [password,setPassword] = useState();

  const validate = (e) =>{
      e.preventDefault();

    let x= document.getElementById('name').value;
    let y = document.getElementById('mobile').value;
    let z= document.getElementById('email').value;
    let a= document.getElementById('pswrd').value;
    // 

    if(x===" "|| y===" "|| z===" "|| a===" "){
      alert('inputs should not be empty')
    }
    else if(x.length< 6){
      alert("username should be atleast 6 characters")
    }
     else if(!/[6-9]+[0-9]{9}/.test(y)){
      alert("invalid number'")
    }

    else if(a.length<=6){
      alert("password should be atleast 6 characters'")
    }
    else{
     
      alert(`${name} Registered Successfully and your password is ${password}`)
    }
  }

 
  return (
    <div>
    <div>
    <h1>Register here to Explore</h1>
    <form action="" onSubmit={validate}>
        
        <div className="headingsContainer">
            <h3>Sign Up</h3>
            
        </div>

       
        <div className="mainContainer">
           
            <label forHtml="username">Your username</label>
            <input type="text" placeholder="Enter Username" name="username" id ="name" ref={input} value={name} onChange={(e)=>setName(e.target.value)} />

            <label forHtml="date of birth">Your Date of Birth</label>
            <input type="date" placeholder="Enter your date of birth" name="dob" />
            
            <label forHtml="mobile">Your Mobile Number</label>
            <input type="number" placeholder="Enter Your Mobile Number" name="mobile" id ="mobile" />

            <label forHtml="email">Your Email</label>
            <input type="email" placeholder="Enter Your Email Id" name="email" id = "email" />


            <label forHtml="pswrd">Your password</label>
            <input type="password" placeholder="Enter Password" name="pswrd" id="pswrd" value={password} ref={input} onChange={(e)=>setPassword(e.target.value)}/>

            <button type="submit" >Register</button>

            
            <p className="register">Back to  <NavLink to="/login" onClick={()=>navigate('./login')}>Login Page!</NavLink></p>

        </div>

      </form>
    </div>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    </div>
  )
}

export default Register