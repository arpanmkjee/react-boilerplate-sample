import React from 'react';

function LandingSearchWidget() {
  return (
   <div id="search-widget" class="hsw ">
            <div class="hsw_inner">
                <div class="hsw_inputBox tripTypeWrapper"><label for="tripType"
                        class="lbl_input latoBold font12 blueText appendBottom5"> TRIP TYPE </label>
                    <div class="selectDropdown make_relative"><span class="downArrow"></span>
                        <div class="multiDropDownVal">One Way</div>
                    </div>
                </div>
                <div class="hsw_inputBox width160"><span for="fromCity"
                        class="lbl_input latoBold font12 blueText appendBottom5"> From </span><input id="fromCity"
                        type="text" class="hsw_inputField font16 whiteText textOverflow" readonly=""
                        value="Mumbai, India"/>
                </div>
                <div class="swap-icon marR8"></div>
                <div class="hsw_inputBox width160"><span for="toCity"
                        class="lbl_input latoBold font12 blueText appendBottom5"> To </span><input id="toCity"
                        type="text" class="hsw_inputField font16 whiteText textOverflow" readonly=""
                        value="Hyderabad, India"/>                            
                        </div>
                <div class="hsw_inputBox width160"><span for="departure"
                        class="lbl_input latoBold font12 blueText appendBottom5"> Depart </span><input
                        id="departure" type="text" class="hsw_inputField font16 whiteText" readonly=""
                        value="Sat, 16 Nov 2019"/></div>
                <div class="hsw_inputBox width160"><span for="return"
                        class="lbl_input latoBold font12 blueText appendBottom5"> Return </span><span
                        class="clearRetDate "></span><input id="return" type="text"
                        class="hsw_inputField font16 whiteText" readonly="" value=""/></div>
                <div class="hsw_inputBox"><span for="travellerAndClass"
                        class="lbl_input latoBold font12 blueText appendBottom5">Passengers &amp; CLASS</span><input
                        id="travellerAndClass" type="text"
                        class="hsw_inputField guests font16 whiteText textOverflow" readonly=""
                        value="1 Adult, Economy"/></div><button class="disable-btn"><span
                        class="disable-btn-txt">Search</span></button>
            </div>
        </div>
  );
}

export default LandingSearchWidget;
