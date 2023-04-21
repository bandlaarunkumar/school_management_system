import React from 'react'

function Contact(props) {
    const details =[{
        title :'insta',
        img :'https://icon-library.com/images/instagram-icon-circle-png/instagram-icon-circle-png-5.jpg',
        alt :'insta'
    },
    {
        title:'gmail',
        img :'https://downloadr2.apkmirror.com/wp-content/uploads/2020/10/Gmail_round.png',
        alt :'gmail'
    },
    {
        title:'youtube',
        img:'https://www.nicepng.com/png/detail/759-7596710_app-for-marketing-on-youtube-youtube-logo-circle.png',
        alt :'youtube'
    },
    {
        title:'twitter',
        img:"https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg",
        alt:"twitter"
    },
    {
        title:'facebook',
        img:'https://www.nicepng.com/png/detail/936-9365795_facebook-icone-facebook-twitter-icon-circle.png'
    }
]

const contacts =[
    {name:'Bandla Ramakrishna',
    img:'./arun.jpeg',
    title:'Correspondent',
    mobile: "+91 949184****",
    mail:'sriaksharaschool@gmail.com'
},{
    name:'Bandla Ramanjineyulu',
    img:'./yoggi.jpeg',
    title:'Director',
    mobile: "+91 949184****",
    mail:'sriaksharaschool@gmail.com'
},{
    name:'Bandla RaghuRam',
    img:'./pro.png',
    title:'Principal',
    mobile: "+91 949184****",
    mail:'sriaksharaschool@gmail.com'
}
]
  return (
    <div style={{ backgroundColor:'rgb(0,0,0,0.7)',border:'5px solid green',borderRadius:'15px',boxShadow:'100%',margin:'40px'}}>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'50px'}}>
            <div>
                <img src="./img.png" style={{width:'180px' ,border:'5px solid #8fbc8f',borderRadius:'50rem'}}/>
            </div>
            <div>
                <h2 style={{color:'#8fbc8f',paddingTop:'15px'}}>SRI AKSHARA HIGH SCHOOL</h2>
            </div>
        </div>
        <div className="media-header" style={{margin:'0px',width:'92vw',height:'95vh'}}>
            <h1 style={{paddingTop:'0%',color:'whitesmoke'}}>CONNECT WITH US</h1>
            <div  style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'50%', height:'40%',marginLeft:'24%'}}>
                {
                    details.map((val)=>{
                        console.log(val.alt);
                        return(<div className="social-media" style={{marginTop:'-25%'}}>
                            <img src={val.img} alt={val.alt} style={{width:'70px',height:'60px',border:'1px solid whitesmoke',borderRadius:'100%',cursor:'pointer'}} />
                         </div>);
                    })
                }
            </div>

           
        </div>

        <div >
            <div className="details" style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'-35%'}}>
                {
                    contacts.map(val =>{
                        return(
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column',padding:'5px'}}>
                                <div>
                                    <img src={val.img} alt={val.alt} style={{width:'90px',height:'80px', border:'2px solid green',borderRadius:'50px',boxShadow:'100px'}}/>
                                </div>
                                <div style={{marginLeft:'60px',marginTop:'10px',color:'white'}}>
                                    <p>{val.name}</p>
                                    <p>{val.title}</p>
                                    <p>{val.mobile}</p>
                                    <p>{val.mail}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <hr style={{color:'white',margin:'20px 65px', width:'90%',height:'2px'}}></hr>

        <div className="credit" style={{margin:'10px 39%',color:'lightgreen'}}> copyright @ 2023 by <span>MR.ARUN KUMAR</span> </div>

    </div>
  )
}

export default Contact