import React from 'react'; 

function Header() {
  return (
    <div class="headerOuter">
                    <div class="chHeaderWrapper navOnly">
                        <div class="chHeaderContainer">
                            <span class="logoContainer">
                                <a class="chMmtLogo" href="//www.makemytrip.com/">
                                    <img src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
                                         alt="MMT's LOGO"/>
                                </a>
                            </span>
                            <nav>
                                <ul class="makeFlex font12">
                                    <li data-cy="menu_Flights" class=" ">
                                        <a href="//www.makemytrip.com/flights/"
                                           class="active makeFlex hrtlCenter column">
                                            <span class="chNavIcon appendBottom2 chSprite chFlights active"></span><span class="chNavText darkGreyText">
                                                Flights
                                                
                                            </span>
                                        </a>
                                    </li>
                                    <li data-cy="menu_Hotels" class=" ">
                                        <a href="//www.makemytrip.com/hotels/" class=" makeFlex hrtlCenter column">
                                            <span class="chNavIcon appendBottom2 chSprite chHotels "></span><span class="chNavText darkGreyText">
                                                Hotels
                                                
                                            </span>
                                        </a>
                                    </li>
                                    <li data-cy="menu_VillasApts" class=" ">
                                        <a href="//www.makemytrip.com/homestays/" class=" makeFlex hrtlCenter column">
                                            <span class="chNavIcon appendBottom2 chSprite chHomestays "></span><span class="chNavText darkGreyText">
                                               Villas &amp; Apts
                                                
                                            </span>
                                        </a>
                                    </li>
                                    <li data-cy="menu_Holidays" class=" ">
                                        <a href="//www.makemytrip.com/holidays-india/"
                                           class=" makeFlex hrtlCenter column">
                                            <span class="chNavIcon appendBottom2 chSprite chHolidays "></span><span class="chNavText darkGreyText">
                                                Holidays
                                               
                                            </span>
                                        </a>
                                    </li>
                                    <li data-cy="menu_Trains" class=" ">
                                        <a href="//www.makemytrip.com/railways/" class=" makeFlex hrtlCenter column">
                                            <span class="chNavIcon appendBottom2 chSprite chTrains "></span><span class="chNavText darkGreyText">
                                                Trains
                                                
                                            </span>
                                        </a>
                                    </li>
                                    <li data-cy="menu_Buses" class=" ">
                                        <a href="//www.makemytrip.com/bus-tickets/" class=" makeFlex hrtlCenter column">
                                            <span class="chNavIcon appendBottom2 chSprite chBuses "></span><span class="chNavText darkGreyText">
                                                Buses
                                                
                                            </span>
                                        </a>
                                    </li>
                                    <li data-cy="menu_Cabs" class=" ">
                                        <a href="//www.makemytrip.com/cabs/" class=" makeFlex hrtlCenter column">
                                            <span class="chNavIcon appendBottom2 chSprite chCabs "></span><span class="chNavText darkGreyText">
                                                Cabs
                                                
                                            </span>
                                        </a>
                                    </li>
                                    <li data-cy="menu_Visa" class=" ">
                                        <a href="//www.makemytrip.com/visa/" class=" makeFlex hrtlCenter column">
                                            <span class="chNavIcon appendBottom2 chSprite chVisa "></span><span class="chNavText darkGreyText">
                                                Visa
                                                
                                            </span>
                                        </a>
                                    </li>
                                    <li data-cy="menu_Giftcards" class=" ">
                                        <a href="//www.makemytrip.com/gift-cards/?intid=Header_ch_giftcard"
                                           class=" makeFlex hrtlCenter column" target="_blank">
                                            <span class="chNavIcon appendBottom2 chSprite chGiftcards "></span><span class="chNavText darkGreyText">
                                                Giftcards
                                                
                                            </span>
                                        </a>
                                    </li>
                                    <li data-cy="menu_More" class="moreItem ">
                                        <a class=" makeFlex hrtlCenter column">
                                            <span class="chNavIcon appendBottom2 chSprite chMore "></span><span class="chNavText">
                                                <span class="darkGreyText">
                                                    More
                                                    
                                                </span><span class="arrow arrowDown"></span>
                                            </span>
                                        </a>
                                        <div class="moreOption font16 latoBold">
                                            <a data-cy="submenu_MyBiz" class="appendBottom5 blackText"
                                               href="//mybiz.makemytrip.com/">
                                                My Biz
                                            </a><a data-cy="submenu_InternationalFlights"
                                                   class="appendBottom5 blackText"
                                                   href="//www.makemytrip.com/international-flights/">
                                                International Flights
                                            </a><a data-cy="submenu_InternationalHotels" class="appendBottom5 blackText"
                                                   href="//www.makemytrip.com/hotels-international/">
                                                International Hotels
                                            </a><a data-cy="submenu_Deals" target="_blank"
                                                   class="appendBottom5 blackText"
                                                   href="//www.makemytrip.com/daily-deals/">
                                                Deals
                                            </a><a data-cy="submenu_Blog" target="_blank"
                                                   class="appendBottom5 blackText"
                                                   href="//www.makemytrip.com/blog/?intid=Blog_HomePage_Tab_Stories">
                                                Blog
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <ul class="makeFlex hrtlCenter font10 blackText">
                                <li class="font12 makeRelative">
                                    <div id="loginTrigger" class="makeFlex cursorPointer">
                                        <span class="userInfoBoxLabel whiteText appendRight10 font10 latoBlack textCenter">
                                            <span class="chSprite chLoggedOutLogo chMy"></span>
                                        </span>
                                        <div class="makeFlex hrtlCenter">
                                            <div data-cy="account" class="makeFlex spaceBetween column">
                                                <span class="latoBold appendBottom2">
                                                    Login or
                                                    
                                                </span><span class="latoBold">
                                                    Create Account
                                                   
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
  );
}

export default Header;
