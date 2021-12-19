import React from 'react';
import Hero from './Hero';
import Navv from './Navv';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Aboutpage from './pages/Aboutpage';
import Servicespage from './pages/Servicespage';
import Portfoliopage from './pages/Portfoliopage';
import Teampage from './pages/Teampage';
import Contactpage from './pages/Contactpage';
import Errorpage from './pages/Errorpage';


const  Comp= () => {
    return(
<>
<Router>
<Switch>
    <Route exact path="/">
<Hero/>
<Navv/>
<About/>
<Services/>
<Portfolio/>
<Team/>
<Contact/>
<Footer link='hero'/>
  </Route>


  <Route exact path="/about" >
      <Aboutpage/>
  </Route>
  <Route exact  path="/services">
      <Servicespage/>
  </Route>

  <Route exact path="/portfolio">
      <Portfoliopage/>
  </Route>

  <Route exact path="/team">
      <Teampage/>
  </Route>

  <Route exact path="/contact">
      <Contactpage/>
  </Route>
  <Route>
      <Errorpage/>
  </Route>





</Switch>
</Router>

</>
    );
};
export default Comp;