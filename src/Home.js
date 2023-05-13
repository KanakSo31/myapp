import React from 'react';
import './App.css';
import Comon from './Comon';
import Service from './Service';
import emage from "../src/images/Church.gif"
import { NavLink } from 'react-router-dom';


const Home = ()=>{
  return(<>
    <Comon 
    name="Join With "
    imgsrc={emage} 
    visit="./home"
    btname="Get Started"/>
    <Service/>
  </>
  );
};


export default Home;
