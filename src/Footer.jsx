import React from 'react';
import img from './img/hero-logo.png';
import {Link} from 'react-scroll';


const Footer = (props) =>{
    return(
        <>
 <footer id="footer">

<div className="footer-top">

  <div className="container">

    <div className="row justify-content-center">
      <div className="col-lg-6">
        <a href="#header" className="scrollto footer-logo"><img src={img} alt="logo"/></a>
        <h3>WebMaker</h3>
      </div>
    </div>
  </div>
</div>

<div className="container footer-bottom clearfix">
  <div className="copyright">
    &copy; Copyright <strong><span>WebMaker</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
    Designed by <a href="index.js">Me</a>
  </div>
</div>
</footer>

<Link to={props.link} smooth={true} duration={100} className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
        </>
    );
}
export default Footer;