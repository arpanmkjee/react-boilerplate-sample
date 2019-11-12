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
    <article>
      {/* <H1> */}
      <div className="bgGradient" style={{ backgroundSize: "100% 485px" }}>
        <div className="page-section sticky-scroll topSection appendBottom40" id="SW">       
            <div></div> 
            <div data-cy="landingContainer" className="landingContainer ">
            <Account></Account>
            <Header></Header>       
          </div>
          <div className="widgetLoader"></div>
        </div>
        <MinContainer></MinContainer>
        <Footer></Footer>
      </div>  
  
      {/* </H1> */}
    </article>
  );
}
