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
                        <p>SUGGESTIONS</p>
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;
                            if (index === activeSuggestion) {
                                className = 'option-active';
                            }
                            return (
                                <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="true"
                                    class="react-autosuggest__container react-autosuggest__container--open">
                                    <div id="react-autowhatever-1" role="listbox" className={className} key={suggestion.id} onClick={onClick}
                                        class="react-autosuggest__suggestions-container react-autosuggest__suggestions-container--open">
                                        <div class="react-autosuggest__section-container react-autosuggest__section-container--first">
                                            <ul role="listbox" class="react-autosuggest__suggestions-list">
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
                                        </div>
                                    </div>
                                </div>
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
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                {suggestionsListComponent}
            </React.Fragment>
        );
    };
}
export default Autocomplete;