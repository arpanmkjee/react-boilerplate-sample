import React from 'react';
import { connect } from 'react-redux';

class FlightAncillarySeats extends React.Component {
    constructor(props){
        super(props);
        this.state={
            seatLayout:this.props
        }
    }

    render(){
        return (
            <div class="ancillary-main hide">
                <div class="seatSection make_relative">
                    <div class="ancillary-banner LatoBold" id="seatAncBanner" style={{ top: "164px" }}>
                        <img src="https://imgak.mmtcdn.com/flights/assets/media/dt/ancillaries/seats_green_strip_icon.png?v=1"
                            style={{ marginRight: "10px", height: "20px" }} /><span>
                            Enjoy a comfortable flight with your
                            favourite seat
                                        </span>
                    </div>
                    <div class="seat-wrapper make_relative ">
                        <div class="plane-desc font16">
                            <p class="airline-name"></p>
                            <p>JetAircraft 737-800</p>
                        </div>
                        <div class="plane-wrapper make_relative clearfix">
                            <img src="//jsak.mmtcdn.com/flights/assets/media/cockpit.67e1d282.png" alt="cockpit"
                                class="cockpit-img" />
                            <div class="seatmap-wrapper ">
                                {this.state.seatLayout.seats.anclryResponse.seat.anclryInfo[0].cLyt.deckMap.MAIN.sm.map(item=>
                                <div class="seat_row ">
                                    <div class="seat_col">
                                        <div>
                                            <div class="seat_empty_label"></div>
                                        </div>
                                    </div>
                                    <div class="seat_col">
                                        <div class="lavatory-wrap">
                                            <img src="data:image/png;base64,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"
                                                alt="" />
                                        </div>
                                    </div>
                                    <div class="seat_col">
                                        <div class="empty_cell"></div>
                                    </div>
                                    <div class="seat_col">
                                        <div class="empty_cell"></div>
                                    </div>
                                    <div class="seat_col">
                                        <div class="empty_cell"></div>
                                    </div>
                                    <div class="seat_col">
                                        <div class="empty_cell"></div>
                                    </div>
                                    <div class="seat_col">
                                        <div class="empty_cell"></div>
                                    </div>
                                    <div class="seat_col">
                                        <div class="galley-wrap">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAA4CAYAAABjXd/gAAAAAXNSR0IArs4c6QAABF5JREFUeAHtnEtsDVEYx3tFvJXEIyQkRUgj0QWRinhuVRALqQgaxCMRW6Fs7JpYkIhakZQQQRAWVrWhbBCvNK1HqWoajyZeQau9fv9bc03mnvZOz73k3uk5ydc55zvf+eb7fjkzc+6ZSWMFFiUejx9lWLnF0HwZsi8Wi520CXawzSDGFCITLcfmw7ARtkEOsh3oxpkJOKBmLtZaB9QanXmgA2rmYq21fShZnzBPBpawkllDrN3Ie6SVp/7rMLHHwhgFbTjZKXQVQX3E22/I7ypyDLgNveXqLvneyKTqp6LajTxhQlUjo1JNCgocUBOVvnW6Te5E6oBaFDR1QINEwrfnYHoTqOP9Q9xDyU/jb72O6lNEE06/CBcgE5BgKUJxCajLuK/G1elmqCiklnMA2o5sQ1bRPRnZhXxNNS1Ygm6Dp3dAPRJ9HIHahZzApAR5ZTA9xCxNrJgcUAOd3lRAbaJvC5K4vH1206iXqu2A+qiEqQL1JnanDbYrpXNADWRCqC4YbGZK54AayIRQPTfY6MFlDfSbwWGUVN/TJDPE0N8pne0M/WhwGCXVpzTJaFEfLK1S2AJtD3qLWPtzmny2GvofSeeAGsigajGrWS/F4zvoW27o106UNdB6g8OoqDpIpNGUDDBXoz9s6KtjOZUYYztDH+L0h8FxFFQNwPnlTwSQxUgNuiuIadtur2dvtTnCCTs5wX2cLPQcReg4ndy0MaKiCadNkXFq9FKq4XHL67MC+mfwHY5RBDqSvGZ7gNIca+nf47exveTl46Lf0QCsnyHnsuDtwRooju7i0HjzjjjcZvLbSP6SlOeINdA/0GoiDk/pdSFvkfPIemQWIDU7jcXqrafniZv3FOovENNPMc8sX47PCFSbxd2+gFVvB6Bf5+tOrWY0QzlRCy6Pp7rNS80B8mlD3vnkA/XQMJV1RjNUDpilWlJolo5RO0/LPeKeD7zgxnG/08lohupsBKGNkqp+nzm3Buh70IxhKqWMZ6icMEt1D9W6dK7aeVZqgLk5WzFnBaiCAap2rPXryfTTTCa5WLTsmwdQ09tMq3gzvuS9sxKUnpJ61Zov5SeBlmcTphLPGlA5Izitzw6qnuNFmx/riPdBjsfZEx6XfxWSq6WLwMr/Fcis3UODARL0JnRjg/ocaDcyM2/kQBwuBEfAEXAEHIEAgRgPj7MBnWvaEWjiYVcpoPpKYpidDzfKR+A2QBdpYZ/44sHX4ap2BBIcBXQgvsawQ9b3qARHAb3Wt53rDUnguux0D53E8SUyXApXrAhodhZzD40P4k8bjSNWbtwgj8B+wVQj8VueWTqaul4Lh33Br7Gu9BC4DMy1Hozk5ghQZ6CsQ6L8nxq8vLN11PbfYoAmP0BO7oei1Iu2UuRxts4WcT96mC/1w1S+SaBq0PmKg6BWIuk+OsVkQJZmsq5A1sDrS5BA8pIPdnALKES3AilDpiP6KH8oMtCKLmct2usRfVRbC8gOjq78DwK/AdEIfXolVh2OAAAAAElFTkSuQmCC"
                                                alt="" />
                                        </div>
                                    </div>
                                    <div class="seat_col">
                                        <div>
                                            <div class="seat_empty_label"></div>
                                        </div>
                                    </div>
                                </div> 
                                )}                          
                            </div>
                        </div>
                        <img src="//jsak.mmtcdn.com/flights/assets/media/tail.a786df74.png"
                                alt="flight tail" class="tail-img" />
                    </div>
                </div>
                </div>           
        );
    }
    
}

export default FlightAncillarySeats;
