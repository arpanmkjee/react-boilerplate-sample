import React from 'react';
import FlightSearchOneWay from './OneWay/index'
import FlightSearchRoundTrip from './RoundTrip/index'
import FlightSearchMultiCity from './MultiCity/index'

function FlightSearchWidget() {
  return (
    <div>
    FlightSearchWidget

    <FlightSearchOneWay/>
    <FlightSearchRoundTrip/>
    <FlightSearchMultiCity/>
    </div>

    
  );
}

export default FlightSearchWidget;
