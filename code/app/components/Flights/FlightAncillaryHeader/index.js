import React from 'react';


class FlightAncillaryHeader extends React.Component {
    constructor(props){
        super(props);
        this.state={
            headerPart:this.props
        }
        console.log(this.state.headerPart)
    }
    render(){
        return (
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
                        <li class="active">{this.state.headerPart.header.anclryResponse.BAGGAGE.anclryInfo[0].sectorTitle}</li>
                    </ul>
                    <div class="ancillary-flight-summary make_relative">
                        <p class="cursor_pointer">Flight summary<span class="ancillary-chevron "></span></p>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default FlightAncillaryHeader;
