import { call,put, takeLatest,takeEvery, all } from 'redux-saga/effects';
import { getCities, getSearchResult } from '../api/flights';
import { receiveApiData } from '../../app/containers/App/actions'
import { REQUEST_API_DATA } from '../../app/containers/App/constants';

function* CitiesWatcher() {
    yield takeLatest('GET_CITIES', getCities)
}

function* SearchResultWatcher() {
    yield takeLatest('GET_SEARCH', getSearchResult)
}

function* getApiData(action) {debugger;
    try {
        const data = yield call(getSearchResult);
        yield put(receiveApiData(data)) 
    }
    catch (e) {
       console.log(e);
    }
}

export default function* rootSaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData)
}