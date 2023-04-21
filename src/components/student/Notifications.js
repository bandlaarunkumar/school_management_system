import React from 'react'
import Data from './Data'
import Bar from './Bar'
function Notifications(props) {
    
  return (
    <div style={{display:'block',width:'27vw',float:'left',paddingLeft:'10%',padding:'5% 190px'}}>
        <Bar/>
        
            <div className="not-container" style={{border:'3px solid gray', width:'20vw', height:'45vh',backgroundColor:'#63ba7d'}}>
                    <div className="not-img" style={{width:'100%' , height:'95%',}}>
                        <img src={props.imgSrc} alt={props.alt} style={{width:'90%', height:'85%',padding:'5px',marginLeft:'15px' }}/>
                        <div >
                            <button type="button "style={{backgroundColor:'#a4a4c1', width:'100%',marginTop:'15px'}}>{props.alt}</button>
                        </div>
                    </div>

            </div>
            
        
    </div>
  )
}

export default Notifications