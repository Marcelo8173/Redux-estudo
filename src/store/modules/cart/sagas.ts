import {all, takeLatest, select} from 'redux-saga/effects';
import api from '../../../services/api';
import { addNewProduct } from './actions';
import { Istate } from '../..';

type checkProductStockRequest = ReturnType<typeof addNewProduct>;
//generator functions
function* checkProduct({payload}:checkProductStockRequest){
    const {product} = payload;

    const currentQuantity:number = yield select((state:Istate) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
    });

    console.log(currentQuantity)
}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART', checkProduct)
]);