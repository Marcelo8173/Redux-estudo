import { IProduct } from "./types";

export function addNewProduct(product: IProduct){
    return{
        type: 'ADD_PRODUCT_TO_CART',
        payload: {
            product
        }
    }
}