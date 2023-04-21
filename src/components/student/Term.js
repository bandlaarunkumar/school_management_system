import React from 'react'
import Result from './Result'
function Term() {
  return (
    <div style={{display:'flex'}}>
    <Result style={{position:'fixed'}}/>
    <div style={{border:'2px solid orange',marginLeft:'30%',marginTop:'5%',color:'white',backgroundColor:'rgba(0,0,0,0.8)',width:'41.6%', position:'absolute'}}>
    <table style={{border:'2px solid orange',}}>
    
    <tr style={{border:'2px solid orange',padding:'40px'}}>
    <td style={{border:'2px solid orange',padding:'40px'}}>Subjects</td>
    <td style={{border:'2px solid orange',padding:'40px'}}>Assingments</td>
    <td style={{border:'2px solid orange',padding:'40px'}}>Practical</td>
    <td style={{border:'2px solid orange',padding:'40px'}}>Term</td>
</tr>
<tr>
    <td style={{border:'2px solid orange',padding:'40px'}}>Telugu</td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
</tr>
<tr style={{border:'2px solid orange'}}>
    <td style={{border:'2px solid orange',padding:'40px'}}> Hindi</td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
</tr>
<tr style={{border:'2px solid orange'}}>
    <td style={{border:'2px solid orange',padding:'40px'}}>English</td>
    <td style={{border:'2px solid orange',padding:'40px'}} > - </td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
</tr>
<tr style={{border:'2px solid orange'}}>
    <td style={{border:'2px solid orange',padding:'40px'}}>Mathematics</td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
</tr>
<tr style={{border:'2px solid orange'}}>
    <td style={{border:'2px solid orange',padding:'40px'}}>Science</td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
</tr>
<tr style={{border:'2px solid orange'}}>
    <td style={{border:'2px solid orange',padding:'40px'}}>Social</td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
    <td style={{border:'2px solid orange',padding:'40px'}}> - </td>
</tr>
    </table>
</div>
</div>
   
  )
}

export default Term