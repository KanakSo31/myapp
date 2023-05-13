import React from 'react';
import './App.css';
import emage from "../src/images/Church.gif"
import { NavLink } from 'react-router-dom';


const About = ()=>{
  return(<>
    <section id ="header" className="d-flex align-item-center">
    <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className='row'>
                    <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>We are a Family of <strong className='brand-name'>wisdom &<br/> great truths.</strong></h1>
                        <h6 className='my-3'>We believe Buddhists have lost the way of the Buddha impact.</h6>
                        <div className='mt-3'>
                            <NavLink to='./service' className='btn-get-started'>Get Started</NavLink>
                        </div>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-2 header-img '>
                        <img src={emage} className="img-fluid animated" alt='About-im'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
  );
};


export default About;
