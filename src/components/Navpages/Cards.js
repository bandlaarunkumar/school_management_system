import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Items from "./Items";
import "./style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Cards() {
  return (
    <>
      <h1 style={{ textAlign: "center",marginTop:'100px' }}>EXCELLECE OF OUR STUDENTS</h1>
      <div className="App" style={{marginTop:'-10%'}}>
        <Carousel breakPoints={breakPoints}>
          <Items name ="BANDLA ARUN KUMAR" src="arun.jpeg" cgpa = "9.8" alt="arun"/> 
          <Items name ="YOGESHWAR" src="yoggi.jpeg" cgpa = "9.8" alt="yoggi"/> 
          <Items name ="VINAY" src="pro.png" cgpa = "9.8" alt="vinay"/> 
          <Items name ="PREETHAM" src="preetham.jpeg" cgpa = "9.8" alt="preetham"/> 
          <Items name ="SAI" src="sai.jpeg" cgpa = "9.8" alt="arun"/> 
          <Items name ="SURYA" src="SURYA.jpeg" cgpa = "9.8" alt="SURYA"/> 
          <Items name ="BANDLA ARUN KUMAR" src="arun.jpeg" cgpa = "9.8" alt="arun"/>
          <Items name ="BANDLA ARUN KUMAR" src="arun.jpeg" cgpa = "9.8" alt="arun"/> 
          <Items name ="YOGESHWAR" src="yoggi.jpeg" cgpa = "9.8" alt="yoggi"/> 
          <Items name ="VINAY" src="pro.png" cgpa = "9.8" alt="vinay"/> 
          <Items name ="PREETHAM" src="preetham.jpeg" cgpa = "9.8" alt="preetham"/> 
          <Items name ="SAI" src="sai.jpeg" cgpa = "9.8" alt="arun"/> 
          <Items name ="BANDLA ARUN KUMAR" src="arun.jpeg" cgpa = "9.8" alt="arun"/> 
        </Carousel>
      </div>
    </>
  );
}

export default Cards;