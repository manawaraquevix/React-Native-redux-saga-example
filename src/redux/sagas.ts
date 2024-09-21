import {all, fork} from 'redux-saga/effects';
import homeSaga from '../screens/home/saga';

function* rootSaga() {
  yield all([fork(homeSaga)]);
}

export default rootSaga;
