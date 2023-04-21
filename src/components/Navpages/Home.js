import React,{useState} from 'react'
import './Home.css'
import {NavLink,useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const [name,setName]= useState();
  const [pwd , setPwd] = useState();
  console.log(name);

  const handleEvent=()=>{
    alert(` Successfully logged in`);
  }
  return (
    
    <div>
    
    <form action="" onSubmit={handleEvent}>
        
        <div className="headingsContainer">
            <h3>Sign in</h3>
            <p>Sign in with your username and password</p>
        </div>

       
        <div className="mainContainer">
           
            <label forHtml="username">Your username</label>
            <input type="text" placeholder="Enter Username" name="username" value={name} onChange={(e)=>setName(e.target.value)} required/>

            <br/><br/>

            
            <label forHtml="pswrd">Your password</label>
            <input type="password" placeholder="Enter Password" name="pswrd"  value={pwd} onChange={(e)=>setPwd(e.target.value)} required />

            <div className="subcontainer">
                <label>
                  <input type="checkbox"  name="remember"/> Remember me
                </label>
                <p className="forgotpsd"> <a href="/">Forgot Password?</a></p>
            </div>


           
            <button type="submit" ><NavLink to="/portal"  onClick={()=> navigate("./components/student/Portal")}>Login</NavLink></button>

            
            <p className="register">Back to  <NavLink to="/register" onClick={()=>navigate("./Navpages/Register")}>Register here!</NavLink></p>

        </div>

      </form>
    </div>
  )
}

export default Home;