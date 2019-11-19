import React from 'react';
import { connect } from 'react-redux';
import { requestApiData } from '../../../containers/App/actions'
import { bindActionCreators } from 'redux';

class FlightFareSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fareSummary: [],
    }
  }

  componentDidMount() {
    this.props.requestApiData();
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    let flag = 0;
    this.setState({
      fareSummary: [...nextProps.data.fareBreakup],
    }, () => {
      console.log(this.state.fareSummary);
    });
  }

  render() {
    return (
      <div class="fli-intl-rhs pull-left">
        {this.state.fareSummary.map(item => {
          return (
            <div>
              <p class="rvw-heading LatoBold">Fare Summary</p>
              <div class="rvw-sctn append_bottom15 make_relative" style={{ zIndex: "1" }}>
                <div class="fareSmry-sctn">
                  <div class="fareSmry-header LatoBold">
                    <p class="fareSmry-hdng">
                      <span class="fareSmry-expand-icon cursor_pointer marR15 open"></span><span>
                        {item.fareBreakup.fareBreakupitems[0].title}
                </span>
                    </p>
                  </div>
                  <div class="fareSmry-wrap">
                    <p class="fareSmry-row">
                      <span class="fareSmry-field">
                        <span>
                         {item.fareBreakup.fareBreakupitems[0].fareEntities.text}
                  </span>
                      </span><span class="font16 LatoBold text-right">
                        <span>
                          ₹
                          {item.fareBreakup.fareBreakupitems[0].fareEntities.amount}
                  </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="fareSmry-sctn">
                  <div class="fareSmry-header LatoBold">
                    <p class="fareSmry-hdng">
                      <span class="fareSmry-expand-icon cursor_pointer marR15 "></span><span>
                      {item.fareBreakup.fareBreakupitems[1].title}
                </span>
                    </p><span class="font16">₹ {item.fareBreakup.fareBreakupitems[1].amount}</span>
                  </div>
                </div>
                <div class="fareSmry-sctn">
                  <div class="fareSmry-header LatoBold">
                    <p class="fareSmry-hdng">
                      <span class="fareSmry-expand-icon cursor_pointer marR15 "></span><span>
                      {item.fareBreakup.fareBreakupitems[2].title}
                </span>
                    </p><span class="font16">₹ {item.fareBreakup.fareBreakupitems[2].amount}</span>
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
                          {item.fareBreakup.fareBreakupitems[0].totFare}
                  </span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )
        })}
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

const mapStateToProps = state => ({ data: state.flights });
const mapDispatchToPrps = disptch => bindActionCreators({ requestApiData }, disptch);
export default connect(mapStateToProps, mapDispatchToPrps)(FlightFareSummary);

