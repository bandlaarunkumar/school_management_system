import React from 'react'

import Bar from './Bar'
function Notice() {
    const Data =[
        {id:0,
        heading:"EXAMS",
        imgSrc:"https://cache.careers360.mobi/media/article_images/2020/8/31/nata-exam-dates-announced.jpg",
        alt:"EXAMS"},
        { id :1,
          heading:"RESULTS",
          imgSrc:"https://kmit.in/emagazine/wp-content/uploads/2018/02/karnataka-results.jpg",
          alt:"RESULTS"
    },
    {
    id:2,
    heading:"HOLIDAYS",
    imgSrc:"data:image/png;base64,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",
    alt:"HOLIDAYS"
    },
    {  id:3, 
    heading:"ATTENDANCE",
    imgSrc:"https://media.istockphoto.com/id/1059233806/vector/man-hold-attendance-clipboard-with-checklist-questionnaire-survey-clipboard-task-list-flat.jpg?s=612x612&w=0&k=20&c=Yv3g79R_g5mMliBx4McY2Xt0k552tVZ0xHbIBO2cMx8=",
    alt:"ATTENDANCE"},
    {  id:3, 
        heading:"EVENTS",
        imgSrc:"https://cdn.w600.comps.canstockphoto.com/upcoming-event-word-in-colored-clip-art_csp78791426.jpg",
        alt:"Events"},
        {  id:4, 
            heading:"ADMITCARDS",
            imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-6iu1PLMhQhi9pA9_AtUf01TmebeViCaJ76f0Kh3htFJteLQT4ZnrOK9lzqbIsjtUBo962t00jk&usqp=CAU&ec=48665701",
            alt:"Admitcards"},
    ];
    
  return (
    <div>
    <Bar/>
    {
        Data.map(val=>{
            return(
                <div style={{maxWidth:'90%',marginLeft:'10%',marginTop:'-45%'}}>
            <div style={{display:'block',width:'27vw',float:'left',paddingLeft:'10%',padding:'5% 150px',marginLeft:'1%',}}>
        
            <div className="not-container" style={{border:'3px solid gray', width:'20vw', height:'45vh',backgroundColor:'#63ba7d'}}>
                    <div className="not-img" style={{width:'100%' , height:'95%',}}>
                        <img src={val.imgSrc} alt={val.alt} style={{width:'90%', height:'85%',padding:'5px',marginLeft:'15px' }}/>
                        <div >
                            <button type="button "style={{backgroundColor:'#a4a4c1', width:'100%',marginTop:'15px'}}>{val.alt}</button>
                        </div>
                    </div>

            </div>
            
        
    </div>
            </div>
            );
        })
    }

    </div>
  )
}

export default Notice