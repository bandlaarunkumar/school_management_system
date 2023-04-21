import React from 'react'

function Items(props) {
  return (
    <div>
    <div style={{display:'inline-block',marginTop:'10px',border:'5px solid rgb(210,105,30)',borderRadius:'20px'}}>
                    
    <div >
        <img src={props.src} alt={props.alt} style={{width:"18vw",height:'35vh',border:'4px solid lightgray',borderRadius:'15px'}} />
    </div>
    <div style={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        
        <div style={{border:'5px solid lightgray ',padding:'4px',backgroundColor:'gray',borderRadius:'20px' ,color:'white',marginTop:'-34px' }}>
            <h3>{props.cgpa}</h3>
        </div>
        <div style={{color:"white",paddingTop:'5px'}}>
            <h4>{props.name}</h4>
        </div>
    </div>
</div>
    </div>
  )
}

export default Items