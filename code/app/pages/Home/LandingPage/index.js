/**
 * AncillaryPage
 *
 * 
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

//import H1 from 'components/H1';
import messages from './messages'; 
import FlightsLandingPage from '../../Flights/LandingPage'
import '../../../css/home.css';
import '../../../css/common.css'; 

export default function LandingPage() {
  return (
    <article>
      {/* <H1> */} 
      {/* LandingPage */}
      <FlightsLandingPage></FlightsLandingPage> 
      {/* </H1> */}
    </article>
  );
}
