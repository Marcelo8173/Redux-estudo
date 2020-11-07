//aqui vão estar todas as informaçoes globais
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './modules/rootReducer';
import { ICartState } from './modules/cart/types';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';

export interface Istate{
    cart: ICartState,
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(rootReducer,applyMiddleware(...middleware)); // eu consigo escolher qual dado eu quero monitorar
sagaMiddleware.run(rootSaga);

export default store;