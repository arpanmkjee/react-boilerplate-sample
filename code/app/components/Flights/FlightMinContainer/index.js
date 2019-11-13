import * as React from 'react';
import SuperOffers from '../../Common/SuperOffers';

function MinContainer(){
        return (
            <div class="minContainer">
                <div>
                    <div data-cy="flightSW" class="widgetSection appendBottom40">
                        <div class="makeFlex">
                            <ul class="fswTabs latoBlack greyText">
                                <li data-cy="oneWayTrip" class="selected">
                                    <span class="tabsCircle appendRight5"></span>Oneway
                            </li>
                                <li data-cy="roundTrip" class="">
                                    <span class="tabsCircle appendRight5"></span>Round Trip
                            </li>
                                <li data-cy="mulitiCityTrip" class="">
                                    <span class="tabsCircle appendRight5"></span>Multi City
                            </li>
                            </ul>
                            <div class="pushRight">
                                <h1 style={{margin:"0px"}}>
                                    Book<a href="/flights/" class="darkGreyText"> Domestic </a> and<a href="/international-flights/" class="darkGreyText">International</a> flights
                            </h1>
                            </div>
                        </div>
                        <div class="fsw ">
                            <div class="fsw_inner ">
                                <div class="fsw_inputBox searchCity inactiveWidget ">
                                    <label for="fromCity">
                                        <span class="lbl_input latoBold  appendBottom5">From</span><input data-cy="fromCity"
                                            id="fromCity" type="text" class="fsw_inputField font30 lineHeight36 latoBlack"
                                            readonly="" value="Mumbai" />
                                        <p class="code makeRelative"
                                            title="BOM, Chhatrapati Shivaji International Airport India">
                                            <span data-cy="defaultFromValue" class="truncate airPortName">
                                                BOM, Chhatrapati Shivaji
                                                International Airport India
                                        </span>
                                        </p>
                                    </label>
                                </div><span class="swipCircle"><span class="landingSprite swipIcon"></span></span>
                                <div class="fsw_inputBox searchToCity inactiveWidget ">
                                    <label for="toCity">
                                        <span class="lbl_input latoBold  appendBottom5">To</span><input data-cy="toCity"
                                            id="toCity" type="text" class="fsw_inputField font30 lineHeight36 latoBlack"
                                            readonly="" value="Hyderabad" />
                                        <p class="code makeRelative" title="HYD, Rajiv Gandhi Intl Airport India">
                                            <span data-cy="defaultToValue" class="truncate airPortName">
                                                HYD, Rajiv Gandhi Intl
                                                Airport India
                                        </span>
                                        </p>
                                    </label>
                                </div>
                                <div class="fsw_inputBox dates inactiveWidget ">
                                    <label for="departure">
                                        <span class="lbl_input latoBold appendBottom10">DEPARTURE</span><input data-cy="departure" id="departure" type="text" class="fsw_inputField font20"
                                            readonly="" value="Friday, 8 Nov 2019" />
                                        <p data-cy="departureDate" class="blackText font20 code">
                                            <span class="font30 latoBlack ">16</span><span>Nov</span><span class="shortYear">19</span>
                                        </p>
                                        <p data-cy="departureDay" class="code">Saturday</p>
                                    </label>
                                </div>
                                <div class="fsw_inputBox dates reDates inactiveWidget ">
                                    <div data-cy="returnArea">
                                        <label>
                                            <span class="lbl_input latoBold appendBottom10">RETURN</span>
                                            <p data-cy="returnDefaultText" class="latoBlack greyText">
                                                Tap to add a return date
                                                for bigger discounts
                                        </p>
                                        </label>
                                    </div>
                                </div>
                                <div data-cy="flightTraveller" class="fsw_inputBox flightTravllers inactiveWidget ">
                                    <label for="travellers">
                                        <span class="lbl_input latoBold appendBottom10">
                                            Travellers &amp;
                                            CLASS
                                    </span><input data-cy="travellers" id="travellers" type="text"
                                            class="fsw_inputField font30 latoBlack" readonly=""
                                            value="0 Infant, 0 Adult, 1 Children" />
                                        <p data-cy="travellerText" class="blackText font20 code">
                                            <span class="appendRight10">
                                                <span class="font30 latoBlack">1</span>Traveller
                                        </span>
                                        </p>
                                        <p>Economy</p>
                                    </label>
                                </div>
                            </div>
                            <div class="makeFlex hrtlCenter appendBottom20">
                                <ul class="specialFare">
                                    <li class="font12 blackText latoBold activeItem ">Regular Fare</li>
                                    <li class="font12 blackText latoBold  ">
                                        Student Fare<div class="specialFareTooltip font12 whiteText">
                                            <p class="latoBold appendBottom3">Student Fare</p>
                                            <p class="lineHeight14">
                                                Students above 12 years of age are eligible for special
                                                fares and/or additional baggage allowances on certain airline bookings.
                                                Carrying
                                                valid student ID cards and student visas (where applicable) is mandatory.
                                        </p>
                                        </div>
                                    </li>
                                </ul>
                                <div class="makeFlex perfectCenter ">
                                    <span class="font12 latoBold">Recent Searches:</span>
                                    <ul class="recentSearches">
                                        <li>
                                            <a class="darkGreyText"
                                                href="//www.makemytrip.com/flight/search?itinerary=BOM-HYD-16/11/2019&amp;tripType=O&amp;paxType=A-1_C-0_I-0&amp;intl=false&amp;cabinClass=E">
                                                <p class="font12 appendBottom3">
                                                    Mumbai<span class=" blueOnewayArrowIcon landingSprite appendLeft5 appendRight5"></span>Hyderabad
                                            </p>
                                                <p class="greyText font10">16 Nov 19</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="darkGreyText"
                                                href="//www.makemytrip.com/flight/search?itinerary=NYC-HYD-09/11/2019&amp;tripType=O&amp;paxType=A-1_C-2_I-0&amp;intl=true&amp;cabinClass=E">
                                                <p class="font12 appendBottom3">
                                                    New York<span class=" blueOnewayArrowIcon landingSprite appendLeft5 appendRight5"></span>Hyderabad
                                            </p>
                                                <p class="greyText font10">9 Nov 19</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="darkGreyText"
                                                href="//www.makemytrip.com/flight/search?itinerary=NYC-HYD-08/11/2019&amp;tripType=O&amp;paxType=A-1_C-0_I-1&amp;intl=true&amp;cabinClass=E">
                                                <p class="font12 appendBottom3">
                                                    New York<span class=" blueOnewayArrowIcon landingSprite appendLeft5 appendRight5"></span>Hyderabad
                                            </p>
                                                <p class="greyText font10">8 Nov 19</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p data-cy="submit" class="makeFlex vrtlCenter ">
                                <a class="primaryBtn font24 latoBlack widgetSearchBtn" href="/result">Search</a>
                            </p>
                        </div>
                    </div>
                    <main class="landingContainer">
                        <SuperOffers></SuperOffers>
                        <div class="sticky-scroll" id="PROMOTIONS">
                            <div data-cy="dealCarousel"
                                class="_dealCarousel appendBottom20 page-section _primeTimeCarousel">
                                <div class="slick-slider slick-initialized" dir="ltr">
                                    <button type="button" data-role="none" class="slick-arrow slick-prev slick-disabled"
                                        style={{ display: "block" }}>
                                        Previous
                                </button>
                                    <div class="slick-list">
                                        <div class="slick-track"
                                            style={{ width: "2400px", opacity: "1", transform: "translate3d(0px, 0px, 0px)" }}>
                                            <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1"
                                                aria-hidden="false" style={{ outline: "none", width: "600px" }}>
                                                <div>
                                                    <div data-cy="dealCarousel0" class="slideItem pointer">
                                                        <span class="landingSprite walletBlanceIcon appendRight20"></span>
                                                        <div class="slideDesc">
                                                            <p data-cy="dealCarouselMsg0" class="font16">
                                                                <font color="?#000000?">
                                                                    Just login and claim wallet rewards up
                                                                    to ₹ 555. Login now before the offer expires!
                                                            </font>
                                                            </p>
                                                        </div><a data-cy="dealCarouselBtn0"
                                                            class="latoBold pushRight paddingLR20 makeFlex hrtlCenter">
                                                            Login<span class="landingSprite blueArrowIcon appendLeft5"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-index="1" class="slick-slide slick-active" tabindex="-1"
                                                aria-hidden="false" style={{ outline: "none", width: "600px" }}>
                                                <div>
                                                    <div data-cy="dealCarousel1" class="slideItem pointer ">
                                                        <span class="dealImgWrap appendRight10">
                                                            <img data-cy="dealCarouselImg1" alt="" class="mt10"
                                                                src="https://promos.makemytrip.com/store/WWF-40x40-26032019.png" />
                                                        </span>
                                                        <div class="slideDesc">
                                                            <p data-cy="dealCarouselMsg1" class="font16">
                                                                Win exciting prizes and
                                                                buzz for nature with MMT and WWF
                                                        </p>
                                                        </div><a data-cy="dealCarouselBtn1"
                                                            class="latoBold pushRight paddingLR20 makeFlex hrtlCenter ">
                                                            Know
                                                        More<span class="landingSprite appendLeft5 blueArrowIcon"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-index="2" class="slick-slide" tabindex="-1" aria-hidden="true"
                                                style={{ outline: "none", width: "600px" }}></div>
                                            <div data-index="3" class="slick-slide" tabindex="-1" aria-hidden="true"
                                                style={{ outline: "none", width: "600px" }}></div>
                                        </div>
                                    </div><button type="button" data-role="none" class="slick-arrow slick-next"
                                        style={{ display: "block" }}>
                                        Next
                                </button>
                                </div>
                            </div>
                        </div>
                        <div class="landingCard makeFlex appendBottom50">
                            <div data-cy="newsLetter" class="makeFlex placeInfo">
                                <div class="makeFlex infoTile appendBottom10 appendTop10"><img class="appendRight10"
                                    src="http://promos.makemytrip.com/images/50x50-Other-23052019.png" alt="" data-cy="newsLetterIcon0" />
                                    <div class="flexOne">
                                        <p data-cy="newsLetterTitle0">
                                            <p class="font18 latoBold blackText appendBottom5">Chennai Flights</p>
                                        </p>
                                        <p data-cy="newsLetterText0">
                                            <p class="font12 lineHeight16"><span class="latoBold blackText"></span> Via -<a class="blackText"
                                                href="https://www.makemytrip.com/flights/new_delhi-chennai-cheap-airtickets.html"><span
                                                    class="latoBold blackText"> Delhi</span>, </a> <a class="blackText"
                                                        href="https://www.makemytrip.com/flights/mumbai-chennai-cheap-airtickets.html"><span
                                                            class="latoBold blackText">Mumbai</span>, </a> <a class="blackText"
                                                                href="https://www.makemytrip.com/flights/coimbatore-chennai-cheap-airtickets.html"><span
                                                                    class="latoBold blackText">Coimbatore</span>, </a> <a class="blackText"
                                                                        href="https://www.makemytrip.com/flights/madurai-chennai-cheap-airtickets.html"><span
                                                                            class="latoBold blackText">Madurai</span></a></p>
                                        </p>
                                    </div>
                                </div>
                                <div class="makeFlex infoTile appendBottom10 appendTop10"><img class="appendRight10"
                                    src="https://promos.makemytrip.com/store/GoaDT.JPG" alt="" data-cy="newsLetterIcon1" />
                                    <div class="flexOne">
                                        <p data-cy="newsLetterTitle1">
                                            <p class="font18 latoBold blackText appendBottom5">Goa Flights</p>
                                        </p>
                                        <p data-cy="newsLetterText1">
                                            <p class="font12 lineHeight16"><span class="latoBold blackText"></span> Via -<a class="blackText"
                                                href="https://www.makemytrip.com/flights/new_delhi-goa-cheap-airtickets.html"> <span
                                                    class="latoBold blackText"> Delhi</span> </a>, <a class="blackText"
                                                        href="https://www.makemytrip.com/flights/mumbai-goa-cheap-airtickets.html"><span
                                                            class="latoBold blackText">Mumbai</span>, </a> <a class="blackText"
                                                                href="https://www.makemytrip.com/flights/bangalore-goa-cheap-airtickets.html"><span
                                                                    class="latoBold blackText">Bangalore</span>, </a> <a class="blackText"
                                                                        href="https://www.makemytrip.com/flights/ahmedabad-goa-cheap-airtickets.html"><span
                                                                            class="latoBold blackText">Ahmedabad</span></a> </p>
                                        </p>
                                    </div>
                                </div>
                                <div class="makeFlex infoTile appendBottom10 appendTop10"><img class="appendRight10"
                                    src="https://promos.makemytrip.com/store/MumbaiDT.JPG" alt="" data-cy="newsLetterIcon2" />
                                    <div class="flexOne">
                                        <p data-cy="newsLetterTitle2">
                                            <p class="font18 latoBold blackText appendBottom5">Mumbai Flights</p>
                                        </p>
                                        <p data-cy="newsLetterText2">
                                            <p class="font12 lineHeight16"><span class="latoBold blackText"></span> Via -<a class="blackText"
                                                href="https://www.makemytrip.com/flights/new_delhi-mumbai-cheap-airtickets.html"> <span
                                                    class="latoBold blackText"> Delhi</span></a>, <a class="blackText"
                                                        href="https://www.makemytrip.com/flights/bangalore-mumbai-cheap-airtickets.html"><span
                                                            class="latoBold blackText">Bangalore</span>, </a> <a class="blackText"
                                                                href="https://www.makemytrip.com/flights/chennai-mumbai-cheap-airtickets.html"><span
                                                                    class="latoBold blackText">Chennai</span>, </a> <a class="blackText"
                                                                        href="https://www.makemytrip.com/flights/ahmedabad-mumbai-cheap-airtickets.html"><span
                                                                            class="latoBold blackText">Ahmedabad</span></a> </p>
                                        </p>
                                    </div>
                                </div>
                                <div class="makeFlex infoTile appendBottom10 appendTop10"><img class="appendRight10"
                                    src="http://promos.makemytrip.com/images/50x50-Ooty-23052019.png" alt="" data-cy="newsLetterIcon3" />
                                    <div class="flexOne">
                                        <p data-cy="newsLetterTitle3">
                                            <p class="font18 latoBold blackText appendBottom5">Hyderabad Flights</p>
                                        </p>
                                        <p data-cy="newsLetterText3">
                                            <p class="font12 lineHeight16"><span class="latoBold blackText"></span> Via -<a class="blackText"
                                                href="https://www.makemytrip.com/flights/chennai-hyderabad-cheap-airtickets.html"> <span
                                                    class="latoBold blackText"> Chennai</span></a>, <a class="blackText"
                                                        href="https://www.makemytrip.com/flights/mumbai-hyderabad-cheap-airtickets.html"><span
                                                            class="latoBold blackText">Mumbai</span></a>, <a class="blackText"
                                                                href="https://www.makemytrip.com/flights/bangalore-hyderabad-cheap-airtickets.html"><span
                                                                    class="latoBold blackText">Bangalore</span></a>, <a class="blackText"
                                                                        href="https://www.makemytrip.com/flights/new_delhi-hyderabad-cheap-airtickets.html"><span
                                                                            class="latoBold blackText">Delhi</span></a> </p>
                                        </p>
                                    </div>
                                </div>
                                <div class="makeFlex infoTile appendBottom10 appendTop10"><img class="appendRight10"
                                    src="https://promos.makemytrip.com/store/DelhiDT.JPG" alt="" data-cy="newsLetterIcon4" />
                                    <div class="flexOne">
                                        <p data-cy="newsLetterTitle4">
                                            <p class="font18 latoBold blackText appendBottom5">Delhi Flights</p>
                                        </p>
                                        <p data-cy="newsLetterText4">
                                            <p class="font12 lineHeight16"><span class="latoBold blackText"></span> Via -<a class="blackText"
                                                href="https://www.makemytrip.com/flights/mumbai-new_delhi-cheap-airtickets.html"> <span
                                                    class="latoBold blackText"> Mumbai</span></a>, <a class="blackText"
                                                        href="https://www.makemytrip.com/flights/pune-new_delhi-cheap-airtickets.html"><span
                                                            class="latoBold blackText">Pune</span></a>, <a class="blackText"
                                                                href="https://www.makemytrip.com/flights/bangalore-new_delhi-cheap-airtickets.html"><span
                                                                    class="latoBold blackText">Bangalore</span></a>, <a class="blackText"
                                                                        href="https://www.makemytrip.com/flights/chennai-new_delhi-cheap-airtickets.html"><span
                                                                            class="latoBold blackText">Chennai</span></a> </p>
                                        </p>
                                    </div>
                                </div>
                                <div class="makeFlex infoTile appendBottom10 appendTop10"><img class="appendRight10"
                                    src="https://promos.makemytrip.com/store/PuneDT.JPG" alt="" data-cy="newsLetterIcon5" />
                                    <div class="flexOne">
                                        <p data-cy="newsLetterTitle5">
                                            <p class="font18 latoBold blackText appendBottom5">Pune Flights</p>
                                        </p>
                                        <p data-cy="newsLetterText5">
                                            <p class="font12 lineHeight16"><span class="latoBold blackText"></span> Via -<a class="blackText"
                                                href="https://www.makemytrip.com/flights/new_delhi-pune-cheap-airtickets.html"> <span
                                                    class="latoBold blackText"> Delhi</span></a>, <a class="blackText"
                                                        href="https://www.makemytrip.com/flights/bangalore-pune-cheap-airtickets.html"><span
                                                            class="latoBold blackText">Bangalore</span></a>, <a class="blackText"
                                                                href="https://www.makemytrip.com/flights/chennai-pune-cheap-airtickets.html"><span
                                                                    class="latoBold blackText">Chennai</span></a>, <a class="blackText"
                                                                        href="https://www.makemytrip.com/flights/ahmedabad-pune-cheap-airtickets.html"><span
                                                                            class="latoBold blackText">Ahmedabad</span></a> </p>
                                        </p>
                                    </div>
                                </div>
                                <div class="makeFlex infoTile appendBottom10 appendTop10"><img class="appendRight10"
                                    src="https://promos.makemytrip.com/store/SingaporeDT.JPG" alt="" data-cy="newsLetterIcon6" />
                                    <div class="flexOne">
                                        <p data-cy="newsLetterTitle6">
                                            <p class="font18 latoBold blackText appendBottom5">Kolkata Flights</p>
                                        </p>
                                        <p data-cy="newsLetterText6">
                                            <p class="font12 lineHeight16"><span class="latoBold blackText"></span> Via -<a class="blackText"
                                                href="https://www.makemytrip.com/flights/new_delhi-kolkata-cheap-airtickets.html"> <span
                                                    class="latoBold blackText"> Delhi</span></a>, <a class="blackText"
                                                        href="https://www.makemytrip.com/flights/mumbai-kolkata-cheap-airtickets.html"><span
                                                            class="latoBold blackText">Mumbai</span></a>, <a class="blackText"
                                                                href="https://www.makemytrip.com/flights/bangalore-kolkata-cheap-airtickets.html"><span
                                                                    class="latoBold blackText">Bangalore</span></a>, <a class="blackText"
                                                                        href="https://www.makemytrip.com/flights/pune-kolkata-cheap-airtickets.html"><span
                                                                            class="latoBold blackText">Pune</span></a> </p>
                                        </p>
                                    </div>
                                </div>
                                <div class="makeFlex infoTile appendBottom10 appendTop10"><img class="appendRight10"
                                    src="https://promos.makemytrip.com/store/BangaloreDT.JPG" alt="" data-cy="newsLetterIcon7" />
                                    <div class="flexOne">
                                        <p data-cy="newsLetterTitle7">
                                            <p class="font18 latoBold blackText appendBottom5">Bangalore Flights</p>
                                        </p>
                                        <p data-cy="newsLetterText7">
                                            <p class="font12 lineHeight16"><span class="latoBold blackText"></span> Via -<a class="blackText"
                                                href="https://www.makemytrip.com/flights/new_delhi-bangalore-cheap-airtickets.html"> <span
                                                    class="latoBold blackText"> Delhi</span></a>, <a class="blackText"
                                                        href="https://www.makemytrip.com/flights/pune-bangalore-cheap-airtickets.html"><span
                                                            class="latoBold blackText">Pune</span></a>, <a class="blackText"
                                                                href="https://www.makemytrip.com/flights/mumbai-bangalore-cheap-airtickets.html"><span
                                                                    class="latoBold blackText">Mumbai</span></a>, <a class="blackText"
                                                                        href="https://www.makemytrip.com/flights/kolkata-bangalore-cheap-airtickets.html"><span
                                                                            class="latoBold blackText">Kolkata</span></a> </p>
                                        </p>
                                    </div>
                                </div>
                                <div class="makeFlex infoTile appendBottom10 appendTop10"><img class="appendRight10"
                                    src="https://promos.makemytrip.com/store/JaipurDT.JPG" alt="" data-cy="newsLetterIcon8" />
                                    <div class="flexOne">
                                        <p data-cy="newsLetterTitle8">
                                            <p class="font18 latoBold blackText appendBottom5">Jaipur Flights</p>
                                        </p>
                                        <p data-cy="newsLetterText8">
                                            <p class="font12 lineHeight16"><span class="latoBold blackText"></span> Via -<a class="blackText"
                                                href="https://www.makemytrip.com/flights/mumbai-jaipur-cheap-airtickets.html"> <span
                                                    class="latoBold blackText"> Mumbai</span></a>, <a class="blackText"
                                                        href="https://www.makemytrip.com/flights/new_delhi-jaipur-cheap-airtickets.html"><span
                                                            class="latoBold blackText">Delhi</span></a>, <a class="blackText"
                                                                href="https://www.makemytrip.com/flights/pune-jaipur-cheap-airtickets.html"><span
                                                                    class="latoBold blackText">Pune</span></a>, <a class="blackText"
                                                                        href="https://www.makemytrip.com/flights/bangalore-jaipur-cheap-airtickets.html"><span
                                                                            class="latoBold blackText">Bangalore</span></a> </p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="landingCard appendBottom40 travelBlog">
                            <div class="makeFlex column blackText latoBold appendBottom20">
                                <h2>
                                    <font color="#393939">Travel Blog</font>
                                </h2>
                                <p class="font22 makeFlex latoRegular appendTop5">
                                    <span class="makeFlex pushRight">
                                        <a data-cy="travelBlogViewAll"
                                            href="https://www.makemytrip.com/blog/?intid=Blog_HomePage_Tab_Stories"
                                            class=" makeFlex hrtlCenter font16 blueText latoBlack appendRight20">
                                            VIEW ALL<span class="blueArrowIcon landingSprite appendLeft10"></span>
                                        </a><span class="slideArrow pushRight" data-cy="travelBlogSA">&nbsp;</span>
                                    </span>
                                </p>
                            </div>
                            <div class="landingCardSlider" data-cy="travelBlog">
                                <div class="slick-slider slick-initialized" dir="ltr">
                                    <button type="button" data-role="none" class="slick-arrow slick-prev slick-disabled"
                                        style={{ display: "block" }}>
                                        Previous
                                </button>
                                    <div class="slick-list">
                                        <div class="slick-track"
                                            style={{ width: "1365px", opacity: "1", transform: "translate3d(0px, 0px, 0px)" }}>
                                            <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1"
                                                aria-hidden="false" style={{ outline: "none", width: "273px" }}>
                                                <div>
                                                    <a data-cy="BlogLink-0"
                                                        data-cy-url="http://www.makemytrip.com/blog/best-hotels-in-jaipur"
                                                        class="slideItem pointer" tabindex="-1"
                                                        style={{ width: "100%", display: "inline-block" }}>
                                                        <div class="makeFlex itemCard column">
                                                            <img class="travelBlogImgWrap appendBottom10"
                                                                src="https://seoimgak.mmtcdn.com/blog/sites/default/files/hero1_56.jpg?6sraRPCox0.PyQfFksa3.nsLgVWlCpoD"
                                                                alt="" data-cy="travelBlogImage0" />
                                                            <p class="font16 lineHeight22 blackText paddingLR20 appendBottom10 minHeight45"
                                                                data-cy="travelBlogTitle0">
                                                                Best Hotels in Jaipur for a
                                                                Rendezvous with Royal Herit...
                                                        </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div data-index="1" class="slick-slide slick-active" tabindex="-1"
                                                aria-hidden="false" style={{ outline: "none", width: "273px" }}>
                                                <div>
                                                    <a data-cy="BlogLink-1"
                                                        data-cy-url="http://www.makemytrip.com/blog/luxury-cruise-from-mumbai-to-goa"
                                                        class="slideItem pointer" tabindex="-1"
                                                        style={{ width: "100%", display: "inline-block" }}>
                                                        <div class="makeFlex itemCard column">
                                                            <img class="travelBlogImgWrap appendBottom10"
                                                                src="https://seoimgak.mmtcdn.com/blog/sites/default/files/hero-1_118.jpg?DxtRWunGOKHqhk5iSJetOsutqcjPKpDB"
                                                                alt="" data-cy="travelBlogImage1" />
                                                            <p class="font16 lineHeight22 blackText paddingLR20 appendBottom10 minHeight45"
                                                                data-cy="travelBlogTitle1">
                                                                India’s First Luxury Cruise from
                                                                Mumbai to Goa Is Here!
                                                        </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div data-index="2" class="slick-slide slick-active" tabindex="-1"
                                                aria-hidden="false" style={{ outline: "none", width: "273px" }}>
                                                <div>
                                                    <a data-cy="BlogLink-2"
                                                        data-cy-url="http://www.makemytrip.com/blog/dubai-things-to-do"
                                                        class="slideItem pointer" tabindex="-1"
                                                        style={{ width: "100%", display: "inline-block" }}>
                                                        <div class="makeFlex itemCard column">
                                                            <img class="travelBlogImgWrap appendBottom10"
                                                                src="https://seoimgak.mmtcdn.com/blog/sites/default/files/hero-mage.jpg?N1D3W7WjU8i5tr4dvx6k5St1e1udFD.D"
                                                                alt="" data-cy="travelBlogImage2" />
                                                            <p class="font16 lineHeight22 blackText paddingLR20 appendBottom10 minHeight45"
                                                                data-cy="travelBlogTitle2">
                                                                Dubai: 10 Incredible Things to do on
                                                                Your First Visit
                                                        </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div data-index="3" class="slick-slide slick-active" tabindex="-1"
                                                aria-hidden="false" style={{ outline: "none", width: "273px" }}>
                                                <div>
                                                    <a data-cy="BlogLink-3"
                                                        data-cy-url="http://www.makemytrip.com/blog/romantic-getaways-for-couples"
                                                        class="slideItem pointer" tabindex="-1"
                                                        style={{ width: "100%", display: "inline-block" }}>
                                                        <div class="makeFlex itemCard column">
                                                            <img class="travelBlogImgWrap appendBottom10"
                                                                src="https://seoimgak.mmtcdn.com/blog/sites/default/files/A romantic holiday in goa.jpg?rKNs.Au2jObhXSeGFWNa3C5zkgjQoxyu"
                                                                alt="" data-cy="travelBlogImage3" />
                                                            <p class="font16 lineHeight22 blackText paddingLR20 appendBottom10 minHeight45"
                                                                data-cy="travelBlogTitle3">
                                                                6 Romantic Getaways That You Must
                                                                Plan with Your Signif...
                                                        </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div data-index="4" class="slick-slide slick-active" tabindex="-1"
                                                aria-hidden="false" style={{ outline: "none", width: "273px" }}>
                                                <div>
                                                    <a data-cy="BlogLink-4"
                                                        data-cy-url="http://www.makemytrip.com/blog/ethiopia-travel-back-in-time"
                                                        class="slideItem pointer" tabindex="-1"
                                                        style={{ width: "100%", display: "inline-block" }}>
                                                        <div class="makeFlex itemCard column">
                                                            <img class="travelBlogImgWrap appendBottom10"
                                                                src="https://seoimgak.mmtcdn.com/blog/sites/default/files/thumb.jpg"
                                                                alt="" data-cy="travelBlogImage4" />
                                                            <p class="font16 lineHeight22 blackText paddingLR20 appendBottom10 minHeight45"
                                                                data-cy="travelBlogTitle4">
                                                                Travel 7 Years Back in Time, for
                                                                Real!
                                                        </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div><button type="button" data-role="none" class="slick-arrow slick-next"
                                        style={{ display: "block" }}>
                                        Next
                                </button>
                                </div>
                            </div>
                        </div>
                        <ul class="stickyScroll makeFlex column zIndex14" id="stickyScroll">
                            <li class="makeFlex" data-source="SW">
                                <a class="stickyLink landingSprite scrollSWIcon active" data-source="SW"
                                    href="javascript:void(0);"></a>
                                <div class="tip whiteText">Click to go to<span class="latoBlack"> search widget</span></div>
                            </li>
                            <li class="makeFlex" data-source="Offers_Listing">
                                <a class="stickyLink landingSprite scrollOfferIcon" data-source="Offers_Listing"
                                    href="javascript:void(0);"></a>
                                <div class="tip whiteText">
                                    Click to scroll to all<span class="latoBlack">
                                        &nbsp; available
                                        offers
                                </span>
                                </div>
                            </li>
                            <li class="makeFlex" data-source="PROMOTIONS">
                                <a class="stickyLink landingSprite scrollPromoIcon" data-source="PROMOTIONS"
                                    href="javascript:void(0);"></a>
                                <div class="tip whiteText">
                                    Click to scroll to your<span class="latoBlack">
                                        &nbsp; promotions and
                                        offers
                                </span>
                                </div>
                            </li>
                            <li class="makeFlex" data-source="Recommended_Flights">
                                <a class="stickyLink landingSprite scrollFlightIcon" data-source="Recommended_Flights"
                                    href="javascript:void(0);"></a>
                                <div class="tip whiteText">
                                    Click to scroll to compare<span class="latoBlack">
                                        flight
                                        prices
                                </span>
                                </div>
                            </li>
                        </ul>
                    </main>
                </div>
            </div>
        );
    }

    export default MinContainer;