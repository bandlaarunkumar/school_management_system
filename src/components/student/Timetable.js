import React,{useState} from 'react'
import Bar from './Bar'
//import './index.css'

function Timetable() {
    const schedule = ['https://cdn-az.allevents.in/events7/banners/576f3206339d8e5bd223f54ab771410afd827f01de805d959417774afc7faeea-rimg-w715-h715-gmir.jpg?v=1680832454',
                      'monday.jpeg',
                      'tuesday.jpeg', 
                      'wednesday.jpeg', 
                      'thrusday.jpeg', 
                      'friday.jpeg', 
                      'saturday.jpeg' 
                      ];
    const [id,setId] =useState(); 

    
  return (
    <div >
 
    <div style={{display:'flex',jusfifyContent:'space-between',alignItems:"center", marginTop:'50px'}} >
    <div className="days" style={{backgroundColor:'lightgreen',padding:'10px',color:'orange',margin:'20px',marginLeft:"60px",border:'7px solid lightgray',borderRadius:'10px',cursor:'pointer'}} onClick={()=>setId(1)}>
        <h3>MONDAY</h3>
    </div>
    <div className="days" style={{backgroundColor:'lightgreen',padding:'10px',color:'orange',margin:'20px',border:'7px solid lightgray',borderRadius:'10px',cursor:'pointer'}} onClick={()=>setId(2)}>
        <h3>TUESDAY</h3>
    </div>
    <div className="days" style={{backgroundColor:'lightgreen',padding:'10px',color:'orange',margin:'20px',border:'7px solid lightgray',borderRadius:'10px',cursor:'pointer'}} onClick={()=>setId(3)}>
        <h3>WEDNESDAY</h3>
    </div>
    <div className="days" style={{backgroundColor:'lightgreen',padding:'10px',color:'orange',margin:'20px',border:'7px solid lightgray',borderRadius:'10px',cursor:'pointer'}} onClick={()=>setId(4)}>
        <h3>THRUSDAY</h3>
    </div>
    <div className="days" style={{backgroundColor:'lightgreen',padding:'10px',color:'orange',margin:'20px',border:'7px solid lightgray',borderRadius:'10px',cursor:'pointer'}} onClick={()=>setId(5)}>
        <h3>FRIDAY</h3>
    </div>
    <div className="days" style={{backgroundColor:'lightgreen',padding:'10px',color:'orange',margin:'20px',border:'7px solid lightgray',borderRadius:'10px',cursor:'pointer'}} onClick={()=>setId(6)}>
        <h3>SATURDAY</h3>
    </div>
    <div className="days" style={{backgroundColor:'lightgreen',padding:'10px',color:'orange',margin:'20px',border:'7px solid lightgray',borderRadius:'10px',cursor:'pointer'}} onClick={()=>setId(0)}>
        <h3>SUNDAY</h3>
    </div>
    

</div>
        <div>
            <img src={schedule[id]} style={{width:'40%',height:'80vh',marginLeft:"30%",marginTop:'50px',border:'10px solid gray',borderRadius:'15px'}}/>
        </div>
    </div>
  )
}

export default Timetable