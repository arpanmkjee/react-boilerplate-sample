import React from 'react';
import homeStyles from '../../../../css/home.css';
import commonStyles from '../../../../css/common.css';

function FlightTravellerDetails() {
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
                                <div class="tvlr-sctn append_bottom15 make_relative"
                                    id="MANUAL_dae3f263-0bc0-4c5a-a849-4c771c12880c">
                                    <div class="tvlrDtls-heading make_relative">
                                        <div class="make_flex alC">
                                            <p class="tvlrDtls-heading-txt checkbox-group">
                                                <input type="checkbox"
                                                    name="ADULT_MANUAL_dae3f263-0bc0-4c5a-a849-4c771c12880c"
                                                    id="ADULT_MANUAL_dae3f263-0bc0-4c5a-a849-4c771c12880c"
                                                    checked="" /><label for="ADULT_MANUAL_dae3f263-0bc0-4c5a-a849-4c771c12880c"
                                                        class="make_flex alC">
                                                    <span class="box">
                                                        <span class="check"
                                                            data-ischecked="true"></span>
                                                    </span><span class="LatoBold">Koni Reddy A</span>,
                                                    MALE
                                                            </label>
                                            </p>
                                        </div><span class="make_flex alC">
                                            <span class="new-green-tag">COMPLETE</span><span class="cursor_pointer blue-arrow-icon marL20 open"></span>
                                        </span>
                                    </div>
                                    <div class="collapse in">
                                        <div class="tvlrDtls-section">
                                            <p class="LatoMedium tvlrDtls-topInfo">
                                                <b>IMPORTANT:</b>
                                                Enter your name as it is mentioned on your passport or
                                                any government approved ID.
                                                        </p>
                                            <div class="trvl-formfield-row">
                                                <div class="trvl-formfield-col" style={{ width: "30%" }}>
                                                    <div class="tvlrFormField make_relative FIRST_NAME">
                                                        <input autocomplete="none"
                                                            placeholder="First Name" class="tvlrInput "
                                                            type="text" value="Koni Reddy" />
                                                    </div>
                                                </div>
                                                <div class="trvl-formfield-col" style={{ width: "30%" }}>
                                                    <div class="tvlrFormField make_relative LAST_NAME">
                                                        <input autocomplete="none"
                                                            placeholder="Last Name" class="tvlrInput "
                                                            type="text" value="A" />
                                                    </div>
                                                </div>
                                                <div class="trvl-formfield-col" style={{ width: "30%" }}>
                                                    <div>
                                                        <div class="chooseGender-info GENDER "
                                                            tabindex="3">
                                                            <label tabindex="0">
                                                                <input type="radio"
                                                                    name="gender_MANUAL_dae3f263-0bc0-4c5a-a849-4c771c12880c"
                                                                    value="MALE" /><span class="chooseGender-txt">MALE</span>
                                                            </label><label tabindex="1">
                                                                <input type="radio"
                                                                    name="gender_MANUAL_dae3f263-0bc0-4c5a-a849-4c771c12880c"
                                                                    value="FEMALE" /><span class="chooseGender-txt">FEMALE</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nameCnf-overlay make_relative slideDown">
                                        <span class="zc-close"></span>
                                        <div class="nameCnf-overlay-sctn">
                                            <p class="nameCnf-overlay-title LatoLight">
                                                Name Confirmation
                                                        </p>
                                            <div class="make_flex">
                                                <div class="nameCnf-cards-wrap custom-scroll"></div>
                                                <div class="nameCnf-overlay-col nameCnf-cta">
                                                    <p>
                                                        <a class="btn fli_primary_btn text-uppercase continue_cta"
                                                            href="javascript:void(0)">Done</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                        <button class="ack-cta btn fli_primary_btn text-uppercase"
                            type="button">
                            Continue
                                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlightTravellerDetails;
