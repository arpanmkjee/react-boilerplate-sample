import { all } from 'redux-saga/effects';
import {
    flightSaga
  // import other watchers from this file
} from './flightSaga';
// import watchers from other files
export default function* rootSaga() {
  yield all([
    flightSaga()
    // add other watchers to the array
  ]);
}