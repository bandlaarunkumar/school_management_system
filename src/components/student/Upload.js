import React from 'react'
import Bar from './Bar'
import { FaBookReader } from 'react-icons/fa';
function Upload() {

    const courses =[{
        title:'Telugu',
        src:'91%',
        s:'Download',
        a:'Upload',
    },{
    
        title:'Hindi',
        src:'94%',
        s:'Download',
        a:'Upload',
    },{
        title:'English',
        src:'98%',
        s:'Download',
        a:'Upload',
    },{
        title:'Mathematics',
        src:'99%',
        s:'Download',
        a:'Upload',
    },{
        title:'Science',
        src:'90%',
        s:'Download',
        a:'Upload',
    },{
        title:'Social Studies',
        src:'100%',
        s:'Download',
        a:'Upload',
    }];
  return (
    <div style={{display:"flex"}}>
        <Bar/>
        <div className="my-courses" >
                <div>
                    <h1 style={{marginTop:'10%'}}>Download and Upload your Uploads</h1>
                    <div style={{display:"flex",justifyContent:'center',alignItems:'center',border:'2px solid orange',width:'170px',margin:'3% 0px 20% 12%',backgroundColor:'orange',borderRadius:'20px'}}>
                        <FaBookReader/>
                        <h6 style={{padding:'2px',marginTop:'5px'}}>My Assignments</h6>
                    </div>
                    <div style={{width:'75vw',height:'55vh',border:'2px solid orange',marginTop:'-33vh',overflowX:'hidden',padding:'20px',borderRadius:'35px',marginLeft:'85px',backgroundColor:'rgb(250,250,250,0.6)',}}>
                        {courses.map(val=>{
                            return(
                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid white',padding:'25px'}}>
                                
                           
                                <div >
                                    <h5>{val.title}</h5>
                                </div>
                                <div style={{border:'2px solid orange',width:'120px',textAlign:'center',padding:'3px',borderRadius:'20px'}}>
                                    <h6>{val.s}</h6>
                                    
                                </div>
                                <div style={{border:'2px solid orange',width:'120px',textAlign:'center',padding:'3px',borderRadius:'20px'}}>
                                    <h6>{val.a}</h6>
                                </div>
                                </div>

                            );
                        })}
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Upload