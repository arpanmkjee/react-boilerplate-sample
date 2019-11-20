import React from 'react';
import FlightFareSummary from '../../../components/Flights/FlightFareSummary';
import FlightTravellerDetails from '../../../components/Flights/FlightTravellerDetails';
import FlightAncillarySummary from '../../../components/Flights/FlightAncillarySummary';
import Header from '../../../components/App/Header';
import { connect } from 'react-redux'; 

class FlightTravellerPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
         
            <div style={{ backgroundColor: "#d3d3d3a1" }}>
                <div class="commonHeader">
                    <div data-cy="landingContainer" class="singleHeader  ">
                        <div class="headerOuter">
                            <div class="chHeaderWrapper ">
                                <Header></Header>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="traveler-page">
                    <div class="hsw" id="rev-header">
                        <div class="fli-intl-container">
                            <div class="make_flex hrtlCenter spaceBetween">
                                <h4 class="font22 latoBold whiteText headerTitle">Traveller &amp; Addons</h4>
                                <ul class="reviewStatus step3">
                                    <li>
                                        <span class="numbering completed">1</span><span class="reviewText grayText font12 ">Flight Selected</span>
                                    </li>
                                    <li>
                                        <span class="numbering completed">2</span><span class="reviewText grayText font12 ">Review</span>
                                    </li>
                                    <li>
                                        <span class="numbering onpage">3</span><span class="reviewText grayText font12 active">Traveller Details</span>
                                    </li>
                                    <li>
                                        <span class="numbering ">4</span><span class="reviewText grayText font12 ">
                                            Make
                                            Payment
                                    </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="fix_header_mar_top" style={{ marginTop: "0px" }}>
                        <div class="fli-intl-container prepend_top20 clearfix ">
                            <div class="fli-intl-lhs pull-left">
                                <form autocomplete="off">
                                    <FlightAncillarySummary fareSummary={this.props.data.reviewResult.header}></FlightAncillarySummary>
                                    <FlightTravellerDetails></FlightTravellerDetails>
                                </form>
                            </div>
                            <FlightFareSummary fareSummary={this.props.data.reviewResult}></FlightFareSummary>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({ data: state.flights }); 
export default connect(mapStateToProps, null)(FlightTravellerPage); 
