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
                            style={{ marginRight: "10px", height: "20px" }} />
                            <span>
                                Enjoy a comfortable flight with your
                                favourite seat
                            </span>
                    </div>
                    <div class="seat-wrapper make_relative">
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
                                                                style={{ backgroundColor: "rgb(123, 184, 255)"  }}></div> 
                                                            </div>                                                             
                                                        :   val.ct == "SEAT" 
                                                        ?   <div class="make_relative">
                                                                <div class="seat-not-available"></div>
                                                            </div> 
                                                        :   val.ct == "ICON" && val.it=="EL"
                                                        ?  <div class="exit_icon left">
                                                            <img src="data:image/png;base64,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" alt=""/>
                                                            </div>
                                                        :   val.ct == "ICON" && val.it=="ER"
                                                        ?   <div class="exit_icon right">
                                                            <img src="data:image/png;base64,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" alt=""/>
                                                            </div>
                                                        :    val.ct == "ICON" && val.it=="LA"
                                                        ?   <div class="lavatory-wrap">
                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA8CAYAAADFXvyQAAAAAXNSR0IArs4c6QAABwlJREFUeAHtnGlsVFUUx2eoiogLBgS3KJSglC1WS40CNRGihrQuiBriwhITRcQFFb8Zv+AXxWjiFyXyxURB1BitGjV+oYagWNCkBhIgikRcAmqhVLBA/R363nDn9r53l/dGa5yTnNxzz/I/5525c982bbHgSb29vYMJmQc3wmPgDritWCy+x/ivE/XVUsQcuAGugdvhd6lvG2NlieT1cAdsog9RnlfZCtLRyb8UPmgo7hC6J+FB6QgZrICPgvfCabQJ40khaYibAC+AzwmMX0SsjR4NwXaKIfM6W/bIvtwJUHEibjx8OIrfwejVZPzlw+uM4tOGboyyLTiT05IDVApudkS92dFPdWtickqkGMs4OpJdh5k4nungPASfGxz8Si5ODcJ7InxqKSpduIyGyuboQ7q/PrdhXWFzUOw+vgXXBnUrCWziYRyO2ZxytvvU5+Pr3KAdHFCn40G1c0rtdfTNy+0rDyA57TuT0wqKDni1I+qrjn55un0G2C4HwF/waXXw83dhXxkCb4PT6C1/5EIBwMUa6KW+OMRfCx/VcPRpyAnEvRSyDYfX6lmZH4FXwPGZyB0UT+IyN0gSgjMD3gnrtBvFdV5FRc5e1xt81fYRdwfJVjA2wvGtxgZsLks8SluZgRraqG0S6FfD8a2G7E9SX1dIVqcGkXRolFQ91cv3WVhoCj5T+sTC74wbKehINK/4QO5RJJHTd3w8ReT43kuufeTrx1A4Cm+htj0yyYUAboS7YB+SZS5FOxG+wV8xYp+Cj8E+9JxTYTYnMtbApu+0SzHrbPixHbCgBhHX5FJIgk9LnD9ttJ3mbyW4Ng0gxTaHwsam2PMwLc8A4hRra9DjGQoQ7GUZ4lNDaX4dDrNTndKN08G4Mt2lkHwlTfA1BE+1AVjsC8EZYfEJNcuHJ5txFnrCFpy2gqzBNnDscgZZ4uDn5ULTzyXgLq8gs/MtYKVuA8YGETQBvCzLVy1nCXjSqDzpIcCCLkq1IqzbgLFBgOSxfONa5Anh/HiSdaTZp4OxOCuOEp+6DfRrEAXIc+U7FYA8xGXg9ssVCHwvccMCY01hqduAqei8lq9azDgmN6mKEJkmy5XyIyGxlpjEbaCsQdHyvd8CFmrOY9O/jeQXhxaQEpe4DZQ1CIC8l69a01V8ANNURYCc5brMls64DZQaFC3fyr0W6Ssv+ACpbyYQl2tHKY93f9V0LtM/cDqgORq3gVKDcL4dvkgLynt6Iwd6SSCoqbmvgSWPYHypm4BXDEH9tgG1QaYCDBiZVJLvMV8EmjqZGP11jTy/WOmLpfi/iNyjzEXstw0cb1C0fOs1Z1m+f2k63+l+Q8A95Btp0KepTB9eK8914mc+abFGG7G7Maw1GMtWUbyCypRRkDwIz3q12gXGN1oR8tDtQU2XOKWZF2CcZ3B41qDzVZmeC7WQs7QNDGIiy/d6DVmW7+eaLmR6PkFvGAIfIO9pBr1J9TDKkzXDF6yANk3nPQVDPrxPtMCybaBsoji+j+zyKlcJSRS/wyLLWaXhTBaqCpNME89Af5/BZvrkDW5OKhOWbANybXT8cUeLAUaWb6NBH6KSU/MLhsBmg05XzUChf1A70b2jOGZ65MEq+hSsrxU8EWUbmCWCrKB9Iii0EXkD3KDosojS6FWwXHuo9Js6SZBNPis5qLxfbZtWUV9ultJs+AAs9BM8GZbf6uRF+wGSvW4uLD8/EdoFlzZC5MRn0thWwTG1ItSozWS+NTZ6jD9qGEVi1yjxa5FPrEwmw+Cp8FAJZFwA50kTI9wRgDbAsoRLxDyxQeKEfRw8qRSgCOhDGrRHgSiJYNXB40sKBLk7LrBkZflvEjkiObPlSYL3LXn2Mgp7EXHbvQICncmzVQ+Nr4N0vZzm86S894w8a0vFSmrQ66lRfkbZ7D7yC8nsLXcAYyLWT0Je4MYGsdQ2gzIXlmuYUJJV0w7PAk+/cw7FdI3rJef3wgTI6+ZgMjZI0AB/G65FfFrmBlqE7mz4JYNNVM3EN8BbEuz/CXVig5TqexRZFQ9y8LK5H1KVipwUp7gMfNGlQQP/KCpYYbVBluZWG1RtkKUDFnN1BVUbZOmAxVxdQdUGWTpgMVdXULVBlg5YzP/XFXTiaWG1QZYOWMwDZQWpr4XkJvdnS93/mNmlQUl367FeXlGbKElv8v0A5TPwevhunhJ0mpwSdKY8cW0SosoxhEkX2/xGHmJPg3XqQXGhIDE260bm8vbiLL9MYd7kedmQ/+MYDdubBvua2J7LSILnlSTSnKUqMPPVil3+enm+aq+kTK6RcIeS/wfkujgn8mhY/pI6pu0Izj/zcd7NAZXXLvKHbpv5CvR7FIu9Hlst/CV2dU9BVVki92AyTIdlXE9++dFEibDLDzWbYHkZIf8l4s+SsSpk68DfUTdUjOQh8owAAAAASUVORK5CYII=" alt=""/>
                                                            </div>                                                       
                                                        :   val.ct == "ICON" && val.it=="GA"
                                                        ?   <div class="galley-wrap">
                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAA4CAYAAABjXd/gAAAAAXNSR0IArs4c6QAABF5JREFUeAHtnEtsDVEYx3tFvJXEIyQkRUgj0QWRinhuVRALqQgaxCMRW6Fs7JpYkIhakZQQQRAWVrWhbBCvNK1HqWoajyZeQau9fv9bc03mnvZOz73k3uk5ydc55zvf+eb7fjkzc+6ZSWMFFiUejx9lWLnF0HwZsi8Wi520CXawzSDGFCITLcfmw7ARtkEOsh3oxpkJOKBmLtZaB9QanXmgA2rmYq21fShZnzBPBpawkllDrN3Ie6SVp/7rMLHHwhgFbTjZKXQVQX3E22/I7ypyDLgNveXqLvneyKTqp6LajTxhQlUjo1JNCgocUBOVvnW6Te5E6oBaFDR1QINEwrfnYHoTqOP9Q9xDyU/jb72O6lNEE06/CBcgE5BgKUJxCajLuK/G1elmqCiklnMA2o5sQ1bRPRnZhXxNNS1Ygm6Dp3dAPRJ9HIHahZzApAR5ZTA9xCxNrJgcUAOd3lRAbaJvC5K4vH1206iXqu2A+qiEqQL1JnanDbYrpXNADWRCqC4YbGZK54AayIRQPTfY6MFlDfSbwWGUVN/TJDPE0N8pne0M/WhwGCXVpzTJaFEfLK1S2AJtD3qLWPtzmny2GvofSeeAGsigajGrWS/F4zvoW27o106UNdB6g8OoqDpIpNGUDDBXoz9s6KtjOZUYYztDH+L0h8FxFFQNwPnlTwSQxUgNuiuIadtur2dvtTnCCTs5wX2cLPQcReg4ndy0MaKiCadNkXFq9FKq4XHL67MC+mfwHY5RBDqSvGZ7gNIca+nf47exveTl46Lf0QCsnyHnsuDtwRooju7i0HjzjjjcZvLbSP6SlOeINdA/0GoiDk/pdSFvkfPIemQWIDU7jcXqrafniZv3FOovENNPMc8sX47PCFSbxd2+gFVvB6Bf5+tOrWY0QzlRCy6Pp7rNS80B8mlD3vnkA/XQMJV1RjNUDpilWlJolo5RO0/LPeKeD7zgxnG/08lohupsBKGNkqp+nzm3Buh70IxhKqWMZ6icMEt1D9W6dK7aeVZqgLk5WzFnBaiCAap2rPXryfTTTCa5WLTsmwdQ09tMq3gzvuS9sxKUnpJ61Zov5SeBlmcTphLPGlA5Izitzw6qnuNFmx/riPdBjsfZEx6XfxWSq6WLwMr/Fcis3UODARL0JnRjg/ocaDcyM2/kQBwuBEfAEXAEHIEAgRgPj7MBnWvaEWjiYVcpoPpKYpidDzfKR+A2QBdpYZ/44sHX4ap2BBIcBXQgvsawQ9b3qARHAb3Wt53rDUnguux0D53E8SUyXApXrAhodhZzD40P4k8bjSNWbtwgj8B+wVQj8VueWTqaul4Lh33Br7Gu9BC4DMy1Hozk5ghQZ6CsQ6L8nxq8vLN11PbfYoAmP0BO7oei1Iu2UuRxts4WcT96mC/1w1S+SaBq0PmKg6BWIuk+OsVkQJZmsq5A1sDrS5BA8pIPdnALKES3AilDpiP6KH8oMtCKLmct2usRfVRbC8gOjq78DwK/AdEIfXolVh2OAAAAAElFTkSuQmCC" alt=""/>
                                                            </div>
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
