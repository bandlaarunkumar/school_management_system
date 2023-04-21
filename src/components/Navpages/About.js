import React,{useState} from 'react'
import Cards from './Cards'
function About() {

const [count,setCount]=useState(0);
const [num, setNum] = useState(1);

const id = [1,2,3,4,5];
const show =['https://www.podareducation.org/Uploads/Gallery/2019-5-9--17-4-41-263_jumbosummerswagratnagiri1819_%20(7).jpg',
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

const title = ['ART & CRAFT', 'INDEPENDENCE DAY', 'ANNUAL FEST', 'SCIENCE FAIR', 'SPORTS MEET','ZONAL EVENT', 'DRAWING COMPETETION', 'DEBATE & ELOCUTION', 'CULTURAL EVENT', 'PARENTS MEETING'];

const content=['Children learn to value and appreciate artifacts and images across cultures and times. Experience in design, art, and crafts enable them to reflect critically on their own work and those by others.', 

'Independence Day promotes nationalism and patriotism toward the nation. Flag hoisting ceremonies, cultural programmes, sports events were a part of the Independence Day celebrations', 
' Our school-sponsored an event that allows students to showcase their talents, overcome stage fright, gain confidence, and learn collaborate.'
, 'A science fair is an opportunity for students to do an independent science project following either the scientific method or the engineering design process', 
'Playing sports helps you stay in shape, teaches you how to organize your time, boosts friendships, and builds relationships with your peers and adults',
'Students are encouraged to participate in Co-Curricular, Sports Activities and creative arts such as Skating, Judo, Athletics, Swimming, Basketball, Yoga, Dance, Music etc.',
'Students learn to enjoy the experience and move on to become better and stronger artists by thinking of art contests as more than simply about winning and losing.',
'debates  provide students the opportunity to work in a collaborative and cooperative group setting,Elocution is the study of formal speaking in pronunciation, grammar, style, and tone',
'cultural activities that are carried out in schools include sports, dance, music, drama, painting, art competitions, charity events, exhibitions, debates, speeches, festival celebrations, etc', 
'Parent teacher meeting is an opportunity to exchange observation with each other. Sharing daily experience and observation , prepare and execute planning for better learning outcome of a child.'];

const alt = ['Alt1', 'Alt2', 'Alt3', 'Alt4', 'Alt5','Alt6', 'Alt7', 'Alt8', 'Alt9', 'Alt10'];



    const box = [{
        title:"STUDENT LIFE",
        src:'https://www.wau.edu/wp-content/uploads/2021/03/STUDENT_LIFE.png'
      },{
        title:"ADMISSIONS",
        src:'https://th.bing.com/th/id/OIP.Ydu1qjBUjN0W3ese2bW3BAHaHa?pid=ImgDet&rs=1'
      },{
        title:"CAREER",
        src:'https://th.bing.com/th/id/R.327de22fee2193427b47038e25699fbb?rik=0fe%2bpOZfkCiEmw&riu=http%3a%2f%2flevantgroup.net%2fhome%2fwp-content%2fuploads%2f2017%2f11%2f4780-Running-with-Briefcase-768x768.png&ehk=kLesY%2bI70szxR4fco6R9ePmgMbXZLprFrFQzBR2r0U8%3d&risl=&pid=ImgRaw&r=0'
      },
    ]

  
  

  
  const next=()=>{
    if(count<=show.length-2){
      setCount(count+2);
      setNum(num+2)
    }
    else{
      setCount(0);
      setNum(1);
    }
   
  }
  const pre=()=>{
    if(count>=0){
      setCount(count-2);
      setNum(num-2)
    }
    else{
      setCount(show.length-2)
      setNum(show.length-1);
    }
   
  }
  
      
  

  return (
    <div>
    <div style={{backgroundColor:'rgba(0,0,0,0.5)',marginTop:'5%',padding:'6%',marginLeft:'50px',border:'2px solid lightgreen',borderRadius:'25px',width:'93%',height:'50%'}}>
    <div>
        <div className="welcome" style={{}} >
          <div><h2>Welcome to Sri Akshara</h2></div>
          <div>
            <p style={{width:'60%',color:"white"}}>The world today is a global village and people are its citizens. As boundaries of location, people and time cease to exist, it is of utmost importance that we move with the times. At Sri Akshara, we have created a unique blend of world-class curricula, contemporary teaching methodologies, and equal focus on intellectual, physical and personality development, resulting future leaders who are ready to take on the world. Today, we stand as the force behind creating countless world-class doctors, engineers, IAS officers, chartered accountants, and so much more..</p>
            <img src="https://csrbox.org/company/proj_img/1635064778Education.jpg" style={{width:'33%',height:'10%',float:'right',marginTop:'-20%',border:'2px solid lightgreen',borderRadius:'8px'}}/>
            <button type="button" style={{width:'12%',border:'2px solid lightgreen',borderRadius:'40px',margin:'10px 0px 30px 0px'}}>READ MORE</button>
          </div>
        </div>
    </div>

    <div style={{display:'flex',justifyContent:'space-between', alignItems:'center',}}>
      {
        box.map( val=>{
          return(
            <div  style={{backgroundColor:'lightgray', width:'25%',cursor:'pointer',marginBottom:'-9%'}}>
          <img src={val.src} style={{width:'20%',height:'1%',border:'2px solid lightgreen',borderRadius:'5px'}}/>
          <h6 style={{float:'right',marginTop:'8%',marginRight:'30%'}}>{val.title}</h6>
          <h4 style={{float:'right',marginLeft:'50%',marginTop:'-43px'}}> &gt;</h4>
      </div>
          )
        })
      }

    </div>
  </div>


      <div style={{backgroundColor:'rgba(0, 153, 0,0.9)',width:'100%',height:'10%'}}>
        <div style={{padding:'25px', margin:'80px 0px'}}><p>.</p></div>
      </div>

  {/* RECENT ACTIVITES */}


      <div>
        <div style={{backgroundColor:'rgb(34,139,34)',width:'99.1vw',height:'115vh',border:'5px solid orange',borderRadius:'10px'}}>
            <div style={{}}>
            <h1 style ={{marginBottom:'-80px ',marginTop:'50px' ,color:'white'}}>RECENT ACTIVITES</h1>

            </div>
            <div  sytle={{}}>
  
              <div key ={id[count]} style={{display:'block',width:'30vw',float:'left',padding:'10%', margin:'0px 5%'}}>

        
                <div className="about-container" style={{border:'5px solid #E8A531',borderRadius:'20px', width:'33vw', height:'75vh', paddingRight:'0%'}}>
                      <div className="about-img" style={{width:'100%' , height:'95%',}}>
                        <img src={show[count]} alt={alt[count]} style={{width:'100%', height:'42.5vh',borderRadius:'15px'}}/>
                        <img src="arrow.jpg"  style={{width:'35px',height:'50px',marginTop:'-53%'}} onClick={next}/>

                        <div  style={{backgroundColor:"white",height:'45%',marginTop:'-25px'}}>
                            <h4 className="title">{title[count]}</h4>
                            <p className="content">{content[count]}</p>
                            <button type="button "style={{backgroundColor:'#a4a4c1', width:'40%',margin:'55px 0px 5px 30%',border:'2px solid lightgreen', borderRadius:'40px' }}>READ MORE</button>
                          </div>
                    </div>

                  </div>
                  
             </div>
             
             <div key ={id[num]} style={{display:'block',width:'30vw',float:'left',padding:'10%'}}>
        
                <div className="about-container" style={{border:'5px solid #E8A531',borderRadius:'20px', width:'33vw', height:'75vh',marginLeft:'31%'}}>
                      <div className="about-img" style={{width:'100%' , height:'95%',}}>
                        <div>                   
                            <img src={show[num]} alt={alt[num]} style={{width:'100%', height:'42.5vh',borderRadius:'15px' }}/>
                            <img src="arrow.jpg"  style={{width:'35px',height:'50px',transform:'scalex(-1)',margin:'-53% 0px 0px 93%'}} onClick={pre}/>

                        </div>
                        <div  style={{backgroundColor:"white", height:'45%',marginTop:'-25px'}}>
                            <h4 className="title" >{title[num]}</h4>
                            <p className="content">{content[num]}</p>
                            <button type="button "style={{backgroundColor:'#a4a4c1', width:'40%',margin:'55px 0px 5px 30%',border:'2px solid lightgreen', borderRadius:'40px'}}>READ MORE</button>
                          </div>
                    </div>

                  </div>
                  
             </div>
             

            </div>
        </div>
      </div>

        {/* RECORDS */}

      <div className="about-record" style={{backgroundColor:'rgb(34,139,34)',width:'99.1vw',height:'95vh',border:'5px solid orange',borderRadius:'20px',marginTop:'10%'}} >
            <Cards />
      </div>  
      

    </div>
  )
}

export default About