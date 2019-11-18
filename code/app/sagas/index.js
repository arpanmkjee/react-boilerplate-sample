import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import { getSearchResult, getReview } from '../api/flights';
import { getSearchResultResponse, getReviewResponse } from '../../app/containers/App/actions'
import { REQUEST_API_DATA, GET_REVIEW } from '../../app/containers/App/constants'; 

function* getflightSearchResult(action) { 
    try {
        const data = yield call(getSearchResult);
        yield put(getSearchResultResponse(data))
    }
    catch (e) {
        console.log(e);
    }
}

function* getflightReview() {
    debugger;
    try {
        const data = yield call(getReview);
        yield put(getReviewResponse(data))
    }
    catch (e) {
        console.log(e);
    }
}
 
function* sagaWatcher() {
    yield takeEvery(REQUEST_API_DATA, getflightSearchResult)
    //yield takeEvery(REQUEST_API_DATA, getflightReview)
  }

export default function* rootSaga() { 
    yield all([
        sagaWatcher()
      ])  
}