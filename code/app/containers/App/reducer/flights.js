import { RECEIVE_API_DATA,GET_SEARCH,GET_REVIEW } from '../constants';

// The initial state of the App
export const initialState = {
};

export default (state = initialState, { type, data }) => {
    switch (type) { 
        case GET_SEARCH:
            return data;
        case GET_REVIEW:
            return data; 
        default:
            return state;
    }
}