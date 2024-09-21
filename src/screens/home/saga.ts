import {delay, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../../redux/actions';
import {INCREASE_REQUEST} from '../../redux/Types';

function* increase({payload}: ReturnType<typeof actions.increaseRequest>) {
  try {
    console.log('inside increase', payload);
    yield delay(2000);
    console.log('inside increase ');
    yield put(actions.increaseSuccess(payload));
  } catch (e) {
    yield put(actions.increaseFailed());
  }
}

export default function* homeSaga() {
  console.log('inside homeSaga');
  yield takeLatest(INCREASE_REQUEST, increase);
}
