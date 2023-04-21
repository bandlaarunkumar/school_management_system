import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Detail from "./Detail";
import Details from "./Details";
import "./Dash.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Staff() {
  return (
    <>
      <h1 style={{ textAlign: "center",marginTop:'100px' }}>Know Your Staff</h1>
      <div className="App" style={{marginTop:'-10%'}}>
        <Carousel breakPoints={breakPoints}>
          <Details name ="BANDLA ARUN KUMAR" src="arun.jpeg" title = "teacher" alt="arun" contact="9100******" mail="sriakshara@gmail.com"/> 
          <Details name ="YOGESHWAR" src="yoggi.jpeg" title = "teacher" alt="yoggi" contact="9100******" mail="sriakshara@gmail.com"/> 
          <Details name ="VINAY" src="pro.png" title = "teacher" alt="vinay" contact="9100******" mail="sriakshara@gmail.com"/> 
          <Details name ="PREETHAM" src="preetham.jpeg" title = "teacher" alt="preetham" contact="9100******" mail="sriakshara@gmail.com"/> 
          <Details name ="SAI" src="sai.jpeg" title = "teacher" alt="arun" contact="9100******" mail="sriakshara@gmail.com"/> 
          <Details name ="SURYA" src="SURYA.jpeg" title = "teacher" alt="SURYA" contact="9100******" mail="sriakshara@gmail.com"/> 
          <Details name ="BANDLA ARUN KUMAR" src="arun.jpeg" title = "teacher" alt="arun" contact="9100******" mail="sriakshara@gmail.com"/>
          <Details name ="BANDLA ARUN KUMAR" src="arun.jpeg" title = "teacher" alt="arun" contact="9100******" mail="sriakshara@gmail.com"/> 
          <Details name ="YOGESHWAR" src="yoggi.jpeg" title = "teacher" alt="yoggi" contact="9100******" mail="sriakshara@gmail.com"/> 
          <Details name ="VINAY" src="pro.png" title = "teacher" alt="vinay" contact="9100******" mail="sriakshara@gmail.com"/> 
          
        </Carousel>
      </div>
    </>
  );
}

export default Staff;