import React from 'react';


function FlightFareSummary() {
  return (
    <div class="fli-intl-rhs pull-left">
      <div>
        <p class="rvw-heading LatoBold">Fare Summary</p>
        <div class="rvw-sctn append_bottom15 make_relative" style={{ zIndex: "1" }}>
          <div class="fareSmry-sctn">
            <div class="fareSmry-header LatoBold">
              <p class="fareSmry-hdng">
                <span class="fareSmry-expand-icon cursor_pointer marR15 open"></span><span>
                  Base
                  Fare
                </span>
              </p>
            </div>
            <div class="fareSmry-wrap">
              <p class="fareSmry-row">
                <span class="fareSmry-field">
                  <span>
                    Adult(s) (1 X ₹
                    1,015)
                  </span>
                </span><span class="font16 LatoBold text-right">
                  <span>
                    ₹
                    1,015
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div class="fareSmry-sctn">
            <div class="fareSmry-header LatoBold">
              <p class="fareSmry-hdng">
                <span class="fareSmry-expand-icon cursor_pointer marR15 "></span><span>
                  Fee
                  &amp; Surcharges
                </span>
              </p><span class="font16">₹ 685</span>
            </div>
          </div>
          <div class="fareSmry-sctn">
            <div class="fareSmry-header LatoBold">
              <p class="fareSmry-hdng">
                <span class="fareSmry-expand-icon cursor_pointer marR15 "></span><span>
                  Other
                  Services
                </span>
              </p><span class="font16">₹ 5</span>
            </div>
          </div>
          <div class="fareSmry-sctn reqPad-fareSmry-sctn">
            <p class="fareSmry-row LatoBold">
              <span class="font18 fareSmry-field">
                Total
                Amount:
              </span><span class="font20">
                <span style={{ fontSize: "20px", textAlign: "right", lineHeight: "normal" }}>
                  <span>
                    ₹
                    1,705
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="rvw-sctn rvw-cancellation-sctn append_bottom15 LatoBold">
        <p class="font14">Cancellation &amp; Date change charges</p><a href="javascript:void(0);"
          class="text-right">KNOW MORE</a>
      </div>
      <div class="make_relative">
        <p class="cpns-header"><span class="LatoBold">COUPON CODE</span></p>
        <div class="rvw-sctn append_bottom15 rvw-cpn-sctn">
          <div class="">
            <div>
              <p class="make_relative append_bottom10">
                <input type="text"
                  placeholder="Enter Coupon Code" value="" /><span class="cpn-trigger "></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightFareSummary;
