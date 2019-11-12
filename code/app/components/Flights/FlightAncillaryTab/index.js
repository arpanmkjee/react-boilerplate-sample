import React from 'react';

function FlightAncillaryTab() {
  return (
    <div>
    <div class="hsw" id="rev-header">
                        <div class="fli-intl-container">
                            <div class="make_flex hrtlCenter spaceBetween">
                                <h4 class="font22 latoBold whiteText headerTitle">Traveller &amp; Addons</h4>
                            </div>
                        </div>
                    </div>
                    <div class="ancillary-header">
                        <ul class="ancillary-nav">
                            <li class="">
                                <span class="ancillary-nav-icon">
                                    <span class="ancillary-meals-icon"></span>
                                </span>Meals
                            </li>
                            <li class="active">
                                <span class="ancillary-nav-icon">
                                    <span class="ancillary-seats-icon"></span>
                                </span>Seats
                            </li>
                            <li class="">
                                <span class="ancillary-nav-icon">
                                    <span class="ancillary-baggage-icon"></span>
                                </span>Baggage
                            </li>
                        </ul>
                        <div class="make_flex ancillary-sector-nav">
                            <ul class="make_flex">
                                <li class="active">BOM-HYD</li>
                            </ul>
                            <div class="ancillary-flight-summary make_relative">
                                <p class="cursor_pointer">Flight summary<span class="ancillary-chevron "></span></p>
                            </div>
                        </div>
                    </div>
    </div>
  );
}

export default FlightAncillaryTab;
