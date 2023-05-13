import React from 'react';
import './App.css';
import emage from "../src/images/Church.gif"
import { NavLink } from 'react-router-dom';
import Comon from './Comon';


const Home = ()=>{
  return(<>
    <Comon name=" We are a Family of "
    imgsrc={emage} 
    btname="Contact Now"/>
  </>
  );
};


export default Home;
