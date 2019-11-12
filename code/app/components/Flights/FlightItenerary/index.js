import React from 'react';
import FlightAddOns from '../FlightAddOns';

function FlightItenerary() {
    return (
        <div class="fli-intl-lhs pull-left">
            <div>
                <p class="rvw-heading LatoBold">Itinerary</p>
                <div>
                    <div class="rvw-sctn append_bottom15">
                        <div class="itnry-flt-header"
                            style={{ padding: "10px 10px 10px 0px", alignItems: "center" }}>
                            <div class="make_flex alC">
                                <div class="rvw-labelView-block"
                                    style={{ backgroundImage: "linear-gradient(294deg, rgb(82, 82, 82), rgb(23, 23, 23))" }}>
                                    <p style={{ fontSize: "18px", marginBottom: "2px", fontFamily: "lato-light, arial, helvetica, sans-serif" }}>
                                        DEPART
                            </p>
                                    <p style={{ fontFamily: "lato-bold, arial, helvetica, sans-serif", fontSize: "14px" }}>
                                        Sat 16 Nov
                            </p>
                                </div>
                                <div>
                                    <p style={{ color: "rgb(74, 74, 74)", fontSize: "18px", marginBottom: "2px" }}>
                                        <span style={{ fontFamily: "lato-bold, arial, helvetica, sans-serif" }}>BOM-HYD</span>
                                    </p>
                                    <p style={{ fontFamily: "lato-bold, arial, helvetica, sans-serif", fontSize: "14px" }}>
                                        Non stop | 1 hr 25 mins | Economy
                            </p>
                                </div>
                            </div>
                            <div class="make_flex">
                                <p class="cabin-tag marR15"
                                    style={{ backgroundImage: "linear-gradient(262deg, rgb(255, 62, 94), rgb(255, 127, 63))" }}>
                                    Non Refundable
                        </p>
                                <p>
                                    <span class="font16 LatoBold"> Fare Rules</span><span class="info-icon-black marL5 cursor_pointer"></span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div class="itnry-flt-body fli-list clearfix">
                                        <div class="airline-info pull-left airline-info-main">
                                            <div>
                                                <span class="arln-logo pull-left"
                                                    style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)" }}></span>
                                                <div class="pull-left airways-info-sect"
                                                    style={{ height: "auto" }}>
                                                    <p class="append_bottom5 font14 LatoBold"
                                                        style={{ color: "rgb(0, 0, 0)" }}>IndiGo</p>
                                                    <p class="font11" style={{ color: "rgb(74, 74, 74)" }}>
                                                        6E-5375
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pull-left">
                                            <div class="fli-time-section pull-left">
                                                <div class="dept-time append_bottom3 make_relative">
                                                    15:55
                                        </div>
                                                <p class="font14 append_bottom3 LatoBold">
                                                    Sat, 16 Nov 19
                                        </p>
                                                <p class="dept-city">
                                                    <span class="LatoBold">Mumbai</span><br />
                                                    <font color="#4a4a4a">
                                                        Chhatrapati Shivaji International
                                                        Airport
                                            </font><br />
                                                    <font color="#9b9b9b">Terminal 2</font>
                                                </p>
                                            </div>
                                            <p class="fli-stops pull-left">1 hr 25 mins </p>
                                            <div class="fli-time-section pull-left">
                                                <p class="reaching-time append_bottom3">17:20</p>
                                                <p class="font14 append_bottom3 LatoBold">
                                                    Sat, 16 Nov 19
                                        </p>
                                                <p class="arrival-city">
                                                    <span class="LatoBold">Hyderabad</span><br />
                                                    <font color="#4a4a4a">
                                                        Rajiv Gandhi International Airport
                                            </font><br />
                                                    <font color="#9b9b9b"></font>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="pull-right" style={{ maxWidth: "180px" }}>
                                            <p class="append_bottom5 LatoBold">FARE TYPE</p>
                                            <div>
                                                <p class="LatoBold append_bottom5">
                                                    <span class="font14">SAVER FARE</span> <a href="javascript:void(0);" class="marL5">+1 Fare</a>
                                                </p>
                                                <p class="font11" style={{ color: "rgb(235, 32, 38)" }}>
                                                    Date
                                            Change Chargeable<br />Upgrade to Flexi to enjoy unlimited
                                                    free date changes
                                        </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="itnry-flt-footer">
                                <div class="flexOne">
                                    <p class="text-uppercase LatoBold itnry-flt-footer-row header-row">
                                        <span class="itnry-flt-footer-col">BAGGAGE :</span><span class="itnry-flt-footer-col">Check-in</span><span class="itnry-flt-footer-col">Cabin</span>
                                    </p>
                                    <p class="itnry-flt-footer-row">
                                        <span class="itnry-flt-footer-col">Adult</span><span class="itnry-flt-footer-col">15 Kgs</span><span class="itnry-flt-footer-col">7 Kgs</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FlightAddOns></FlightAddOns>
            <div class="rvw-sctn append_bottom15 charity-sctn">
                <div class="make_flex space_between alC append_bottom15 ">
                    <p class="checkbox-group flexOne">
                        <input type="checkbox" name="charity" id="charity"
                            checked="" /><label for="charity">
                            <span class="box">
                                <span class="check"></span>
                            </span><span class="blackTxt font20 LatoBold charity-defaultTxt">
                                Thank you for donating ₹
                                5 for a cause
                    </span>
                        </label>
                    </p><a href="https://promos.makemytrip.com/charity-deduction-16112017.html"
                        target="_blank">Terms &amp; Condition</a>
                </div>
                <div class="make_flex">
                    <div class="charity-item">
                        <span class="marR15 charity-icon"
                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/charity_1.png?v=1&quot;)", width: "40px", height: "40px", backgroundSize: "contain", backgroundPosition: "center center" }}></span>
                        <p class="flexOne">
                            Offset your carbon footprints by contributing to our tree
                            plantation initiative. We have already supported plantation of over a million
                            saplings.
                </p>
                    </div>
                    <div class="charity-item">
                        <span class="marR15 charity-icon"
                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/charity_2.png?v=1&quot;)", width: "40px", height: "40px", backgroundSize: "contain", backgroundPosition: "center center" }}></span>
                        <p class="flexOne">
                            Ensure responsible tourism by joining hands with us to restore,
                            develop and protect heritage sites and monuments.
                </p>
                    </div>
                </div>
            </div>
            <div class="append_bottom15 make_relative blocked_traveller_booking">
            <a href="/traveller">
                <button id="review-continue"
                    class="fli_primary_btn btn text-uppercase continue_cta ">
                        Continue                   
                </button>
            </a>
            </div>
            <div class="fare-families-overlay make_relative slideDown" style={{ zIndex: "100" }}>
                <span class="zc-close"></span>
                <p class="fare-families-hdng append_bottom25">Select Fare</p>
                <div>
                    <div class="fli-tabs">
                        <div class="fli-tabs-item make_relative active ">
                            <p class="fli-tab-content cursor_pointer">BOM-HYD</p>
                        </div>
                    </div>
                </div>
                <div class="fareFamilies-faretypes">
                    <div class="fareFamilies-options">
                        <div class="fareFamilies-options-row fareFamilies-options-header LatoBold">
                            <div class="fareFamilies-options-col">
                                <p>Fare Type</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Cancellation Before Departure</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Date Change</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Seats</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Hand Baggage</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Priority Baggage</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Lounge Access</p>
                            </div>
                        </div>
                        <div class="fareFamilies-options-row active ">
                            <div class="fareFamilies-options-col">
                                <label class="radio clearfix"
                                    for="fareFamilies_0_undefined_0">
                                    <input id="fareFamilies_0_undefined_0"
                                        type="radio" name="fareFamilies_0_undefined_0" checked="" />
                                    <span class="outer append_right18"><span class="inner"></span></span>
                                    <div class="pull-left">
                                        <p class="append_bottom5 family-name">SAVER FARE</p>
                                        <p class="family-fare">1700</p>
                                    </div>
                                </label>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>As per Airline rules</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Chargeable</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Chargeable</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Free up to 7 Kg</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>As per airline rule</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Not Offered</p>
                            </div>
                        </div>
                        <div class="fareFamilies-options-row  ">
                            <div class="fareFamilies-options-col">
                                <label class="radio clearfix"
                                    for="fareFamilies_0_undefined_1">
                                    <input id="fareFamilies_0_undefined_1"
                                        type="radio" name="fareFamilies_0_undefined_1" />
                                    <span class="outer append_right18">
                                        <span class="inner"></span>
                                    </span>
                                    <div class="pull-left">
                                        <p class="append_bottom5 family-name">FLEXI FARE</p>
                                        <p class="family-fare">1907</p>
                                    </div>
                                </label>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>As per Airline rules</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Zero airline date change penalty</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Chargeable</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Free up to 7 Kg</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>As per airline rule</p>
                            </div>
                            <div class="fareFamilies-options-col">
                                <p>Not Offered</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fareFamilies-rt-section">
                    <div class="fareFamilies-rt-col">
                        <p class="fareFamilies-rt-title">Total Amount</p>
                        <p class="font18 fare-total">1700</p>
                    </div>
                    <div class="prepend_left25 pull-left make_relative">
                        <button class="btn fli_primary_btn text-uppercase ">
                            Continue
                </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlightItenerary;
