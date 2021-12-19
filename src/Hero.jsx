import React from 'react';
import logo from './img/hero-logo.png';
import {Link} from 'react-scroll';
function Hero(){
    return(
<>
<section id="hero">
    <div className="hero-container">
      <a href="/" className="hero-logo" ><div className="image"><img src={logo} className="img-fluid" alt="logo"/></div></a>
      <h1 >Welcome To Web Maker </h1>
    
     <Link to="about" smooth={true} duration={100} className="btn-get-started"> Get Started</Link>
    </div>
  </section>
</>
    );
}
export default Hero;