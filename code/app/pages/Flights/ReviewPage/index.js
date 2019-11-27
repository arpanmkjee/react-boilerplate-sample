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
import FlightsIteneray from '../../../components/Flights/FlightItenerary';
import FareSummary from '../../../components/Flights/FlightFareSummary';
import { connect } from 'react-redux'; 

class FlightReviewPage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      // <article>
      //   {/* <H1> */}
  
      //   {/* </H1> */}
      // </article>
      <div style={{backgroundColor:"#d3d3d3a1"}}>
        <div class="commonHeader">
          <div data-cy="landingContainer" class="singleHeader  ">
          <div class="headerOuter">
            <div class="chHeaderWrapper">
            <Header></Header>
            </div>
          </div>        
          </div>
        </div>
        <div class="review-page">
          <div class="hsw" id="rev-header">
            <div class="fli-intl-container">
              <div class="make_flex hrtlCenter spaceBetween">
                <h4 class="font22 latoBold whiteText headerTitle">Review your booking</h4>
                <ul class="reviewStatus step2">
                  <li>
                    <span class="numbering completed">1</span><span class="reviewText grayText font12 ">Flight Selected</span>
                  </li>
                  <li>
                    <span class="numbering onpage">2</span><span class="reviewText grayText font12 active">Review</span>
                  </li>
                  <li>
                    <span class="numbering ">3</span><span class="reviewText grayText font12 ">
                      Traveller
                      Details
                    </span>
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
              <p class="text-center dealApplied-strip" style={{ backgroundColor: "rgb(193, 241, 221)" }}>
                <font color="#0c6663">Pay using UPI to get up to Rs. 1000 EXTRA discount!</font>
              </p>
              <FlightsIteneray reviewresult={this.props.data.reviewResult}></FlightsIteneray>
              <FareSummary fareSummary={this.props.data.reviewResult}></FareSummary>
              <div class="flexible-time-overlay make_relative"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ data: state.flights }); 
export default connect(mapStateToProps, null)(FlightReviewPage); 