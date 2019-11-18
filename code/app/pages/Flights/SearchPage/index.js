/**
 * AncillaryPage
 *
 * 
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

//import H1 from 'components/H1';
import messages from './messages';
import Header from '../../../components/App/Header';
import SearchWidget from '../../../components/App/LandingSearchWidget';
import FlightSearchFilter from '../../../components/Flights/FlightSearchFilter';
import FlightSearchResults from '../../../components/Flights/FlightSearchResults';

export default function FlightSearchPage() {
  return (
    // <article>
    //   {/* <H1> */}
    //   FlightSearchPage
    //   {/* </H1> */}
    // </article>
    <div class="commonHeader">
      <div data-cy="landingContainer" class="singleHeader ">
        <div class="headerOuter">
          <div class="chHeaderWrapper">
          <Header></Header>
          </div>
        </div> 
      </div>
      <div id="root-element">
        <SearchWidget></SearchWidget>
        <div class="fix_header_mar_top padding_bottom15" id="body--wraper" style={{backgroundColor:"#d3d3d3a1"}}>
          <FlightSearchFilter></FlightSearchFilter>
          <FlightSearchResults></FlightSearchResults>
        </div>
      </div>
    </div>
  );
}
