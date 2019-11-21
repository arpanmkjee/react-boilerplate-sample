import React from 'react';
import { connect } from 'react-redux';

class FlightAncillarySeats extends React.Component {
    constructor(props) {
        debugger;
        super(props);
        this.state = {
            seatLayout: this.props
        }
        console.log(this.state.seatLayout.seats.anclryResponse.seat.anclryInfo[0].cLyt.deckMap.MAIN.sm)
    }

    render() {
        return (
            <div class="ancillary-main show">
                <div class="seatSection make_relative">
                    <div class="ancillary-banner LatoBold" id="seatAncBanner" style={{ top: "164px" }}>
                        <img src={this.state.seatLayout.seats.anclryResponse.seat.anclryInfo[0].persuasionIcon}
                            style={{ marginRight: "10px", height: "20px" }} /><span>
                            Enjoy a comfortable flight with your
                            favourite seat
                                        </span>
                    </div>
                    <div class="seat-wrapper make_relative ">
                        <div class="plane-desc font16">
                            <p class="airline-name"></p>
                            <p>{this.state.seatLayout.seats.anclryResponse.seat.anclryInfo[0].fDtl.eqCt} {this.state.seatLayout.seats.anclryResponse.seat.anclryInfo[0].fDtl.eqNm}</p>
                        </div>
                        <div class="plane-wrapper make_relative clearfix">
                            <img src="//jsak.mmtcdn.com/flights/assets/media/cockpit.67e1d282.png" alt="cockpit"
                                class="cockpit-img" />
                            <div class="seatmap-wrapper ">
                                {this.state.seatLayout.seats.anclryResponse.seat.anclryInfo[0].cLyt.deckMap.MAIN.sm.map(item =>
                                    <div class="seat_row ">
                                        {item.map(val =>
                                            <div class="seat_col">
                                                <div>
                                                    {val.ct == "LABEL" ?
                                                            <div><div class="seat_label">{val.lbl}</div></div>
                                                        :   val.ct == 'EMPTY' 
                                                        ?   <div class="seat_col">
                                                                <div class="empty_cell"></div>
                                                            </div>
                                                        :   val.ct == "SEAT" && (val.isAv) 
                                                        ?  <div class="make_relative">
                                                                <div class="seat_block cursor_pointer "
                                                                style={{ backgroundColor: "rgb(238, 68, 35)" }}></div> 
                                                            </div>                                                             
                                                        :   val.ct == "SEAT" 
                                                        ?   <div class="make_relative">
                                                                <div class="seat-not-available"></div>
                                                            </div> 
                                                        :   val.ct == "ICON" 
                                                        ?   " ICON"
                                                        :   null }
                                                </div>
                                                
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <img src="//jsak.mmtcdn.com/flights/assets/media/tail.a786df74.png"
                            alt="flight tail" class="tail-img" />
                        </div>
                        
                    </div>

                </div>
            </div>
                       
        );
    }

}

export default FlightAncillarySeats;
