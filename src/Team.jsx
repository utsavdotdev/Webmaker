import React from 'react';
import t1 from './img/team/team-1.jpg';
import t2 from './img/team/team-2.jpg';
function Pro(props)
{
    return(
        <>
         <div className="col-lg-4 col-md-6 mx-auto d-block align-items-stretch">
            <div className="member">
              <div className="member-img image">
                <img src={props.img} className="img-fluid" alt=""/>
                <div className="social">
                  <a href="index.js"><i className="bi bi-twitter"></i></a>
                  <a href="index.js"><i className="bi bi-facebook"></i></a>
                  <a href="index.js"><i className="bi bi-instagram"></i></a>
                  <a href="index.js"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>{props.name}</h4>
                <span>{props.work}</span>
  
              </div>
            </div>
          </div>
        </>
    );
}

function Team(){
    return(
<>
<section id="team" className="team">
      <div className="container">

        <div className="section-title">
          <h2>Team</h2>
        </div>

        <div className="row">

       <Pro
       name="Utsav Bhattarai"
       work="Programmer"
       img={t1}/>
      
       <Pro
       name="Prakash Bhandari"
       work="Designer"
       img={t2}/>

      
         

         
        </div>

      </div>
    </section>
</>
    );
}
export default Team;