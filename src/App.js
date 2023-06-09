import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import "./index.css";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Mission from "./Mission";
import Vision from "./Vision";
import Comon from "./Comon";
import Navbar from "./Navbar";
import {Route, Routes } from 'react-router-dom';


const App = ()=>{
  return(
  <>
  <Navbar/>
  <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/about' Component={About}/>
    <Route exact path='/service' Component={Service}/>
    <Route exact path='/conact' Component={Contact}/>
    <Route exact path='/mission' Component={Mission}/>
    <Route exact path='/vision' Component={Vision}/>
    <Route exact path='/comon' Component={Comon}/>
  </Routes>
  </>
  );
};


export default App;
