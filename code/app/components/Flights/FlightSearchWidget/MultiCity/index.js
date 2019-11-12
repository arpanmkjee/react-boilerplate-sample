import React from 'react';
import homeStyles from '../../../../css/home.css';
import commonStyles from '../../../../css/common.css';

function FlightSearchMultiCity() {
  return (
    <div>
    <div class="fsw">
    <div class="anotherChild">
        <div class="fsw_inner multiCity ">
            <div class="fsw_inputBox searchCity inactiveWidget "><label for="fromAnotherCity0"><span
                        class="lbl_input latoBold  appendBottom5">From</span><input data-cy="fromAnotherCity0"
                        id="fromAnotherCity0" type="text" class="fsw_inputField font30 lineHeight36 latoBlack"
                        readonly="" value="Delhi"/>
                    <p class="code makeRelative" title="DEL, Delhi Airport India"><span
                            class="truncate airPortName">DEL, Delhi Airport India</span></p>
                </label></div>
            <div class="fsw_inputBox searchToCity inactiveWidget "><label for="toAnotherCity0"><span
                        class="lbl_input latoBold  appendBottom5">To</span><input data-cy="toAnotherCity0"
                        id="toAnotherCity0" type="text" class="fsw_inputField font30 lineHeight36 latoBlack" readonly=""
                        value="Bangalore"/>
                    <p class="code makeRelative" title="BLR, Bengaluru International Airport India"><span
                            class="truncate airPortName">BLR, Bengaluru International Airport India</span></p>
                </label></div>
            <div class="fsw_inputBox dates inactiveWidget "><label for="anotherDeparture 0"><span
                        class="lbl_input latoBold appendBottom10">DEPARTURE</span><input data-cy="anotherDeparture 0"
                        id="anotherDeparture 0" type="text" class="fsw_inputField font20" readonly=""
                        value="Wednesday, 13 Nov 2019"/>
                    <p class="blackText font20 code"><span class="font30 latoBlack ">13 </span><span>Nov</span><span
                            class="shortYear">19</span></p>
                    <p class="code">Wednesday</p>
                </label></div>
            <div data-cy="flightTraveller" class="fsw_inputBox flightTravllers inactiveWidget "><label
                    for="travellers 0"><span class="lbl_input latoBold appendBottom10">Travellers &amp;
                        CLASS</span><input data-cy="travellers 0" id="travellers 0" type="text"
                        class="fsw_inputField font30 latoBlack" readonly="" value="0 Infant, 0 Adult, 1 Children"/>
                    <p class="blackText font20 code"><span class="appendRight10"><span class="font30 latoBlack">1</span>
                            Traveller</span></p>
                    <p>Economy</p>
                </label></div><button data-cy="addAnotherCity" type="button" class="btnAddCity">+ ADD ANOTHER
                CITY</button>
        </div>
        <div class="fsw_inner multiCity ">
            <div class="fsw_inputBox searchCity inactiveWidget "><label for="fromAnotherCity1"><span
                        class="lbl_input latoBold  appendBottom5">From</span><input data-cy="fromAnotherCity1"
                        id="fromAnotherCity1" type="text" class="fsw_inputField font30 lineHeight36 latoBlack"
                        readonly="" value="Bangalore"/>
                    <p class="code makeRelative" title="BLR, Bengaluru International Airport India"><span
                            class="truncate airPortName">BLR, Bengaluru International Airport India</span></p>
                </label></div>
            <div class="fsw_inputBox searchToCity inactiveWidget "><label for="toAnotherCity1"><span
                        class="lbl_input latoBold  appendBottom5">To</span><input data-cy="toAnotherCity1"
                        id="toAnotherCity1" type="text" class="fsw_inputField font30 lineHeight36 latoBlack" readonly=""
                        value="Select City"/></label></div>
            <div class="fsw_inputBox dates inactiveWidget "><label for="anotherDeparture 1"><span
                        class="lbl_input latoBold appendBottom10">DEPARTURE</span><input data-cy="anotherDeparture 1"
                        id="anotherDeparture 1" type="text" class="fsw_inputField font20" readonly=""
                        value="Wednesday, 13 Nov 2019"/>
                    <p class="blackText font20 code"><span class="font30 latoBlack ">14 </span><span>Nov</span><span
                            class="shortYear">19</span></p>
                    <p class="code">Thursday</p>
                </label></div><button data-cy="addAnotherCity" type="button" class="btnAddCity">+ ADD ANOTHER
                CITY</button>
        </div>
    </div>
</div>
<div class="makeFlex hrtlCenter appendBottom20">
    <ul class="specialFare">
        <li class="font12 blackText latoBold activeItem ">Regular Fare</li>
        <li class="font12 blackText latoBold  ">Student Fare<div class="specialFareTooltip font12 whiteText">
                <p class="latoBold appendBottom3">Student Fare</p>
                <p class="lineHeight14">Students above 12 years of age are eligible for special fares and/or additional
                    baggage allowances on certain airline bookings. Carrying valid student ID cards and student visas
                    (where applicable) is mandatory.</p>
            </div>
        </li>
    </ul>
    <div class="makeFlex perfectCenter "><span class="font12 latoBold">Trending Searches:</span>
        <ul class="recentSearches">
            <li><a class="darkGreyText" href="javascript:void(0)">
                    <p class="font12 appendBottom3">Chennai<span
                            class="blueOnewayArrowIcon landingSprite appendLeft5 appendRight5"></span>Kuala Lumpur</p>
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
    </div>
  );
}

export default FlightSearchMultiCity;
