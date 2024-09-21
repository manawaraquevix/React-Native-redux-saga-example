import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {combinedReducers} from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
// const store = configureStore({reducer: , middleware: middlewares})
// const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: combinedReducers,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
