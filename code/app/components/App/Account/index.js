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