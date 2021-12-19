import React from 'react';


function Card100(props)
{
  return(
    <>
    <div class="icon-box" >
              <div class="icon"><i class={props.icon} ></i></div>
              <h4 class="title">{props.title}</h4>
              <p class="description">{props.des}</p>
    </div>

    </>
  )
}

function Services(){
    return(
<>
<section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 image">
          <Card100
          title="Responsive Design"
          des="Responsive web design is about creating web pages that look good on all devices!"
          icon="bi bi-laptop"
          /> 
          </div>

          
          <div class="col-lg-4 col-md-6 mt-5 mt-md-0">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-code-slash" style={{color: "#e9bf06"}}></i></div>
              <h4 class="title">Easy to Use</h4>
              <p class="description">We will provide the Website that can be used by everbody.</p>
            </div>

          </div>

          <div class="col-lg-4 col-md-6 mt-5 mt-lg-0 ">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-card-checklist" style={{color: "#3fcdc7"}}></i></div>
              <h4 class="title">Awesome UI</h4>
              <p class="description"> User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-5">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-binoculars" style={{color:"#41cf2e"}}></i></div>
              <h4 class="title">Single Page Application</h4>
              <p class="description">It is a web app implementation that loads only a single web document, and then updates the body content of that single document </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-5">
            <div class="icon-box" >
              <div class="icon"><i class="bi bi-globe" style={{color: "#d6ff22"}}></i></div>
              <h4 class="title">Hosting with Domain</h4>
              <p class="description">We will provide you the best Hosting service with desire Domain. </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-5">
            <div class="icon-box" >
              <div class="icon"><i class="bi bi-person-square" style={{color: "#4680ff"}}></i></div>
              <h4 class="title">User Friendly</h4>
              <p class="description">We will make the website that user can easily interact and use. </p>
            </div>
          </div>
        </div>


      
      </div>
    </section>
</>
    );
}
export default Services;