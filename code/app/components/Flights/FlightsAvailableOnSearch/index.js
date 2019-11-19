import * as React from 'react';
import { connect } from 'react-redux';
import { reviewResultWatcher } from '../../../containers/App/actions'
import { bindActionCreators } from 'redux';

class FlightsAvailableOnSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: props.data.searchResult.journeyMap,
    }
  } 

  onBook = (e) => {
    debugger;
    e.preventDefault();
    new Promise((resolve, reject) => {
      this.props.reviewResultWatcher({
      }, resolve, reject);
    }).then(() => {
      debugger;
      console.log(this.props.data);
      this.setState({
        result: this.props.data.searchResult
      });
      window.location.assign('/review');
    }).catch((e) => {
      // could change state to trigger error rendering here
    });
  }

  render() {
    return (
      <div class="fli-intl-lhs pull-left">
        <div>
          {this.state.results.map(item => {
            return (<div id="fli_list_item_d6963860-f8c3-4f53-8468-01d7f6f37b46" class="fli-list one-way">
              <div>
                <div class="fli-list-body-section"
                  style={{ borderBottom: "1px solid rgb(216, 234, 255)" }}>
                  <div class="dept-options">
                    <div class="dept-options-section clearfix">
                      <div class="pull-left airline-info">
                        <div class="pull-left"><span class=" "><span
                          class="arln-logo logo1"
                          style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)" }}></span></span>
                        </div>
                        <div class="pull-left airways-info-sect">
                          <p><span class="airways-name ">{item.journeyHeader}</span></p>
                          <p class="fli-code">{item.flightDetail.legList[0].legID}</p>
                        </div>
                      </div>
                      <div class="pull-left">
                        <div class="">
                          <div class="make_relative">
                            <div class="timing-option "><label
                              for="jrnyd6963860-f8c3-4f53-8468-01d7f6f37b46_BOM$HYD$1611191555$6E-5375"
                              class="clearfix radio"
                              style={{ cursor: "default" }}><span
                                style={{ width: "18px", height: "18px", display: "block", marginRight: "9px", marginTop: "4px", float: "left" }}>&nbsp;</span>
                              <div
                                class="fli-time-section pull-left departure">
                                <div class="dept-time">{item.depTime}</div>
                                <p class="dept-city">{item.depCity}</p>
                              </div>
                              <div class="pull-left fli-stops make_relative">
                                <p class="fli-duration"><strong>{item.duration.h}</strong>
                                  hr <strong>{item.duration.m}</strong> mins </p>
                                <div class="make_relative fli-stops-sep">
                                  <p class="fli-stops-seperator"></p>
                                </div>
                                <p class="fli-stops-desc">{item.layover.stopInfo}</p>
                              </div>
                              <div class="tag-info fli-overlay-white placement-top layover-tooltip">
                                <p>{item.layover.hoverInfo.text}</p>
                              </div>
                              <div class="fli-time-section pull-left arrival">
                                <div class="text-left pull-left wdh_full">
                                  <p class="reaching-time append_bottom3">
                                    {item.arrTime}<span
                                      class="plusDay-info make_relative"><span
                                        class="fli-trvlDays LatoBold"></span></span>
                                  </p>

                                  <p class="arrival-city">{item.arrCity}</p>
                                </div>
                              </div>
                            </label></div>
                          </div>
                        </div>
                      </div>
                      <div class="pull-left  make_relative price">
                        <p><span class="actual-price">{item.fareBreakup.fareBreakUpItems[0].amount}</span></p>
                      </div>
                      <div class="pull-left make_relative">
                        <input class="fli_primary_btn text-uppercase" id="bookbutton-RKEY:452b55b3-9f45-403a-8d5e-7b39e08f20e7:1" type="button" onClick={this.onBook} value="Book Now" name="btnSearch"></input>
                        {/* <a href="/review"><button
                        id="bookbutton-RKEY:452b55b3-9f45-403a-8d5e-7b39e08f20e7:1"
                        class="fli_primary_btn text-uppercase ">Book Now</button></a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fli-list-footer-section clearfix">
                <div class="pull-right">
                  <div class="pull-left">
                    <div class="zc-listing-strip clearfix make_relative"><span
                      class="zc-card-icon"
                      style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span><span
                        class="pull-left marT2">
                        <font color="#249995">Zero <strong>Cancellation</strong> @ ₹ 549
                                                          </font>
                      </span>
                      <div
                        class="make_relative pull-left marT2 marL5 zc-benefits-trigger">
                        <a href="javascript:void(0);"><span
                          class="green-solid-info-icon"></span></a>
                        <div class="fli-overlay-white zc-benefits-tooltip">
                          <p class="font16 append_bottom15"><strong>ZERO
                                                                  </strong>Cancellation, Benefits<span
                              class="zc-inner-icon"
                              style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/zc_icon.png?v=1&quot;)" }}></span>
                          </p>
                          <div class="zc-benefits-sctn font14 append_bottom12">
                            <p class="clearfix append_bottom3"><span
                              class="pull-left">Approx Refund per
                                                                          pax</span><span class="pull-right zc-fare">₹
                                                                          1,700</span></p>
                            <p class="clearfix append_bottom3"><span
                              class="pull-left">Airline Penalty
                                                                          Charge</span><span class="pull-right zc-fare">₹
                                                                          0</span></p>
                            <p class="clearfix append_bottom3"><span
                              class="pull-left">MMT Cancellation
                                                                          Fee</span><span class="pull-right zc-fare">₹
                                                                          0</span></p>
                          </div>
                          <p class="zc-asterisk-txt"><span
                            class="grey-info-icon"></span>20% of our users
                                                                  cancel their flight.<a
                              href="https://promos.makemytrip.com/zerocancel-mob-24032017.html"
                              target="_blank">Know more</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pull-left fli-details">
                    <p class="flight-detail-tab "><span>Flight Details</span><span
                      class="fli-details-arrow "></span></p>
                  </div>
                </div>
              </div>
              <div class="collapse">
                <div class="fli-list-flight_details">
                  <div id="flightDetailsTab-1">
                    <ul transition="false" role="tablist" class="nav nav-tabs">
                      <li role="presentation" class=""><a id="flightDetailsTab-1-tab-1"
                        role="tab" aria-controls="flightDetailsTab-1-pane-1"
                        tabindex="-1" aria-selected="false" href="#">FLIGHT
                                                              DETAILS</a></li>
                      <li role="presentation" class=""><a id="flightDetailsTab-1-tab-2"
                        role="tab" aria-controls="flightDetailsTab-1-pane-2"
                        tabindex="-1" aria-selected="false" href="#">FARE SUMMARY
                                                              &amp; CANCELLATION</a></li>
                    </ul>
                    <div class="tab-content">
                      <div id="flightDetailsTab-1-pane-1"
                        aria-labelledby="flightDetailsTab-1-tab-1" role="tabpanel"
                        aria-hidden="true" class="tab-pane fade">
                        <div class="clearfix">
                          <div class="fli-list-flight_details__oneway_col pull-left">
                            <p class="font16 fli-intl-dark-grey append_bottom13 ">
                              <span class="LatoBold"> </span><span
                                class="LatoLight"></span></p>
                            <p
                              class="fli-list-flight_details__head append_bottom15 clearfix">
                              <span
                                class="pull-left flight_details__flinam">Mumbai
                                                                          to Hyderabad , 16 Nov</span><span
                                class="pull-right"><strong>01</strong> hr
                                                                          <strong>25</strong> mins </span></p>
                            <div class="clearfix append_bottom15">
                              <div
                                class="pull-left make_relative airline-information wdh_half">
                                <p
                                  class="fli-intl-light-grey clearfix append_bottom20 make_relative airline-text">
                                  <span
                                    class="pull-left multi-ticket make_relative append_right10 "><span
                                      class="arln-logo"
                                      style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)", width: "34px", height: "34px" }}></span></span><span
                                        class="pull-left flight-name">IndiGo 6E
                                                                                  5375 | Airbus A320 </span></p>
                                <div
                                  class="clearfix append_bottom15 font18 make_relative time-options">
                                  <div class="pull-left departure-option">
                                    <span
                                      class="flight-time departure">15:55</span>
                                    <p class="date_details" id="dateId">Sat,
                                                                                      16 Nov 19 </p>
                                    <p class="city_details" id="cityId">
                                      Mumbai, India</p>
                                  </div>
                                  <div class="pull-left stops-option">
                                    <p
                                      class="clearfix append_bottom7 append_right24 append_left10">
                                      <span
                                        class="line-map pull-left"><span
                                          class="flight-duration"><strong>01</strong>
                                          hr <strong>25</strong> mins
                                                                                          </span></span></p>
                                  </div>
                                  <div class="pull-left arrival-option"><span
                                    class="flight-time arrival">17:20</span>
                                    <p class="date_details" id="dateId">Sat,
                                                                                      16 Nov 19 </p>
                                    <p class="city_details" id="cityId">
                                      Hyderabad, India</p>
                                  </div>
                                </div>
                              </div>
                              <div class="baggage-info pull-left wdh_half">
                                <p
                                  class="text-uppercase LatoBold itnry-flt-footer-row header-row">
                                  <span class="itnry-flt-footer-col">BAGGAGE :
                                                                              </span><span
                                    class="itnry-flt-footer-col">Check-in</span><span
                                      class="itnry-flt-footer-col">Cabin</span>
                                </p>
                                <p class="itnry-flt-footer-row text-red">
                                  Information not available</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="flightDetailsTab-1-pane-2"
                        aria-labelledby="flightDetailsTab-1-tab-2" role="tabpanel"
                        aria-hidden="true" class="tab-pane fade">
                        <div class="fli-list-fare_details clearfix">
                          <div class="fli-list-fare_details__left pull-left">
                            <p
                              class="LatoBold font16 fli-intl-light-grey grey_btm_border append_bottom10 ">
                              Fare breakup</p>
                            <p class="clearfix append_bottom10 fareBreakup-item">
                              <span class="pull-left">
                                <font
                                  style={{ fontSize: "14px", color: "rgb(0, 0, 0)" }}>
                                  TOTAL</font>
                              </span><span class="pull-right">
                                <font
                                  style={{ fontSize: "14px", color: "rgb(0, 0, 0)" }}>
                                  ₹ 1,700</font>
                              </span></p>
                            <p class="clearfix append_bottom10 fareBreakup-item">
                              <span class="pull-left">
                                <font style={{ color: "rgb(135, 135, 135)" }}>Base
                                                                              Fare</font>
                              </span><span class="pull-right">
                                <font style={{ color: "rgb(135, 135, 135)" }}>₹ 1,015
                                                                          </font>
                              </span></p>
                            <p class="clearfix append_bottom10 fareBreakup-item">
                              <span class="pull-left">
                                <font style={{ color: "rgb(135, 135, 135)" }}>
                                  Surcharges</font>
                              </span><span class="pull-right">
                                <font style={{ color: "rgb(135, 135, 135)" }}>₹ 685
                                                                          </font>
                              </span></p>
                          </div>
                          <div class="fli-list-fare_details__right pull-right">
                            <div class="append_bottom15">
                              <div class="fare-rules not-found">
                                <p><span
                                  class="fare-rules-not-found-icon"></span><br /><span
                                    class="display-text">Sorry! Fare rules
                                    could not be fetched at the
                                                                                  moment.</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          }
 )
          }
        </div>
      </div>
    )
  }
} 

const mapStateToProps = state => ({ data: state.flights });
const mapDispatchToPrps = disptch => bindActionCreators({ reviewResultWatcher }, disptch);
export default connect(mapStateToProps, mapDispatchToPrps)(FlightsAvailableOnSearch); 