import * as React from 'react';

class FlightAncillaryBaggage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            luggage:this.props
        }
        console.log(this.state.luggage.baggage.anclryResponse.BAGGAGE.anclryInfo)
    }
    render() {
        return (
            <div class="ancillary-main hide">
                <div class="ancillary-banner LatoBold"><img
                    src={this.state.luggage.baggage.anclryResponse.BAGGAGE.anclryInfo[0].persuasionIcon}
                    style={{marginRight: "10px",height: "20px"}} /><span>{this.state.luggage.baggage.anclryResponse.BAGGAGE.anclryInfo[0].persuasionText}</span>
                </div>
                <div class="meal-wrapper">
                    <p class="meal-header"><span class="meal-title">{this.state.luggage.baggage.anclryResponse.BAGGAGE.anclryInfo[0].title}</span><span class="meal-subtxt">
                    {this.state.luggage.baggage.anclryResponse.BAGGAGE.anclryInfo[0].subTitle}</span></p>
                    <div class="meal-body">
                        <div class="meal-list custom-scroll">
                           {this.state.luggage.baggage.anclryResponse.BAGGAGE.anclryInfo[0].data.map(item=>
                            <div class="meal-list-item make_relative">                               
                                <p class="makeFlex alC"><span class="meal-img"><img
                                    src={item.iconUrl}
                                    style={{height: "45px"}}/></span><span class="meal-name">{item.title}</span></p>
                                <div class="make_flex alC">
                                    <p class="make_flex alC"><span class="slashed-price font14 marR5"></span><span
                                        class="meal-price LatoBold">{item.finalAmount}</span></p>
                                    <p class="meal-counter text-center"><span class="add-meal-whiteSpace"></span><span
                                        class="add-meal-btn LatoBold">Add</span><span class="add-meal-actions">+</span></p>
                                </div>
                                
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 
export default FlightAncillaryBaggage;