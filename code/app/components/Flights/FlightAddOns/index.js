import React from 'react';
function FlightAddOns() {
    return (

        <div>
            <p class="rvw-heading LatoBold">Add-ons</p>

            <div class="rvw-sctn trvl-insurance-sctn append_bottom15 " id="insurance-section">
                <span class="marR15"
                    style={{ width: "22px", height: "27px", backgroundSize: "contain", backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/review/insurance.png?v=1&quot;)" }}></span>
                <div class="flexOne">
                    <div class="make_flex space_between">
                        <div>
                            <p class="font20 append_bottom5 LatoLight">Secure your trip</p>
                            <p class="append_bottom15 font14 text-green">
                                See all the benefits you get
                                for just Rs. 129 (18% GST included)
                                                </p>
                        </div><img src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/insurance/RIL.png?v=3"
                            height="40" />
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
                            <input type="radio" value="yes" /><span class="outer marR8"
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
                            <input type="radio" value="no" /><span class="outer marR8"
                                data-ischecked="false"><span class="inner"></span></span><span class="labeltext">No, I do not wish to secure my trip</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FlightAddOns;