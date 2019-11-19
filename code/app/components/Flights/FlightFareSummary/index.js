import React from 'react';
import { connect } from 'react-redux';
import { requestApiData } from '../../../containers/App/actions'
import { bindActionCreators } from 'redux';

class FlightFareSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fare: this.props,
    }
    console.log(this.state.fare)
  } 

  render() {
    return (
      <div class="fli-intl-rhs pull-left">
        
            <div>
              <p class="rvw-heading LatoBold">Fare Summary</p>
              <div class="rvw-sctn append_bottom15 make_relative" style={{ zIndex: "1" }}>
             
                <div class="fareSmry-sctn">
                {this.state.fare.fareSummary.fareBreakup.fareBreakUpItems.map(item=>
                <div>
                  <div class="fareSmry-header LatoBold">                 
                    <p class="fareSmry-hdng">
                      <span class="fareSmry-expand-icon cursor_pointer marR15"></span><span>
                        {item.title}
                    </span>
                    </p>
                  </div>
                  <div class="fareSmry-wrap">
                    <p class="fareSmry-row">
                      <span class="fareSmry-field">
                        <span>
                         {item.fareEntities[0].text}
                  </span>
                      </span><span class="font16 LatoBold text-right">
                        <span>
                          ₹
                          {item.fareEntities[0].amount}
                  </span>
                      </span>
                    </p>
                  </div>
                  </div>
                   )}
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
                          {/* {this.state.fare.fareSummary.fareBreakup.totFare} */}
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
}


export default FlightFareSummary;

