//aqui vão estar todas as informaçoes globais

import {createStore} from 'redux';
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer); // eu consigo escolher qual dado eu quero monitorar

export default store;