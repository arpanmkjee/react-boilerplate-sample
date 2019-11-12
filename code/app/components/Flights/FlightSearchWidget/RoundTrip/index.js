import React from 'react';
import homeStyles from '../../../../css/home.css';
import commonStyles from '../../../../css/common.css';

function FlightSearchRoundTrip() {
  return (
    <div>
    <div class="fsw ">
    <div class="fsw_inner ">
        <div class="fsw_inputBox searchCity inactiveWidget "><label for="fromCity"><span
                    class="lbl_input latoBold  appendBottom5">From</span><input data-cy="fromCity" id="fromCity"
                    type="text" class="fsw_inputField font30 lineHeight36 latoBlack" readonly="" value="Delhi"/>
                <p class="code makeRelative" title="DEL, Delhi Airport India"><span class="truncate airPortName">DEL,
                        Delhi Airport India</span></p>
            </label></div><span class="swipCircle"><span class="landingSprite swipIcon"></span></span>
        <div class="fsw_inputBox searchToCity inactiveWidget "><label for="toCity"><span
                    class="lbl_input latoBold  appendBottom5">To</span><input data-cy="toCity" id="toCity" type="text"
                    class="fsw_inputField font30 lineHeight36 latoBlack" readonly="" value="Bangalore"/>
                <p class="code makeRelative" title="BLR, Kempegowda International Airport India"><span
                        class="truncate airPortName">BLR, Kempegowda International Airport India</span></p>
            </label></div>
        <div class="fsw_inputBox dates inactiveWidget "><label for="departure"><span
                    class="lbl_input latoBold appendBottom10">DEPARTURE</span><input data-cy="departure" id="departure"
                    type="text" class="fsw_inputField font20" readonly="" value="Thursday, 7 Nov 2019"/>
                <p data-cy="departureDate" class="blackText font20 code"><span class="font30 latoBlack ">12
                    </span><span>Nov</span><span class="shortYear">19</span></p>
                <p data-cy="departureDay" class="code">Tuesday</p>
            </label></div>
        <div class="fsw_inputBox dates reDates inactiveWidget  shiftModal"><label for="return"><span
                    class="lbl_input latoBold appendBottom10">RETURN</span><input data-cy="return" id="return"
                    type="text" class="fsw_inputField font20" readonly="" value="Wednesday, 13 Nov 2019"/>
                <p data-cy="returnDate" class="blackText font20 code"><span class="font30 latoBlack ">13
                    </span><span>Nov</span><span class="shortYear">19</span></p>
                <p data-cy="returnDay" class="code">Wednesday</p>
            </label>
            <p class="dateErrorMsgForFlight whiteText" id="range_error">You are booking for more than 30 days</p><span
                class="returnCross landingSprite"></span>
        </div>
        <div data-cy="flightTraveller" class="fsw_inputBox flightTravllers inactiveWidget "><label
                for="travellers"><span class="lbl_input latoBold appendBottom10">Travellers &amp; CLASS</span><input
                    data-cy="travellers" id="travellers" type="text" class="fsw_inputField font30 latoBlack" readonly=""
                    value="0 Infant, 0 Adult, 1 Children"/>
                <p class="blackText font20 code"><span data-cy="travellerText" class="appendRight10"><span
                            class="font30 latoBlack">1</span> Traveller</span></p>
                <p>Economy</p>
            </label></div>
    </div>
    <div class="makeFlex hrtlCenter appendBottom20">
        <ul class="specialFare">
            <li class="font12 blackText latoBold activeItem ">Regular Fare</li>
            <li class="font12 blackText latoBold  ">Student Fare<div class="specialFareTooltip font12 whiteText">
                    <p class="latoBold appendBottom3">Student Fare</p>
                    <p class="lineHeight14">Students above 12 years of age are eligible for special fares and/or
                        additional baggage allowances on certain airline bookings. Carrying valid student ID cards and
                        student visas (where applicable) is mandatory.</p>
                </div>
            </li>
        </ul>
        <div class="makeFlex perfectCenter "><span class="font12 latoBold">Trending Searches:</span>
            <ul class="recentSearches">
                <li><a class="darkGreyText" href="javascript:void(0)">
                        <p class="font12 appendBottom3">Chennai<span
                                class="blueOnewayArrowIcon landingSprite appendLeft5 appendRight5"></span>Kuala Lumpur
                        </p>
                    </a></li>
                <li><a class="darkGreyText" href="javascript:void(0)">
                        <p class="font12 appendBottom3">Mumbai<span
                                class="blueOnewayArrowIcon landingSprite appendLeft5 appendRight5"></span>Bangkok</p>
                    </a></li>
                <li><a class="darkGreyText" href="javascript:void(0)">
                        <p class="font12 appendBottom3">Bangalore<span
                                class="blueOnewayArrowIcon landingSprite appendLeft5 appendRight5"></span>Singapore</p>
                    </a></li>
            </ul>
        </div>
    </div>
    <p data-cy="submit" class="makeFlex vrtlCenter "><a class="primaryBtn font24 latoBlack widgetSearchBtn ">Search</a>
    </p>
</div>
    </div>
  );
}

export default FlightSearchRoundTrip;
