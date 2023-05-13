import React from 'react';
import './App.css';
import emage from "../src/images/Church.gif"
import { NavLink } from 'react-router-dom';
import Comon from './Comon';


const Vision = ()=>{
  return(<>
     <Comon name=" We Aim To "
    imgsrc={emage} 
    btname="Learn More"/>
  </>
  );
};


export default Vision;
