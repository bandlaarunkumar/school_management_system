import React from 'react'
import Bar from './Bar'
function Profile() {
  return (
    <div style={{display:'flex'}}>
        <Bar/>
        <div style={{marginLeft:'31%',marginTop:'7%',position:'fixed',backgroundColor:'rgba(0,0,0,0.7)',width:'40vw',height:'75vh',display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',border:'2px solid orange',borderRadius:'20px'}}>
            <div>
                <img src="./arun.jpeg" alt="Arun"  style={{width:'100px',border:'2px solid orange',borderRadius:'80%'}}/>
            </div>
            <div style={{color:'white',padding:'5%'}}>
                <table>
                <tr>
                <td><h5>Name </h5></td>
                <td><h6>BANDLA ARUN KUMAR</h6></td>
                </tr>
                <tr>
                <td><h5>Father Name </h5></td>
                <td><h6>BANDLA </h6></td>
                </tr>
                <tr>
                <td><h5>Mother Name </h5></td>
                <td><h6>BANDLA MADHAVI LATHA</h6></td>
                </tr>
                <tr>
                <td><h5>Date Of Birth </h5></td>
                <td><h6>10-09-2002</h6></td>
                </tr>
                <tr>
                <td><h5>Mobile :</h5></td>
                <td><h6>910043****</h6></td>
                </tr>
                <tr>
                <td><h5>Email :</h5></td>
                <td><h6>bandlaarunkumar002@gmail.com</h6></td>
                </tr>
                <tr>
                <td><h5>Section</h5></td>
                <td><h6>K20SH</h6></td>
                </tr>
                <tr>
                <td><h5>Address :</h5></td>
                <td><h6>DHONE, AP</h6></td>
                </tr>
                <tr>
                <td><h5> Batch :</h5></td>
                <td><h6>2020</h6></td>
                </tr>
                
                
                

                </table>
            </div>
            
        </div>

    
    </div>
  )
}

export default Profile