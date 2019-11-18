/**
 * 
 *
 * 
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

//import H1 from 'components/H1';
import messages from './messages';

import Header from '../../../components/App/Header'
import Footer from '../../../components/App/Footer'
import Account from '../../../components/App/Account'
import MinContainer from '../../../components/Flights/FlightMinContainer'

export default function FlightLandingPage() {
  return (
    // <article>
    //   {/* <H1> */}
      
    //   {/* </H1> */}
    // </article>
    <div className="bgGradient" style={{ backgroundSize: "100% 485px" }}>
    <div className="page-section sticky-scroll topSection appendBottom40" id="SW">       
        <div></div> 
        <div data-cy="landingContainer" className="landingContainer ">
        <Account></Account>
        <div class="headerOuter">
          <div class="chHeaderWrapper navOnly">
          <Header></Header>
          </div>
        </div>               
      </div>
      <div className="widgetLoader"></div>
    </div>
    <MinContainer></MinContainer>
    <Footer></Footer>
  </div>  
  );
}
