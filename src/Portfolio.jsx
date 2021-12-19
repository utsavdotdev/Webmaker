import React from 'react';
import p1 from './img/portfolio/portfolio-1.jpg';
import p2 from './img/portfolio/portfolio-2.jpg';
import p3 from './img/portfolio/portfolio-3.jfif';
import p4 from './img/portfolio/portfolio-4.jfif';
import p5 from './img/portfolio/portfolio-5.jpg';
import p6 from './img/portfolio/portfolio-6.jpg';

function Card(props) {
  return(
     <>
    <div className="col-lg-4 col-md-6 portfolio-item ">
            <div className="portfolio-wrap image">
              <img src={props.img} className="img-fluid" alt=""/>
            </div>
    </div>
   
     </>
  );
}


function Portfolio(){
    return(
<>
<section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title" >
          <h2>Portfolio</h2>
        </div>

        <div className="row portfolio-container">
<Card
  img={p1}
/>
<Card
  img={p2}
/>
<Card
  img={p3}
/>
<Card
  img={p4}
/>
<Card
  img={p5}
/>
<Card
  img={p6}
/>



         

        </div>

      </div>
    </section>
</>
    );
}
export default Portfolio;