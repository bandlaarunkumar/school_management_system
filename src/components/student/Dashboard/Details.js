import React from 'react'
import {FaMobileAlt,FaWhatsapp,FaEnvelope}  from "react-icons/fa";
function Items(props) {
  return (
    <div>
    <div style={{display:'inline-block',marginTop:'10px',border:'2px solid rgb(210,105,30)',borderRadius:'10px'}}>
                    
    <div >
        <img src={props.src} alt={props.alt} style={{width:"18vw",height:'30vh',border:'4px solid lightgray',borderRadius:'10px'}} />
    </div>
    <div style={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        
        
        <div style={{color:"white",paddingTop:'5px'}}>
            <h4>{props.name}</h4>
        </div>
        <div style={{border:'1px solid lightgray ',padding:'1px',backgroundColor:'gray',borderRadius:'10px' ,color:'white',width:'90%',margin:'5px' }}>
            <h3 style={{textAlign:'center'}}>{props.title}</h3>
        </div>
        <div style={{margin:'5px'}}>
            <h6><FaMobileAlt/> {props.contact}</h6>
            <h6> <FaWhatsapp/> {props.contact}</h6>
            <h6><FaEnvelope/> {props.mail}</h6>
        </div>
    </div>
</div>
    </div>
  )
}

export default Items