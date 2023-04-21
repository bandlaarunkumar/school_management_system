import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import News from "./News";
import Nav from "./nav";
//import {BrowserRouter,Routes,Route,Link} from "react-router-dom"


function Index() {
  return (
    <>
  <Nav />
        <News newsName="India" />
        <News newsName="business" />
        <News newsName="Health" />
        <News newsName="Indian Sports" />
    
  </>
    
  )
}

export default Index