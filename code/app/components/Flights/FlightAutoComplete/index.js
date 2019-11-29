import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Autocomplete extends Component {
    static propTypes = { suggestions: PropTypes.instanceOf(Array).isRequired };
    state = {
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: ''
    }

    onChange = (e) => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;
        const filteredSuggestions = suggestions.filter(
            (suggestion) =>
                suggestion.City.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = (e) => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    };
    
    onKeyDown = (e) => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        } else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }
            this.setState({ activeSuggestion: activeSuggestion - 1 });
        } else if (e.keyCode === 40) {
            if (activeSuggestion === filteredSuggestions.length - 1) {
                console.log(activeSuggestion);
                return;
            }
            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;
        let suggestionsListComponent;
        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul class="suggestions">
                        <p class="hsw_sectionTitle font12 latoBlack greyText">SUGGESTIONS</p>
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;
                            if (index === activeSuggestion) {
                                className = 'option-active';
                            }
                            return (
                                
                                            <ul role="listbox" class="react-autosuggest__suggestions-list" key={suggestion.id} onClick={onClick}>
                                                <li class="react-autosuggest__suggestion react-autosuggest__suggestion--first">                                                                                                    
                                                    <div class="makeFlex hrtlCenter">
                                                        <div class="calc60">
                                                            <p class="font14 appendBottom5 blackText">{suggestion.City}</p>
                                                            <p class="font12 greyText appendBottom3">{suggestion.Airport}</p>
                                                        </div>
                                                        <div class="pushRight font14 lightGreyText latoBold">{suggestion.cityCode}</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div class="no-suggestions">
                        <em>No suggestions!</em>
                    </div>
                );
            }
        }
        return (
            <React.Fragment>
                <input
                class="react-autosuggest__input react-autosuggest__input--open"
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                    placeholder={this.props.placeholder}
                />
                {suggestionsListComponent}
            </React.Fragment>
        );
    };
}
export default Autocomplete;