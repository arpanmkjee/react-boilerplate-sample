import React from 'react';
import homeStyles from '../../../../css/home.css';
import commonStyles from '../../../../css/common.css';

function FlightAncillarySummary() {
  return (
    <div>
      <div>
        <p class="rvw-heading LatoBold">Flight Summary</p>
      </div>
      <div class="tvlr-sctn append_bottom15">
        <div class="tvlrDtls-heading">
          <div>
            <p class="tvlrDtls-heading-txt LatoBold append_bottom5">Mumbai - Hyderabad</p>
            <p class="font18">
              <font color="#4a4a4a">Departure Sat, 16 Nov</font>
            </p>
          </div><a href="javascript:void(0);" class="tvlrCollapseble LatoMedium">
            Flight
                                    details<span class="blue-arrow-icon marL10"></span>
          </a>
        </div>
        <div class="collapse" style={{ height: "0px" }}>
          <div class="travlDtls-body">
            <div class="fli-list one-way">
              <div class="fli-list-body-section">
                <div class="dept-options">
                  <div class="dept-options-section clearfix">
                    <div class="pull-left airline-info">
                      <div class="pull-left">
                        <span class=" ">
                          <span class="arln-logo logo1"
                            style={{ backgroundImage: "url(&quot;https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=4&quot;)" }}></span>
                        </span>
                      </div>
                      <div class="pull-left airways-info-sect">
                        <p><span class="airways-name ">Spicejet</span></p>
                      </div>
                    </div>
                    <div class="pull-left">
                      <div class="pull-left">
                        <div class="timing-option append_bottom5 clearfix">
                          <div class="fli-time-section pull-left">
                            <p class="dept-time append_bottom3">22:45</p>
                            <p class="font14 LatoBold">Sat, 16 Nov 19 </p>
                            <p class="dept-city">Mumbai</p>
                            <p class="font11 prepend_top5">
                              Chhatrapati
                              Shivaji International Airport, Terminal 2
                                                                    </p>
                          </div>
                          <div class="pull-left fli-stops make_relative">
                            <p class="font16"><b>1</b> h <b>25</b> m</p>
                            <div class="make_relative fli-stops-sep">
                              <p class="fli-stops-seperator"></p>
                            </div>
                            <p class="fli-stops-desc">Non Stop</p>
                          </div>
                          <div class="fli-time-section pull-left text-right">
                            <div class="pull-right text-left">
                              <p class="reaching-time append_bottom3">
                                00:10
                                                                        </p>
                              <p class="font14 LatoBold">
                                Sun, 17 Nov 19
                                                                        </p>
                              <p class="arrival-city">Hyderabad</p>
                              <p class="font11 prepend_top5">
                                Rajiv Gandhi
                                International Airport
                                                                        </p>
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
      </div>
    </div>

  );
}

export default FlightAncillarySummary;
