import React from 'react';
import Navv from '../Navv';
import '../index.css';
const Errorpage = () =>
{
    return(
        <>
       <Navv/>
       <section className="error">
       <div className="section-title">
            <h1 class="error-h1">Oops! Page Not found</h1>
          </div>
       </section>
        </>

    );
}
export default Errorpage; 