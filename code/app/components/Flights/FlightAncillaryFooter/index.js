import React from 'react';


function FlightAncillaryFooter() {
    return (
        <div class="ancillary-footer clearfix">
            <div class="pull-left">
                <div class="mealsFooter clearfix">
                    <div class="pull-left">
                        <div class="pull-left">
                            <p class="font16 append_bottom5"><span class="LatoBold">Select Meal(s)</span></p>
                            <p class="font16">0 of 1 Meal(s) Selected</p>
                        </div>
                    </div>
                    <ul class="pull-right seatFareInfo"> </ul>
                    <div class="pull-right text-right">
                        <p class="append_bottom5">(Added to total fare)</p>
                        <p class="meals-totalFare">₹ 0</p>
                    </div>
                </div>
            </div>
            <div class="pull-left ancillary_fare make_relative">
                <div class="pull-left">
                    <p class="ancillary_txt">Total fare</p>
                    <div>
                        <span class="total_ancillary_fare">
                            <span style={{ fontSize: "20px", textAlign: "right", lineHeight: "normal" }}>
                                <span>
                                    ₹
                                    1,705
                                            </span>
                            </span>
                        </span><span class="marL5 ancillary-info-icon"></span>
                    </div>
                </div><a href="javascript:void(0);" id="ancillary-continue"
                    class="pull-left continue-ancillary-cta btn fli_primary_btn make_relative">Continue</a><span>
                    <a id="ancillary-secondary" href="/confirm" class="pull-left skip-add-ons">
                        Skip
                        add-ons
                                </a>
                </span>
            </div>
        </div>
    );
}

export default FlightAncillaryFooter;
