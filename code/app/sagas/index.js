import { call,put, takeLatest,takeEvery, all } from 'redux-saga/effects';
import { getSearchResult,getFlightReview } from '../api/flights';
import { receiveApiData  } from '../../app/containers/App/actions'
import { REQUEST_API_DATA } from '../../app/containers/App/constants';
 
function* getApiData(action) {debugger;
    try {
        const data = yield call(getSearchResult);
        yield put(receiveApiData(data)) 
    }
    catch (e) {
       console.log(e);
    }
}

function* getReviewData(action) {debugger;
    try {
        const review = yield call(getFlightReview);
        yield put(receiveApiData(review)) 
    }
    catch (e) {
       console.log(e);
    }
}

export default function* rootSaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
    yield takeLatest(REQUEST_API_DATA, getReviewData)
}