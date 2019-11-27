import * as React from 'react';

const allCities=[
    {City:"Mumbai, India",Airport:"Chatrapati Shivaji International Airport",cityCode:"BOM"},
    {City:"Delhi, India",Airport:"Delhi Airport",cityCode:"DEL"},
    {City:"Bangkok, Thailand",Airport:" Suvarnabhumi Airport",cityCode:"BKK"},
    {City:"Bangalore, India",Airport:"Bengaluru International Airport",cityCode:"BLR"},
    {City:"Pune, India",Airport:"Pune International Airport",cityCode:"PNQ"},
    {City:"Hyderabad, India",Airport:"Rajiv Ghandhi International Airport",cityCode:"HYD"},
    {City:"Kolkata, India",Airport:"Netaji Subhash Chandra Bose International Airport",cityCode:"CCU"},
    {City:"Chennai, India",Airport:"Madras,Chennai International Airport",cityCode:"MAA"},
    {City:"Goa, India",Airport:"Dabolim Goa International Airport",cityCode:"DOI"},
    {City:"Mumbai, India",Airport:"Chatrapati Shivaji International Airport",cityCode:"BOM"},
    {City:"Delhi, India",Airport:"Delhi Airport",cityCode:"DEL"},
    {City:"Bangkok, Thailand",Airport:" Suvarnabhumi Airport",cityCode:"BKK"},
    {City:"Bangalore, India",Airport:"Bengaluru International Airport",cityCode:"BLR"}
]
export default class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cities:allCities
        }
    }

    render() {
        return (
            <div>                                  
                <div class="hsw_autocomplePopup autoSuggestPlugin">
                    <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="true"
                        class="react-autosuggest__container react-autosuggest__container--open"><input type="text"
                            autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1"
                            class="react-autosuggest__input react-autosuggest__input--open" placeholder={this.props.placeholder} value="" />
                        <div id="react-autowhatever-1" role="listbox"
                            class="react-autosuggest__suggestions-container react-autosuggest__suggestions-container--open">
                            <div class="react-autosuggest__section-container react-autosuggest__section-container--first">
                                <div class="react-autosuggest__section-title">
                                    <p class="hsw_sectionTitle font12 latoBlack greyText">POPULAR CITIES</p>
                                </div>
                                <ul role="listbox" class="react-autosuggest__suggestions-list">
                                {this.state.cities.map(city=>
                                    <li role="option" id="react-autowhatever-1-section-0-item-0" aria-selected="false"
                                        class="react-autosuggest__suggestion react-autosuggest__suggestion--first"
                                        data-section-index="0" data-suggestion-index="0">
                                        <div class="makeFlex hrtlCenter">
                                            <div class="calc60">
                                                <p class="font14 appendBottom5 blackText">{city.City}</p>
                                                <p class="font12 greyText appendBottom3">{city.Airport}</p>
                                            </div>
                                            <div class="pushRight font14 lightGreyText latoBold">{city.cityCode}</div>
                                        </div>
                                    </li>
                                )}                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}