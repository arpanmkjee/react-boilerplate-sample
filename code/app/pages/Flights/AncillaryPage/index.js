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
import FlightAncillaryBaggage from '../../../components/Flights/FlightAncillaryBaggage';
import { connect } from 'react-redux';

class FlightAncillaryPage extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <div class="ancillaries" style={{ backgroundColor: "#d3d3d3a1" }}>
          <div class="ancillary-wrapper make_relative">
            <div class="hsw" id="rev-header">
              <div class="fli-intl-container">
                <div class="make_flex hrtlCenter spaceBetween">
                  <h4 class="font22 latoBold whiteText headerTitle">Traveller &amp; Addons</h4>
                </div>
              </div>
            </div>
            <FlightAncillaryHeader header={this.props.data.ancillaryResult}></FlightAncillaryHeader>
            <div class="ancillary-body custom-scroll">
              <FlightAncillaryMeals></FlightAncillaryMeals>
              <FlightAncillarySeats seats={this.props.data.ancillaryResult}></FlightAncillarySeats>
              <FlightAncillaryBaggage baggage={this.props.data.ancillaryResult}></FlightAncillaryBaggage>
            </div>
            <FlightAncillaryFooter footer={this.props.data.ancillaryResult}></FlightAncillaryFooter>
          </div>
        </div>
      </div>

    );
  }

}
const mapStateToProps = state => ({ data: state.flights });
export default connect(mapStateToProps, null)(FlightAncillaryPage);