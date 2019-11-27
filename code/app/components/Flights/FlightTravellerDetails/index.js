import React from 'react';
import FlightAddOns from '../FlightAddOns';
import { ancillaryResultWatcher } from '../../../containers/App/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class FlightTravellerDetails extends React.Component {
    constructor(){
        super();
        
    }
    onAncillary = (e) => {
        debugger;
        e.preventDefault();
        new Promise((resolve, reject) => {
          this.props.ancillaryResultWatcher({
          }, resolve, reject);
        }).then(() => {
          debugger; 
          console.log(this.props.data);
          this.setState({
            result:this.props.data.ancillaryResult  
          })        
          window.location.assign('/ancillary');
        }).catch((e) => {
          // could change state to trigger error rendering here
        });
      }
    render(){ 
    return (
        <div>
            <div>
                <p class="tvlr-heading make_flex space_between alC LatoBold">
                    <span>
                        Traveller
                        Details
                    </span>
                </p>
                <div class="tvlr-sctn loginPromptWrapper append_bottom15">
                    <p class="loginPromt__leftsection">
                        <img src="https://imgak.mmtcdn.com/flights/assets/media/dt/traveller/login_persuasion_icon.png?v=1"
                            class="userIcon_pos" height="28" alt="login_icon" /><span class="flexOne">Log-in to view your saved passengers list</span>
                    </p><a href="javascript:void(0);"
                        class="loginPromt__loginLink LatoBold make_relative">LOG IN</a>
                </div>
                <div class="append_bottom15">
                    <div class="tvlrDtls-wrapper make_relative" id="paxDetails">
                        <div class="tvlr-row" id="wrapper_ADULT">
                            <div class="tvlrDtls-header">
                                <p class="make_flex space_between alC">
                                    <span class="tvlrDtls-heading-txt">
                                        <span class="text-uppercase">Adult</span>
                                    </span><span class="font16 LatoMedium text-green">1/1 selected</span>
                                </p>
                            </div>
                            <div class="paddLR15">
                                <p class="tvlr-sctn tvlrDtls-heading font20">You have not added any adults to the list</p>
                            </div>
                            <p class="viewAll-trvlr">
                                <a href="javascript:void(0);"
                                    class="font14 text-uppercase LatoBold"></a>
                            </p><a href="javascript:void(0);"
                                class="font14 LatoBold text-uppercase paddLR15">+ ADD ADULT</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contactDetailsCard">
                <p class="tvlr-heading LatoBold">Contact information</p>
                <div class="tvlr-sctn append_bottom15 tvlr-Gst-sctn">
                    <p class="tvlr-Gst-sctn-subtitle append_bottom15">
                        Your ticket and flights
                        information will be sent here.
                                </p>
                    <div class="trvl-formfield-row">
                        <div class="trvl-formfield-col" id="Country Code" style={{ width: "30%" }}>
                            <div class="tvlrFormField COUNTRY_CODE">
                                <label class="LatoBold">
                                    Country
                                    Code
                                            </label>
                                <div class="trvlSelect make_relative font16">
                                    <div class="css-1pcexqc-container dropdown-traveller">
                                        <div class="css-bg1rzq-control dropdown__control">
                                            <div class="css-1hwfws3 dropdown__value-container dropdown__value-container--has-value">
                                                <div class="css-dvua67-singleValue dropdown__single-value">
                                                    India(91)
                                                            </div>
                                                <div class="css-1g6gooi">
                                                    <div class="dropdown__input"
                                                        style={{ display: "inline-block" }}>
                                                        <input autocapitalize="none" autocomplete="off"
                                                            autocorrect="off" id="react-select-2-input"
                                                            spellcheck="false" tabindex="0" type="text"
                                                            aria-autocomplete="list" value=""
                                                            style={{ boxSizing: "content-box", width: "2px", background: "0px center", border: "0px", fontSize: "inherit", opacity: "1", outline: "0px", padding: "0px", color: "inherit" }} />
                                                        <div style={{ position: "absolute", top: "0px", left: "0px", visibility: "hidden", height: "0px", overflow: "scroll", whiteSpace: "pre", fontSize: "16px", fontFamily: "Lato-Regular, Arial, Helvetica, sans-serif", fontWeight: "400", fontStyle: "normal", letterSpacing: "normal", textTransform: "none" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="css-1wy0on6 dropdown__indicators">
                                                <span class="css-1hyfx7x dropdown__indicator-separator"></span>
                                                <div aria-hidden="true"
                                                    class="css-1eew81i dropdown__indicator dropdown__dropdown-indicator">
                                                    <svg height="20" width="20" viewBox="0 0 20 20"
                                                        aria-hidden="true" focusable="false"
                                                        class="css-19bqh2r">
                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="trvl-formfield-col" id="Mobile No" style={{ width: "30%" }}>
                            <div class="tvlrFormField make_relative MOBILE_NUMBER">
                                <label class="LatoBold">Mobile No</label><input autocomplete="none"
                                    placeholder="Mobile No" class="tvlrInput " type="text"
                                    value="9700672761" />
                            </div>
                        </div>
                        <div class="trvl-formfield-col" id="Email" style={{ width: "30%" }}>
                            <div class="tvlrFormField make_relative EMAIL">
                                <label class="LatoBold">Email</label><input autocomplete="none"
                                    placeholder="Email" class="tvlrInput " type="text"
                                    value="koni@gmail.com" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="gstDetails">
                <p class="tvlr-heading LatoBold">GST number for business travel (Optional)</p>
                <div class="tvlr-sctn append_bottom15 tvlr-Gst-sctn">
                    <p class="checkbox-group ">
                        <input type="checkbox" name="GST" id="GST" /><label for="GST">
                            <span class="box">
                                <span class="check"
                                    data-ischecked="false"></span>
                            </span><span class="labeltext font18">
                                To claim credit of GST charged by airlines /
                                MMT, please enter your company’s GST number
                                        </span>
                        </label>
                    </p>
                </div>
            </div>
            <FlightAddOns></FlightAddOns>
            <div>
                <p class="rvw-heading LatoBold">Acknowledgement</p>
                <div class="rvw-sctn append_bottom15 ack-section">
                    <p class="checkbox-group append_bottom10">
                        <input type="checkbox" name="tnc" id="tnc"
                            checked="" /><label for="tnc">
                            <span class="box">
                                <span class="check"
                                    data-ischecked="true"></span>
                            </span><span class="labeltext font14">
                                <span>I understand and agree with the</span><a href="javascript:void(0);">Fare Rules</a><span> , the</span><a href="https://www.makemytrip.com/legal/privacy_policy.html"
                                    rel="noopener noreferrer" target="_blank">Privacy Policy</a><span>
                                    , the
                                            </span><a href="https://www.makemytrip.com/legal/user_agreement.html"
                                    rel="noopener noreferrer" target="_blank">User Agreement</a><span>
                                    and
                                            </span><a href="https://www.makemytrip.com/legal/user_agreement.html#tos-flights"
                                    rel="noopener noreferrer" target="_blank">
                                    Terms of
                                    Service
                                            </a><span> of MakeMyTrip</span>
                            </span>
                        </label>
                    </p>
                    <div class="make_relative blocked_traveller_booking">
                    <input class="ack-cta btn fli_primary_btn text-uppercase" type="button" onClick={this.onAncillary} value="Continue" name="btnSearch"></input>
                        {/* <a href="/ancillary">
                        <button class="ack-cta btn fli_primary_btn text-uppercase"
                            type="button">Continue
                        </button>
                    </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

const mapStateToProps = state => ({ data: state.flights });
const mapDispatchToPrps = disptch => bindActionCreators({ ancillaryResultWatcher }, disptch);
export default connect(mapStateToProps, mapDispatchToPrps)(FlightTravellerDetails); 
