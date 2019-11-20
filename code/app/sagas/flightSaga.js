import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import { getSearchResult, getReview ,getAncillary} from '../api/flights';
import { updateSearchResult, updateReviewResult, updateAncillaryResult } from '../../app/containers/App/actions'
import {  GET_REVIEW, GET_SEARCH ,GET_ANCILLARY } from '../../app/containers/App/constants'; 

/** saga worker that is responsible for the side effects */
function* searchResultEffectSaga(action) {
    try {
      // data is obtained after axios call is resolved
      let { data } = yield call(getSearchResult, action.payload);
      
      // store data to localStorage 
        localStorage.setItem('SearchResult', JSON.stringify(data)); 
      // dispatch action to change redux state
      yield put(updateSearchResult(data)); 
      action.resolve();

    } catch (e) {
        action.reject(e);
      // catch error on a bad axios call
      // alert using an alert library
    }
  }

  function* reviewEffectSaga(action) {
    try {
      // data is obtained after axios call is resolved
      let { data } = yield call(getReview, action.payload);
      
      // store data to localStorage
      localStorage.setItem('ReviewResult', JSON.stringify(data)); 
      // dispatch action to change redux state
      yield put(updateReviewResult(data)); 

      action.resolve();

    } catch (e) {
        action.reject(e);
      // catch error on a bad axios call
      // alert using an alert library
    }
  }
  function* ancillaryResultEffectSaga(action) {
    try {
      // data is obtained after axios call is resolved
      let { data } = yield call(getAncillary, action.payload);
      
      // store data to localStorage 
        localStorage.setItem('AncillaryResult', JSON.stringify(data)); 
      // dispatch action to change redux state
      yield put(updateAncillaryResult(data)); 
      action.resolve();

    } catch (e) {
        action.reject(e);
      // catch error on a bad axios call
      // alert using an alert library
    }
  }

export function* searchResultEffectSagaAsync(){
    yield takeLatest(GET_SEARCH, searchResultEffectSaga);
}

export function* reviewEffectSagaAsync(){
    yield takeLatest(GET_REVIEW, reviewEffectSaga);
}
export function* ancillaryResultEffectSagaAsync(){
  yield takeLatest(GET_ANCILLARY, ancillaryResultEffectSaga);
}
  /**
   * saga watcher that is triggered when dispatching action of type
   * 'LOGIN_WATCHER'
   */
  export function* flightSaga() {
    yield all([
        call(searchResultEffectSagaAsync),
        call(reviewEffectSagaAsync),
        call(ancillaryResultEffectSagaAsync)
    ])
  }