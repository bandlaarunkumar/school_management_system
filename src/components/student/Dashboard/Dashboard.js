import React,{useState} from 'react'
import './Dash.css'
import { FaCommentAlt,FaRupeeSign,FaBookReader,FaRegCalendarCheck, FaBook,FaRegAddressCard,FaRegWindowRestore,FaHeartbeat } from "react-icons/fa";
import Bar from '../Bar'
import Staff from './Staff'
function Dashboard() {

    const headings = ["Assignments","My Messages","Fee","Happenings","Results"];
    const imgSrc=['https://www.podareducation.org/Uploads/Gallery/2019-5-9--17-4-41-263_jumbosummerswagratnagiri1819_%20(7).jpg',
    'https://www.dais.edu.in/images/events_celebrations.jpg',
    'https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg',
    'https://icdn.isrgrajan.com/in/2020/02/image-002-2-750x430.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqlA_NcV37uLbBQxtudAJq_ad-oUSAABNu9trQUv2Lw&usqp=CAU&ec=48665701',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAsPkBRMjk5_i_EksRE2iTpzfghewcpgN24Xwj1WJJQ&usqp=CAU&ec=48665701',
    'https://images.uniapply.com/uploads/college/image/500/3613/St_Pauls_English_School_3819_Classroom_2_UA_2.jpg',
    'https://www.aecs-kudankulam.ac.in/homebanner/ind13.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ynmGohgV4lS0IdllUou_R5lF1VLn_LI1ZWrULTBFruYO5SC3j0DLMRaa0R0XmXZUX1_rJbmTD3o&usqp=CAU&ec=48665701',
    'https://valedindia.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-02-07-at-2.21.27-PM.jpeg'
];
 
const happenings=[{
    title:'ART & CRAFT',
    content:'Children learn to value and appreciate artifacts and images across cultures and times. Experience in design, art, and crafts enable them to reflect critically on their own work and those by others.', 
},{
    title:'INDEPENDENCE DAY',
    content:'Independence Day promotes nationalism and patriotism toward the nation. Flag hoisting ceremonies, cultural programmes, sports events were a part of the Independence Day celebrations', 
},{title:'ANNUAL FEST',
content:' Our school-sponsored an event that allows students to showcase their talents, overcome stage fright, gain confidence, and learn collaborate.'
},{
    title:'Science Fair',
    content: 'A science fair is an opportunity for students to do an independent science project following either the scientific method or the engineering design process', 

},{
    title:'SPORTS MEET',
    content:'Playing sports helps you stay in shape, teaches you how to organize your time, boosts friendships, and builds relationships with your peers and adults',

},{
    title:'ZONAL EVENT',
    content:'Students are encouraged to participate in Co-Curricular, Sports Activities and creative arts such as Skating, Judo, Athletics, Swimming, Basketball, Yoga, Dance, Music etc.',

},{
    title:'DRAWING COMPETETION',
    content:'Students learn to enjoy the experience and move on to become better and stronger artists by thinking of art contests as more than simply about winning and losing.',

},{
    title:'DEBATE & ELOCUTION', 
    content:'debates  provide students the opportunity to work in a collaborative and cooperative group setting,Elocution is the study of formal speaking in pronunciation, grammar, style, and tone',
    
},{
    title:'CULTURAL EVENT',
    content:'cultural activities that are carried out in schools include sports, dance, music, drama, painting, art competitions, charity events, exhibitions, debates, speeches, festival celebrations, etc', 

},{
    title:'PARENTS MEETING',
    content:'Parent teacher meeting is an opportunity to exchange observation with each other. Sharing daily experience and observation , prepare and execute planning for better learning outcome of a child.'

}
];

const marks=[{
    sub:'Telugu',
    score:'9.5'
},{
    sub:'Hindi',
    score:'9.5'
},{
    sub:'English',
    score:'9.5'
},{
    sub:'Mathematics',
    score:'9.5'
},{
    sub:'Science',
    score:'9.5'
},{
    sub:'Social',
    score:'9.5'
}
];

const courses =[{
    title:'Telugu',
    src:'91%',
    s:'Syllabus',
    a:'Assignment',
},{
    title:'Hindi',
    src:'94%',
    s:'Syllabus',
    a:'Assignment',
},{
    title:'English',
    src:'98%',
    s:'Syllabus',
    a:'Assignment',
},{
    title:'Mathematics',
    src:'99%',
    s:'Syllabus',
    a:'Assignment',
},{
    title:'Science',
    src:'90%',
    s:'Syllabus',
    a:'Assignment',
},{
    title:'Social Studies',
    src:'100%',
    s:'Syllabus',
    a:'Assignment',
}
];
const [count,setCount] = useState(0);

const slide =() =>{
    if(count<imgSrc.length-2){
        setCount(count+1);
    }
    
    else{
        setCount(0);
    }
    
}


setInterval(() => {
    slide();
}, 3000);

  return (
    <div style={{display:'flex',}} >
        <div style={{position:'fixed'}}>
        <Bar/>
        </div>
        <div style={{backgroundColor:'#84947d',width:'100vw',height:'290vh'}}>
            <hr style={{color:'white',height:'2px',width:'90%',marginLeft:'7%',marginBottom:'0%'}}></hr>
            <div style={{display:'flex',alignItems:'center',JustifyContent:'space-between',flexDirection:"row",marginLeft:'28%',marginTop:'-1.52%',position:''}}>
                <div className="header" style={{display:'flex',alignItems:'center',JustifyContent:'space-between',flexDirection:"row",padding:'7px',border:'2px solid orange',borderRadius:'40px',backgroundColor:'white',width:'140px',height:'40px',margin:'20px',cursor:'pointer'}}>
                    <FaBook/>
                    <h6 style={{marginLeft:'9%',marginTop:'3%'}}>{headings[0]}</h6>
                </div>
                <div style={{display:'flex',alignItems:'center',JustifyContent:'space-between',flexDirection:"row",padding:'7px',border:'2px solid orange',borderRadius:'40px',backgroundColor:'white',width:'145px',height:'40px',margin:'20px',cursor:'pointer'}}>
                    <FaCommentAlt/>
                    <h6 style={{marginLeft:'9%',marginTop:'3%'}}>{headings[1]}</h6>
                </div>
                <div style={{display:'flex',alignItems:'center',JustifyContent:'space-between',flexDirection:"row",padding:'7px',border:'2px solid orange',borderRadius:'40px',backgroundColor:'white',width:'140px',height:'40px',margin:'20px',cursor:'pointer'}}>
                    <FaRupeeSign style={{marginLeft:'25px'}}/>
                    <h6 style={{marginLeft:'9%',marginTop:'3%'}}>{headings[2]}</h6>
                </div>
                <div style={{display:'flex',alignItems:'center',JustifyContent:'space-between',flexDirection:"row",padding:'7px',border:'2px solid orange',borderRadius:'40px',backgroundColor:'white',width:'140px',height:'40px',margin:'20px',cursor:'pointer'}}>
                    <FaRegWindowRestore/>
                    <h6 style={{marginLeft:'9%',marginTop:'3%'}}>{headings[3]}</h6>
                </div>
                <div style={{display:'flex',alignItems:'center',JustifyContent:'space-between',flexDirection:"row",padding:'7px',border:'2px solid orange',borderRadius:'40px',backgroundColor:'white',width:'140px',height:'40px',margin:'20px',cursor:'pointer'}}>
                    <FaRegAddressCard/>
                    <h6 style={{marginLeft:'9%',marginTop:'3%'}}>{headings[4]}</h6>
                </div>
            </div>
            <div className= "slideshow" style={{marginLeft:'87px'}}>
                <div style={{display:'flex',alignItems:'center',JustifyContent:'space-between',flexDirection:"row",padding:'7px',border:'2px solid orange',borderRadius:'40px',backgroundColor:'orange',maxWidth:'130px',height:'39px',marginTop:'30px',marginBottom:'-1.5%',marginLeft:'30px'}}>
                    <FaHeartbeat/>
                    <h6 style={{marginLeft:'9%',marginTop:'4%'}}>Activites</h6>
                </div>
                    
                     <div style={{diplay:'flex',justifyContent:'center' ,width:'65%',height:'57vh',border:'2px solid orange',borderRadius:'30px'}}>
                    
                            <img src={imgSrc[count]} style={{width:'95%',height:'50vh',border:'1px solid orange',borderRadius:'20px',margin:'26px',marginLeft:"2.3%"}}/>
                    </div>
                            
          </div>
    {/* -------------------HAPPENINGS----------- */}
          <div>
                <div style={{marginLeft:'85px'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'69%',marginTop:"-32.8%",border:'2px solid orange',width:'170px',height:'40px',borderRadius:'40px',backgroundColor:'orange'}}>
                        <FaRegWindowRestore/>
                    
                        <h6>Happenings</h6>
                    </div>

                    <div style={{border:'2px solid orange',marginLeft:'63%',MaxWidth:'29.6%',minWidth:'25%',height:'57.4vh',marginTop:"-1.4%",position:'absolute',borderRadius:'25px',padding:'29px',overflowX:'hidden',}}>
                        {
                            happenings.map((val)=>{
                                return(
                                    <div>
                                        <div>
                                            <h5>{val.title}</h5>
                                        </div>
                                        <div style={{borderBottom:'1px solid white',borderRight:'5px solid lightgreen'}}>
                                            <p>{val.content}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
          </div>

    {/* -------------------MY COURSES----------- */}

            <div className="my-courses">
                <div>
                    <div style={{display:"flex",justifyContent:'center',alignItems:'center',border:'2px solid orange',width:'150px',margin:'31% 0px 0% 9%',backgroundColor:'orange',borderRadius:'20px'}}>
                        <FaBookReader/>
                        <h6 style={{padding:'2px',marginTop:'5px'}}>My Course</h6>
                    </div>
                    <div style={{width:'61.2%',height:'45vh',border:'2px solid orange',marginTop:'-3vh',overflowX:'hidden',padding:'20px',borderRadius:'35px',marginLeft:'85px'}}>
                        {courses.map(val=>{
                            return(
                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid white',padding:'25px'}}>
                                
                                <div style={{border:'5px solid green',padding:'20px',borderRadius:'50px'}}><h5 >{val.src}</h5></div>
                           
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

            {/*-----------------Fee------------------*/}
            <div style={{margin:'-23.5% 0 0 68%',border:'2px solid orange',width:"30%",height:'346px',borderRadius:'25px'}}>
                <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'120px',border:'2px solid orange',margin:'-4% 0 0 10%',backgroundColor:'orange',borderRadius:'20px'}}>
                    <FaRupeeSign/>
                    <h5 style={{marginLeft:'-45px',marginTop:'2px'}}>Fee</h5>
                </div>
                <div style={{marginLeft:'40%',marginTop:'30%'}}>
                    <h6>No due</h6>
                </div>
                <div style={{backgroundColor:'orange',display:'flex',justifyContent:'space-around',alignItems:'center',height:'50px',border:'1px solid white',borderRadius:'20px',margin:'28.5% 0 0 0'}}>
                    <h6 style={{marginLeft:'-30px',cursor:'pointer'}}>Show Transations</h6>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',marginLeft:'-30px',marginRight:'-40px',width:'150px'}}>
                        <FaRupeeSign style={{marginLeft:'30px'}}/>
                        <h6  style={{marginTop:'5px'}}> Fee Payment</h6>
                        
                    </div>
                </div>
            </div>

            <div className="sub-boxes" style={{display:'flex'}}>
                <div>
                    <div className="Registered-Events" style={{}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'10%',border:'2px solid orange',width:'170px',height:'40px',borderRadius:'40px',backgroundColor:'orange',marginBottom:'-3.5%',marginTop:'30px'}}>
                        <FaRegCalendarCheck/>
                
                         <h6 style={{marginTop:'4px'}}>Registered Events</h6>
                    </div>
                         
                         <div style={{width:'30.2%',height:'45vh',border:'2px solid orange',margin:'2% 0px 0% 5.9%',borderRadius:'20px',padding:'3%',overflowX:'hidden'}}>
                            {
                                happenings.map(val=>{
                                    return(
                                        <div style={{borderLeft:'5px solid lightgreen',marginBottom:'10px'}}>
                                            <div style={{paddingBottom:'20px'}}>
                                            <div style={{color:'white',}}>
                                            <h4>{val.title}</h4>
                                        </div>
                                        <div>
                                            <p>{val.content}</p>
                                        </div>
                                        <div style={{border:'1px solid white',textAlign:'center',width:'100px',padding:'2px',cursor:'pointer'}}>
                                            <h6>View more</h6>
                                        </div>
                                            </div>
                                        </div>
                                    );
                                })

                            }
                         </div>
                    
                    </div>
                    <div className="My-Messages" style={{marginRight:'-38%',marginLeft:'34%',marginTop:'-28%'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'10%',border:'2px solid orange',width:'170px',height:'40px',borderRadius:'40px',backgroundColor:'orange',marginBottom:'-3.5%',marginTop:'30px'}}>
                    <FaRegCalendarCheck/>
            
                     <h6 style={{marginTop:'4px'}}>My Messages</h6>
                </div>
                     
                     <div style={{width:'30.2%',height:'45vh',border:'2px solid orange',margin:'2% 0px 0% 5.9%',borderRadius:'20px',padding:'3%',overflowX:'hidden'}}>
                        {
                            happenings.map(val=>{
                                return(
                                    <div style={{borderLeft:'5px solid lightgreen',marginBottom:'10px'}}>
                                        <div style={{paddingBottom:'20px'}}>
                                        <div style={{color:'white',}}>
                                        <h4>{val.title}</h4>
                                    </div>
                                    <div>
                                        <p>{val.content}</p>
                                    </div>
                                    <div style={{border:'1px solid white',textAlign:'center',width:'100px',padding:'2px',cursor:'pointer'}}>
                                        <h6>View more</h6>
                                    </div>
                                        </div>
                                    </div>
                                );
                            })

                        }
                     </div>
                        
                    </div>
                    <div className="Results">
                    <div className="Registered-Events" style={{marginRight:'-60%',marginLeft:'71%',marginTop:'-28.6%'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'10%',border:'2px solid orange',width:'170px',height:'40px',borderRadius:'40px',backgroundColor:'orange',marginBottom:'-3.5%',marginTop:'30px'}}>
                        <FaRegCalendarCheck/>
                
                         <h6 style={{marginTop:'4px'}}>Results</h6>
                    </div>
                         
                         <div style={{width:'30.2%',height:'45vh',border:'2px solid orange',margin:'2% 0px 0% 5.9%',borderRadius:'20px',padding:'3%',overflowX:'hidden'}}>
                            {
                                marks.map(val=>{
                                    return(
                                        <div style={{borderLeft:'5px solid lightgreen',marginBottom:'10px'}}>
                                            <div style={{paddingBottom:'20px'}}>
                                            <div style={{color:'white',display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row',padding:'10%'}}>
                                            <h4>{val.sub}</h4>
                                            <h5>{val.score}</h5>
                                        </div>
                                        <div>
                                            
                                        </div>
                                        <div style={{border:'1px solid white',textAlign:'center',width:'100px',padding:'2px',cursor:'pointer'}}>
                                            <h6>View more</h6>
                                        </div>
                                            </div>
                                        </div>
                                    );
                                })

                            }
                         </div>
                         </div>
                    
                    </div>


                </div>
            
            </div>
            <div style={{marginLeft:'8%'}}>
                <Staff/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard