import * as React from 'react';


export default class MakeFlexHome extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="makeFlex hrtlCenter prependTop5 appendBottom40">
                    <a data-cy="mmtLogo" class="mmtLogo makeFlex">
                        <img src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
                             alt="Make My Trip"/>
                    </a>
                    <ul class="userSection pushRight">
                        <li data-cy="mmtDoubleBlack" class="makeFlex hrtlCenter ">
                            <span class="landingSprite mmtBlackIcon appendRight5">&nbsp;</span>
                            <div class="makeFlex column flexOne font10 whiteText">
                                <p class="appendBottom2">MMT<span class="latoBlack">DOUBLEBLACK </span></p>
                                <p class="font8">Free Cancellation Assured</p>
                            </div>
                        </li>
                        <li data-cy="myTrips" class="makeFlex hrtlCenter ">
                            <span class="landingSprite myTripsIcon appendRight10">&nbsp;</span>
                            <div class="makeFlex column flexOne font10 latoBold">
                                <p class="whiteText appendBottom3">My Trips </p>
                            </div>
                        </li>
                        <li data-cy="support" class="makeFlex hrtlCenter ">
                            <span class="landingSprite supportIcon appendRight10">&nbsp;</span>
                            <div class="makeFlex column flexOne font10 latoBold">
                                <p class="whiteText appendBottom3">24x7 </p>
                                <p class="userPerText"> Support</p>
                            </div>
                        </li>
                        <li data-cy="Wallet" class="makeFlex hrtlCenter ">
                            <span class="landingSprite walletBlanceIcon appendRight10">&nbsp;</span><span></span>
                        </li>
                        <li data-cy="myBiz" class="makeFlex perfectCenter myBizIntro">
                            <span class="myBizIcon landingSprite appendRight10">&nbsp;</span>
                            <div class="appendRight5">
                                <p class="latoBold font16 whiteText">Introducing myBiz</p>
                                <p class="font10 whiteText">Save more on business travel</p>
                            </div>
                        </li>
                        <li data-cy="account" class="makeFlex hrtlCenter font10 makeRelative lhUser ">
                            <span class="userNameIcon whiteText makeFlex perfectCenter latoBlack appendRight10">
                                <span class="landingSprite myIconWhite">&nbsp;</span>
                            </span>
                            <div class="makeFlex column flexOne whiteText latoBold">
                                <p> Login or Create Account</p>
                            </div>
                        </li>
                    </ul>
                </div>
        )
    }
}