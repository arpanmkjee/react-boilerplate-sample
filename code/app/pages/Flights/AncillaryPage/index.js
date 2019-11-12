/**
 * 
 *
 * 
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import FlightAncillaryHeader from '../../../components/Flights/FlightAncillaryHeader';
import FlightAncillaryMeals from '../../../components/Flights/FlightAncillaryMeals';
import FlightAncillarySeats from '../../../components/Flights/FlightAncillarySeats';
import FlightAncillaryFooter from '../../../components/Flights/FlightAncillaryFooter';

//import H1 from 'components/H1';
import messages from './messages';

export default function FlightAncillaryPage() {
  return (
    // <article>
    //   {/* <H1> */}
    //   Page
    //   {/* </H1> */}
    // </article>
    <div class="ancillaries">
      <div class="ancillary-wrapper make_relative">
        <div class="hsw" id="rev-header">
          <div class="fli-intl-container">
            <div class="make_flex hrtlCenter spaceBetween">
              <h4 class="font22 latoBold whiteText headerTitle">Traveller &amp; Addons</h4>
            </div>
          </div>
        </div>
        <FlightAncillaryHeader></FlightAncillaryHeader>
        <div class="ancillary-body custom-scroll">
          <FlightAncillaryMeals></FlightAncillaryMeals>
          <FlightAncillarySeats></FlightAncillarySeats>
        </div>
        <FlightAncillaryFooter></FlightAncillaryFooter>
      </div>
    </div>

  );
}
