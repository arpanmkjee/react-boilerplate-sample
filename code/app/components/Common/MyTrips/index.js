import React from 'react';
import homeStyles from '../../../../css/home.css';
import commonStyles from '../../../../css/common.css';

function MyTrips() {
  return (
    <div>
      <div class="myTripRoute">
        <div class="myTripsBannerWrapper upcoming" id="myTripsBannerWrapper">
          <div class="myTripsBannerWrapper__myTripsBannerContainer">
            <ul class="makeFlex myTripsBannerWrapper__myTripsBannerMenu">
              <li class="makeFlex spaceBetween hrtlCenter"><span class="arrow down mLeft10"></span><span
                class="font16 latoBold">My Account</span></li>
              <li class="makeFlex spaceBetween hrtlCenter whiteText"><span
                class="arrow right appendRight10"></span><span>My Trips</span></li>
            </ul>
          </div>
        </div>
        <div class="tripStatusContainer upcoming">
          <div class="tripStatusWrap" id="tripStatusWrap">
            <ul>
              <li class="active"><a class="makeFlex"><span
                class="cm__myTripSprt--tabUpcoming cm__myTripSprt appendRight10"></span><span
                  class="tripStatusWrap__statusText"><span class="font16 latoBlack">UPCOMING</span><span
                    class="font12 latoBold"></span></span></a></li>
              <li class=""><a class="makeFlex"><span
                class="cm__myTripSprt--tabCancelled--inactive cm__myTripSprt appendRight10"></span><span
                  class="tripStatusWrap__statusText"><span class="font16 latoBlack">CANCELLED</span><span
                    class="font12 latoBold"></span></span></a></li>
              <li class=""><a class="makeFlex"><span
                class="cm__myTripSprt--tabCompleted--inactive cm__myTripSprt appendRight10"></span><span
                  class="tripStatusWrap__statusText"><span class="font16 latoBlack">COMPLETED</span><span
                    class="font12 latoBold">last 4 Month(s) ago</span></span></a></li>
            </ul>
            <div class="txtFild ">
              <div class="txtFild__fieldContanr txtFild__fieldContanr--search"><input id="focus" type="text"
                placeholder="Search for a booking" class="font14 txtFild__inputFld" value="" /><span
                  class="cm__myTripSprt cm__myTripSprtFlight--search"></span></div>
            </div>
          </div>
        </div>
        <div class="contentWrapper myTrips">
          <div>
            <div class="tripListingWrap" id="tripListingWrap">
              <div>
                <div class="myTripLstngLobCrd forUpcoming" id="upcomingTripListingWrap">
                  <div class="emptyErr">
                    <div class="emptyErr--imgCont"><img
                      src="https://imgak.mmtcdn.com/mima/images/Desktop/upcoming-empty.png"
                      alt="Upcoming Image" /></div>
                    <div>
                      <p class="emptyErr--heading font22 latoBlack appendBottom15">Looks empty, you've no
                                    upcoming bookings.</p>
                      <p class="emptyErr--subHeading fomt14 darkGreyText appendBottom25">When you book a trip,
                                    you will see your itinerary here.</p>
                      <p><a href="https://www.makemytrip.com/" to="/Mimaundefined"><button
                        class="font14 latoBold blueText myTripBtn myTripBtn--primary ">Plan a
                                            trip</button></a></p>
                    </div>
                  </div>
                </div>
                <div class="myTripLstngLobCrd forCancelled" id="cancelledTripListingWrap">
                  <div class="emptyErr">
                    <div class="emptyErr--imgCont"><img
                      src="https://imgak.mmtcdn.com/mima/images/Desktop/cancelled-empty.png"
                      alt="Cancelled Image" /></div>
                    <div>
                      <p class="emptyErr--heading font22 latoBlack appendBottom15">Looks empty, you've no
                                    cancelled bookings.</p>
                      <p class="emptyErr--subHeading fomt14 darkGreyText appendBottom25">Great! Looks like
                                    you’ve no cancelled bookings.</p>
                      <p><a href="https://www.makemytrip.com/" to="/Mimaundefined"><button
                        class="font14 latoBold blueText myTripBtn myTripBtn--primary ">Plan a
                                            trip</button></a></p>
                    </div>
                  </div>
                </div>
                <div class="myTripLstngLobCrd forCompleted" id="completedTripListingWrap">
                  <div class="appendBottom40 makeFlex"><span
                    class="cm__myTripSprt cm__myTripSprt--completedBig appendRight15"></span>
                    <div>
                      <h4 class="font20 latoBlack blackText">Completed Bookings(3) </h4>
                      <p class="font14 greyText appendTop3">Your Completed booking(s)</p>
                    </div>
                  </div>
                  <div>
                    <div></div>
                    <div class="upcomingCompletedTripListing">
                      <div>
                        <div class="myTripToHotelWrap">
                          <div class="myTrpCrdHadr myTrpCrdHadr--completed">
                            <div>
                              <div class="ovalContanrIcon"><span
                                class="cm__myTripSprt cm__myTripSprtFlight--completed"></span>
                              </div>
                            </div>
                            <div class="makeFlex spaceBetween">
                              <div>
                                <div class="makeFlex hrtlCenter">
                                  <div class="myTrpCrdHadr__hdingContanr">
                                    <h3>Mumbai<span class="myTripRoute__plcNm"></span>Hyderabad
                                                            </h3>
                                  </div>
                                </div>
                                <p class="font14 darkGreyText appendTop5"><span
                                  class="greyText latoBold myTrpCrdHadr__dtal myTrpCrdHadr__status">Completed</span><span
                                    class="latoBold myTrpCrdHadr__dtal"><span>One Way
                                                                Flight</span></span><span
                                    class="greyText myTrpCrdHadr__dtal">Booking ID -
                                                            NF79167215079776</span></p>
                              </div>
                              <div class="noShrink"><a
                                class="font14 latoBold blueText myTripBtn myTripBtn--primary "
                                href="/Mima/Flight?bookingId=NF79167215079776">VIEW &amp; MANAGE
                                                        BOOKING</a></div>
                            </div>
                            <div class="appendTop10"></div>
                          </div>
                          <div class="bottomFold makeFlex spaceBetween">
                            <div class="leftPart flexOne">
                              <div>
                                <div class="font14 makeFlex spaceBetween end appendBottom30">
                                  <div class="makeFlex greyText column"><span
                                    class="appendBottom10">FROM</span><span
                                      class="appendBottom5"><span
                                        class="font16 darkGreyText latoBlack">19 Jul'19
                                                                </span><span class="greyText undefined">06:30
                                                                    PM</span></span>
                                    <p class="font12" style="width: 150px;"><span
                                      class="latoBlack">BOM</span><span class="latoBold">-
                                                                    Mumbai<span class="yellowText"> Terminal
                                                                        2</span></span></p>
                                  </div>
                                  <div class="makeFlex greyText column"><span
                                    class="appendBottom10">TO</span><span
                                      class="appendBottom5"><span
                                        class="font16 darkGreyText latoBlack">19 Jul'19
                                                                </span><span class="greyText">08:05 PM</span></span>
                                    <p class="font12 darkGreyText"><span
                                      class="latoBlack">HYD</span><span class="latoBold">-
                                                                    Hyderabad</span></p>
                                  </div>
                                  <div class="makeFlex font14 latoBold column makeRelative">
                                    <div
                                      class=" appendBottom5 leftPart__flightInfo hrtlCenter makeFlex">
                                      <div
                                        class=" appendBottom5 leftPart__flightInfo hrtlCenter makeFlex">
                                        <span
                                          class="cm__myTripSprt cm__myTripSprt--fltBlk appendRight10"></span><span
                                            class="appendRight10"> AIR ASIA I5 332</span>
                                      </div>
                                    </div>
                                    <p><span class="cm__myTripSprt cm__myTripSprt--GuestBlk appendRight10"
                                      style="margin-top: -2px;"></span><span>Konireddy
                                                                </span></p>
                                  </div>
                                  <div class="leftPart__imgContainer--flight"><img class=""
                                    width="100%" /></div>
                                </div>
                              </div>
                              <ul class="leftPart__insideLower font12 latoBold"></ul>
                              <div class="appendTop20">
                                <div></div>
                              </div>
                            </div>
                            <div class="rightPart makeFlex column">
                              <div>
                                <div class="minWidth235">
                                  <div class=""><a class="listWithIcon__innerContent"
                                    href="/Mima/Flight?bookingId=NF79167215079776">
                                    <div class="listWithIcon__itemContent"><span
                                      class="cm__myTripSprt cm__myTripSprt--freeCancel appendRight10"></span>Raise
                                                                    a Claim</div>
                                  </a></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="myTripToHotelWrap">
                          <div class="myTrpCrdHadr myTrpCrdHadr--completed">
                            <div>
                              <div class="ovalContanrIcon"><span
                                class="cm__myTripSprt cm__myTripSprtFlight--completed"></span>
                              </div>
                            </div>
                            <div class="makeFlex spaceBetween">
                              <div>
                                <div class="makeFlex hrtlCenter">
                                  <div class="myTrpCrdHadr__hdingContanr">
                                    <h3>Hyderabad<span class="myTripRoute__plcNm"></span>Mumbai
                                                            </h3>
                                  </div>
                                </div>
                                <p class="font14 darkGreyText appendTop5"><span
                                  class="greyText latoBold myTrpCrdHadr__dtal myTrpCrdHadr__status">Completed</span><span
                                    class="latoBold myTrpCrdHadr__dtal"><span>One Way
                                                                Flight</span></span><span
                                    class="greyText myTrpCrdHadr__dtal">Booking ID -
                                                            NF20135212763360</span></p>
                              </div>
                              <div class="noShrink"><a
                                class="font14 latoBold blueText myTripBtn myTripBtn--primary "
                                href="/Mima/Flight?bookingId=NF20135212763360">VIEW &amp; MANAGE
                                                        BOOKING</a></div>
                            </div>
                            <div class="appendTop10"></div>
                          </div>
                          <div class="bottomFold makeFlex spaceBetween">
                            <div class="leftPart flexOne">
                              <div>
                                <div class="font14 makeFlex spaceBetween end appendBottom30">
                                  <div class="makeFlex greyText column"><span
                                    class="appendBottom10">FROM</span><span
                                      class="appendBottom5"><span
                                        class="font16 darkGreyText latoBlack">08 Jul'19
                                                                </span><span class="greyText undefined">09:30
                                                                    AM</span></span>
                                    <p class="font12" style="width: 150px;"><span
                                      class="latoBlack">HYD</span><span class="latoBold">-
                                                                    Hyderabad</span></p>
                                  </div>
                                  <div class="makeFlex greyText column"><span
                                    class="appendBottom10">TO</span><span
                                      class="appendBottom5"><span
                                        class="font16 darkGreyText latoBlack">08 Jul'19
                                                                </span><span class="greyText">10:45 AM</span></span>
                                    <p class="font12 darkGreyText"><span
                                      class="latoBlack">BOM</span><span class="latoBold">-
                                                                    Mumbai<span class="yellowText"> Terminal
                                                                        2</span></span></p>
                                  </div>
                                  <div class="makeFlex font14 latoBold column makeRelative">
                                    <div
                                      class=" appendBottom5 leftPart__flightInfo hrtlCenter makeFlex">
                                      <div
                                        class=" appendBottom5 leftPart__flightInfo hrtlCenter makeFlex">
                                        <span
                                          class="cm__myTripSprt cm__myTripSprt--fltBlk appendRight10"></span><span
                                            class="appendRight10"> SPICE JET SG 6432</span>
                                      </div>
                                    </div>
                                    <p><span class="cm__myTripSprt cm__myTripSprt--GuestBlk appendRight10"
                                      style="margin-top: -2px;"></span><span>Konireddy
                                                                </span></p>
                                  </div>
                                  <div class="leftPart__imgContainer--flight"><img class=""
                                    width="100%" /></div>
                                </div>
                              </div>
                              <ul class="leftPart__insideLower font12 latoBold"></ul>
                              <div class="appendTop20">
                                <div></div>
                              </div>
                            </div>
                            <div class="rightPart makeFlex column">
                              <div>
                                <div class="minWidth235">
                                  <div class=""><a class="listWithIcon__innerContent"
                                    href="/Mima/Flight?bookingId=NF20135212763360">
                                    <div class="listWithIcon__itemContent"><span
                                      class="cm__myTripSprt cm__myTripSprt--freeCancel appendRight10"></span>Raise
                                                                    a Claim</div>
                                  </a></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="myTripToHotelWrap">
                          <div class="myTrpCrdHadr myTrpCrdHadr--completed">
                            <div>
                              <div class="ovalContanrIcon"><span
                                class="cm__myTripSprt cm__myTripSprtFlight--completed"></span>
                              </div>
                            </div>
                            <div class="makeFlex spaceBetween">
                              <div>
                                <div class="makeFlex hrtlCenter">
                                  <div class="myTrpCrdHadr__hdingContanr">
                                    <h3>Mumbai<span class="myTripRoute__plcNm"></span>Hyderabad
                                                            </h3>
                                  </div>
                                </div>
                                <p class="font14 darkGreyText appendTop5"><span
                                  class="greyText latoBold myTrpCrdHadr__dtal myTrpCrdHadr__status">Completed</span><span
                                    class="latoBold myTrpCrdHadr__dtal"><span>One Way
                                                                Flight</span></span><span
                                    class="greyText myTrpCrdHadr__dtal">Booking ID -
                                                            NF20156210455320</span></p>
                              </div>
                              <div class="noShrink"><a
                                class="font14 latoBold blueText myTripBtn myTripBtn--primary "
                                href="/Mima/Flight?bookingId=NF20156210455320">VIEW &amp; MANAGE
                                                        BOOKING</a></div>
                            </div>
                            <div class="appendTop10"></div>
                          </div>
                          <div class="bottomFold makeFlex spaceBetween">
                            <div class="leftPart flexOne">
                              <div>
                                <div class="font14 makeFlex spaceBetween end appendBottom30">
                                  <div class="makeFlex greyText column"><span
                                    class="appendBottom10">FROM</span><span
                                      class="appendBottom5"><span
                                        class="font16 darkGreyText latoBlack">04 Jul'19
                                                                </span><span class="greyText undefined">07:05
                                                                    PM</span></span>
                                    <p class="font12" style="width: 150px;"><span
                                      class="latoBlack">BOM</span><span class="latoBold">-
                                                                    Mumbai<span class="yellowText"> Terminal
                                                                        1</span></span></p>
                                  </div>
                                  <div class="makeFlex greyText column"><span
                                    class="appendBottom10">TO</span><span
                                      class="appendBottom5"><span
                                        class="font16 darkGreyText latoBlack">04 Jul'19
                                                                </span><span class="greyText">08:35 PM</span></span>
                                    <p class="font12 darkGreyText"><span
                                      class="latoBlack">HYD</span><span class="latoBold">-
                                                                    Hyderabad</span></p>
                                  </div>
                                  <div class="makeFlex font14 latoBold column makeRelative">
                                    <div
                                      class=" appendBottom5 leftPart__flightInfo hrtlCenter makeFlex">
                                      <div
                                        class=" appendBottom5 leftPart__flightInfo hrtlCenter makeFlex">
                                        <span
                                          class="cm__myTripSprt cm__myTripSprt--fltBlk appendRight10"></span><span
                                            class="appendRight10"> Indigo Airlines 6E
                                                                        628</span></div>
                                    </div>
                                    <p><span class="cm__myTripSprt cm__myTripSprt--GuestBlk appendRight10"
                                      style="margin-top: -2px;"></span><span>Konireddy
                                                                </span></p>
                                  </div>
                                  <div class="leftPart__imgContainer--flight"><img class=""
                                    width="100%" /></div>
                                </div>
                              </div>
                              <ul class="leftPart__insideLower font12 latoBold"></ul>
                              <div class="appendTop20">
                                <div></div>
                              </div>
                            </div>
                            <div class="rightPart makeFlex column">
                              <div>
                                <div class="minWidth235">
                                  <div class=""><a class="listWithIcon__innerContent"
                                    href="/Mima/Flight?bookingId=NF20156210455320">
                                    <div class="listWithIcon__itemContent"><span
                                      class="cm__myTripSprt cm__myTripSprt--freeCancel appendRight10"></span>Raise
                                                                    a Claim</div>
                                  </a></div>
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
            </div>
            <div class="btt-wrap pushRight"><button title="Back to top" class="scrollBtn hrtlCenter makeFlex "><span
              class="makeFlex appendRight20 column"><span class="cm__upArrowNoLine"
                style="margin-top: 3px;"></span><span class="cm__upArrowNoLine"
                  style="margin-top: -3px;"></span></span><span class="font16 latoBlack blueText">Back To
                        Top</span></button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
