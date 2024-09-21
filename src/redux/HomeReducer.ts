// import * as types from './Types';
// import { IAction } from  '../../interfaces/store';

import {
  INCREASE_REQUEST,
  INCREASE_REQUEST_FAILED,
  INCREASE_REQUEST_SUCCESS,
} from './Types';

interface IState {
  loading: boolean;
  number: number;
}
export interface IAction {
  type: string;
  payload?: any;
}

const initialState: IState = {
  loading: false,
  number: 0,
};

const homeReducer = (state = initialState, action: IAction) => {
  console.log('inside reducer action', action);
  switch (action.type) {
    case INCREASE_REQUEST: {
      return {...state, loading: true};
    }
    case INCREASE_REQUEST_SUCCESS: {
      return {...state, number: action.payload + 1, loading: false};
    }
    case INCREASE_REQUEST_FAILED: {
      return {...state, loading: false};
    }
    default: {
      return state;
    }
  }
};

export default homeReducer;
