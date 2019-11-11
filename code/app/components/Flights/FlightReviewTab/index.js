import React from 'react';

function FlightReviewTab() {
  return (
    <div class="commonHeader">
                <div data-cy="landingContainer" class="singleHeader  ">
                    <headerOuter></headerOuter>                  
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
                <div class="fix_header_mar_top" style={{marginTop: "0px;"}}>
                    <div class="fli-intl-container prepend_top20 clearfix ">
                        <p class="text-center dealApplied-strip" style={{backgroundColor: "rgb(193, 241, 221);"}}>
                            <font color="#0c6663">Pay using UPI to get up to Rs. 1000 EXTRA discount!</font>
                        </p>
                        <div class="fli-intl-lhs pull-left">
                            <div>
                                <p class="rvw-heading LatoBold">Itinerary</p>
                                <div>
                                    <div class="rvw-sctn append_bottom15">
                                        <div class="itnry-flt-header"
                                             style={{padding: "10px 10px 10px 0px", alignItems: "center"}}>
                                            <div class="make_flex alC">
                                                <div class="rvw-labelView-block"
                                                     style={{backgroundImage: "linear-gradient(294deg, rgb(82, 82, 82), rgb(23, 23, 23))"}}>
                                                    <p style={{fontSize: "18px", marginBottom: "2px", fontFamily: "lato-light, arial, helvetica, sans-serif"}}>
                                                        DEPART
                                                    </p>
                                                    <p style={{fontFamily: "lato-bold, arial, helvetica, sans-serif", fontSize: "14px"}}>
                                                        Sat 16 Nov
                                                    </p>
                                                </div>
                                                <div>
                                                    <p style={{color: "rgb(74, 74, 74)", fontSize: "18px", marginBottom: "2px"}}>
                                                        <span style={{fontFamily: "lato-bold, arial, helvetica, sans-serif"}}>BOM-HYD</span>
                                                    </p>
                                                    <p style={{fontFamily: "lato-bold, arial, helvetica, sans-serif", fontSize: "14px"}}>
                                                        Non stop | 1 hr 25 mins | Economy
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="make_flex">
                                                <p class="cabin-tag marR15"
                                                   style={{backgroundImage: "linear-gradient(262deg, rgb(255, 62, 94), rgb(255, 127, 63))"}}>
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
                                                                      style={{backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=4&quot;)"}}></span>
                                                                <div class="pull-left airways-info-sect"
                                                                     style={{height:"auto"}}>
                                                                    <p class="append_bottom5 font14 LatoBold"
                                                                       style={{color: "rgb(0, 0, 0)"}}>IndiGo</p>
                                                                    <p class="font11" style={{color:"rgb(74, 74, 74)"}}>
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
                                                                    <span class="LatoBold">Mumbai</span><br/>
                                                                    <font color="#4a4a4a">
                                                                        Chhatrapati Shivaji International
                                                                        Airport
                                                                    </font><br/>
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
                                                                    <span class="LatoBold">Hyderabad</span><br/>
                                                                    <font color="#4a4a4a">
                                                                        Rajiv Gandhi International Airport
                                                                    </font><br/>
                                                                    <font color="#9b9b9b"></font>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="pull-right" style={{maxWidth: "180px"}}>
                                                            <p class="append_bottom5 LatoBold">FARE TYPE</p>
                                                            <div>
                                                                <p class="LatoBold append_bottom5">
                                                                    <span class="font14">SAVER FARE</span> <a href="javascript:void(0);" class="marL5">+1 Fare</a>
                                                                </p>
                                                                <p class="font11" style={{color: "rgb(235, 32, 38)"}}>
                                                                    Date
                                                                    Change Chargeable<br/>Upgrade to Flexi to enjoy unlimited
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
                            <div>
                                <p class="rvw-heading LatoBold">Add-ons</p>
                                <div class="append_bottom15">
                                    <div class="rvw-sctn zcAddon-sctn make_relative">
                                        <p class="append_bottom20 font18 zc-logo-sctn">
                                            <span class="zc-rvw-icon zc-rvw-icon-pos"></span><span class="font20 LatoBold">ero</span> Cancellation
                                        </p>
                                        <div class="zcAddon-wrap">
                                            <div>
                                                <div class="append_bottom10 font18 LatoLight zcAddon-desc">
                                                    Buy Zero
                                                    Cancellation for ₹ 549 and get maximum refund in case of cancellation
                                                    upto 24 Hrs before departure
                                                </div>
                                                <p class="font16">
                                                    <span class="LatoBold">Approx refund :</span><span class="font18 LatoBold zcAddon-txt marL5">₹ 1,705</span>
                                                </p>
                                            </div>
                                            <div class="text-center">
                                                <p class="zcAddon-cta">
                                                    <a href="javascript:void(0);"
                                                       class="btn fli_secondry_btn text-uppercase fli-rounded-btn append_bottom25">Add</a>
                                                </p>
                                                <p>
                                                    <a href="https://promos.makemytrip.com/zerocancel-mob-24032017.html"
                                                       rel="noopener noreferrer" target="_blank" class="">
                                                        Terms &amp;
                                                        Conditions
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="zcAddon-strip LatoMedium zcAddon-txt">
                                        <span>
                                            Did you know? 20% of users cancel
                                            their flights. You can save on the airline and MMT cancellation penalties by
                                            selecting Zero Cancellation. To view the penalties,
                                        </span><span>
                                            <a href="javascript:void(0)">click here</a>
                                        </span>
                                    </p>
                                </div>
                                <div class="rvw-sctn trvl-insurance-sctn append_bottom15 " id="insurance-section">
                                    <span class="marR15"
                                          style={{width: "22px", height: "27px", backgroundSize: "contain", backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/insurance.png?v=1&quot;)"}}></span>
                                    <div class="flexOne">
                                        <div class="make_flex space_between">
                                            <div>
                                                <p class="font20 append_bottom5 LatoLight">Secure your trip</p>
                                                <p class="append_bottom15 font14 text-green">
                                                    See all the benefits you get
                                                    for just Rs. 129 (18% GST included)
                                                </p>
                                            </div><img src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/insurance/RIL.png?v=3"
                                                       height="40"/>
                                        </div>
                                        <div class="benefits-list">
                                            <div class="benefits-item">
                                                <div class="benefits-item-wrap">
                                                    <p class="benefit-type">Total loss of checked-in baggage</p>
                                                    <p>
                                                        Claim upto<span class="block">
                                                            <span class="font18">
                                                                ₹
                                                                10,000
                                                            </span>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="benefits-item">
                                                <div class="benefits-item-wrap">
                                                    <p class="benefit-type">Personal Accident</p>
                                                    <p>
                                                        Claim upto<span class="block">
                                                            <span class="font18">
                                                                ₹
                                                                7,50,000
                                                            </span>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="benefits-item">
                                                <div class="benefits-item-wrap">
                                                    <p class="benefit-type">Emergency Medical expenses &amp; Evacuation</p>
                                                    <p>
                                                        Claim upto<span class="block">
                                                            <span class="font18">
                                                                ₹
                                                                1,00,000
                                                            </span>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="benefits-item cursor_pointer">
                                                <div class="benefits-item-wrap benefits-trigger font18">
                                                    <span class="benefits-more LatoMedium">+10</span><span class="block">More</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="make_relative">
                                            <label class="block radio append_bottom15">
                                                <input type="radio" value="yes"/><span class="outer marR8"
                                                                                      data-ischecked="false"><span class="inner"></span></span><span>
                                                    Yes,
                                                    secure my trip,
                                                </span><span>I agree to the </span><a href="https://promos.makemytrip.com/reliance-tnc-dom.html"
                                                                                      rel="noopener noreferrer" target="_blank">
                                                    Terms &amp;
                                                    Conditions
                                                </a><span> &amp; </span><a href="javascript:void(0);">
                                                    Good
                                                    Health terms
                                                </a><span>
                                                    , and confirm all passengers are between 2 to 70
                                                    years of age
                                                </span>
                                            </label><label class="block radio">
                                                <input type="radio" value="no"/><span class="outer marR8"
                                                                                     data-ischecked="false"><span class="inner"></span></span><span class="labeltext">No, I do not wish to secure my trip</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rvw-sctn append_bottom15 charity-sctn">
                                <div class="make_flex space_between alC append_bottom15 ">
                                    <p class="checkbox-group flexOne">
                                        <input type="checkbox" name="charity" id="charity"
                                               checked=""/><label for="charity">
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
                                              style={{backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/charity_1.png?v=1&quot;)", width: "40px", height: "40px", backgroundSize: "contain", backgroundPosition: "center center"}}></span>
                                        <p class="flexOne">
                                            Offset your carbon footprints by contributing to our tree
                                            plantation initiative. We have already supported plantation of over a million
                                            saplings.
                                        </p>
                                    </div>
                                    <div class="charity-item">
                                        <span class="marR15 charity-icon"
                                              style={{backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/charity_2.png?v=1&quot;)", width: "40px", height: "40px", backgroundSize: "contain", backgroundPosition: "center center"}}></span>
                                        <p class="flexOne">
                                            Ensure responsible tourism by joining hands with us to restore,
                                            develop and protect heritage sites and monuments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="append_bottom15 make_relative blocked_traveller_booking">
                                <button id="review-continue"
                                        class="fli_primary_btn btn text-uppercase continue_cta ">
                                    Continue
                                </button>
                            </div>
                            <div class="fare-families-overlay make_relative slideDown" style={{zIndex: "100"}}>
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
                                                           type="radio" name="fareFamilies_0_undefined_0" checked=""/>
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
                                                           type="radio" name="fareFamilies_0_undefined_1"/>
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
                        <div class="fli-intl-rhs pull-left">
                            <div>
                                <p class="rvw-heading LatoBold">Fare Summary</p>
                                <div class="rvw-sctn append_bottom15 make_relative" style={{zIndex: "1"}}>
                                    <div class="fareSmry-sctn">
                                        <div class="fareSmry-header LatoBold">
                                            <p class="fareSmry-hdng">
                                                <span class="fareSmry-expand-icon cursor_pointer marR15 open"></span><span>
                                                    Base
                                                    Fare
                                                </span>
                                            </p>
                                        </div>
                                        <div class="fareSmry-wrap">
                                            <p class="fareSmry-row">
                                                <span class="fareSmry-field">
                                                    <span>
                                                        Adult(s) (1 X ₹
                                                        1,015)
                                                    </span>
                                                </span><span class="font16 LatoBold text-right">
                                                    <span>
                                                        ₹
                                                        1,015
                                                    </span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="fareSmry-sctn">
                                        <div class="fareSmry-header LatoBold">
                                            <p class="fareSmry-hdng">
                                                <span class="fareSmry-expand-icon cursor_pointer marR15 "></span><span>
                                                    Fee
                                                    &amp; Surcharges
                                                </span>
                                            </p><span class="font16">₹ 685</span>
                                        </div>
                                    </div>
                                    <div class="fareSmry-sctn">
                                        <div class="fareSmry-header LatoBold">
                                            <p class="fareSmry-hdng">
                                                <span class="fareSmry-expand-icon cursor_pointer marR15 "></span><span>
                                                    Other
                                                    Services
                                                </span>
                                            </p><span class="font16">₹ 5</span>
                                        </div>
                                    </div>
                                    <div class="fareSmry-sctn reqPad-fareSmry-sctn">
                                        <p class="fareSmry-row LatoBold">
                                            <span class="font18 fareSmry-field">
                                                Total
                                                Amount:
                                            </span><span class="font20">
                                                <span style={{fontSize: "20px", textAlign: "right" ,lineHeight: "normal"}}>
                                                    <span>
                                                        ₹
                                                        1,705
                                                    </span>
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="rvw-sctn rvw-cancellation-sctn append_bottom15 LatoBold">
                                <p class="font14">Cancellation &amp; Date change charges</p><a href="javascript:void(0);"
                                                                                               class="text-right">KNOW MORE</a>
                            </div>
                            <div class="make_relative">
                                <p class="cpns-header"><span class="LatoBold">COUPON CODE</span></p>
                                <div class="rvw-sctn append_bottom15 rvw-cpn-sctn">
                                    <div class="">
                                        <div>
                                            <p class="make_relative append_bottom10">
                                                <input type="text"
                                                       placeholder="Enter Coupon Code" value=""/><span class="cpn-trigger "></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flexible-time-overlay make_relative"></div>
                </div>
            </div>
  );
}

export default FlightReviewTab;
