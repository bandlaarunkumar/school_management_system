import React, {useState} from 'react'
import Bar from './Bar'
function Portal() {
  const myStyle={height:'100vh' ,
  width: '100vw',
 
  backgroundImage:'url("./img.png")',
  backgroundPosition: ' center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  display:'flex',
  flexDirection: 'row',
  backgroundColor:'white'
}

const changeStyle ={height:'100vh' ,
width: '100vw',

backgroundImage:'url("./dark.png")',
backgroundPosition: ' center',
backgroundRepeat: 'no-repeat',
backgroundSize: 'contain',
display:'flex',
flexDirection: 'row',
backgroundColor:'#0f0b03'
}
  const [style, setStyle] = useState(myStyle)

    const [mode, setMode] = useState("night.jpg");

    const btn = ()=>{
      (mode==="night.jpg") ? setMode("light.jpg") : setMode("night.jpg")
    }

    const bg =()=>{
     (style === myStyle) ? setStyle(changeStyle) : setStyle(myStyle);
     
    }


  return (
    <div style={style}>

        <Bar/>
        <div className="mode" style={{marginLeft:'97%', position:'absolute'}}>
          <img id ="src" src={mode} 
            style={{width:'50px',height:'30px', border:'1px solid black',borderRadius:'16px',padding:'0px'}}
            onClick={()=> {bg();btn();} }
            />
         </div>

        
    </div>
  )
}

export default Portal