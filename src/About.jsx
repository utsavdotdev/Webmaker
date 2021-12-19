import React from 'react';
import logo from './img/about.jpg';
import './Main.js';
function About(){
    return(
<>
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About Us</h2> 
        </div>

        <div className="row">
          <div className="col-lg-6" >
            <div className="image">
              <img src={logo} className="img-fluid" alt=""/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content pt-4 pt-lg-0 pl-0 pl-lg-3 ">
              <h3>We are the team of best Designer and Programmer serves you</h3>
              <p className="fst-italic">
                We will provide you the best website with the Awesome UI and Design.  
              </p>
              <p className="fst-bold">Our Features:</p>

              <ul>
                <li><i className="bi bi-check-all"></i>Best Designer and Programmer makes the website as per requirement of the user</li>
                <li><i className="bi bi-check-all"></i>User Friendly website makes the user east to surf the website. </li>
                <li><i className="bi bi-check-all"></i>Complete Responsive Website makes the content of website Awesome that look good in all Devices.  </li>
              </ul>
              <p>
              We have work with many Clients and prepare their project as per their requirement and they are fully satisfied.
              At the beginning of our Business,We have faced many problem to find the client but We haven't stop.We have worked hard and provide the high quality content in time then Our freelancing is grow!    </p>
            </div>
          </div>
        </div>

      </div>
    </section>
   
</>
    );
}
export default About;