import { RECEIVE_API_DATA, UPDATE_REVIEW, UPDATE_SEARCH ,UPDATE_ANCILLARY} from '../constants';

const flightState = {
    searchResult: JSON.parse(localStorage.getItem('SearchResult')),
    reviewResult: JSON.parse(localStorage.getItem('ReviewResult')),
    ancillaryResult:JSON.parse(localStorage.getItem('AncillaryResult'))
};

export default function (state = flightState, action) { 
    switch (action.type) {
        case UPDATE_SEARCH:
            return {
                ...state,
                searchResult: action.payload
            }
        case UPDATE_REVIEW:
            return {
                ...state,
                reviewResult: action.payload
            }
        case UPDATE_ANCILLARY:
            return {
                ...state,
                ancillaryResult: action.payload
            }
        default:
            return state;
    }
}