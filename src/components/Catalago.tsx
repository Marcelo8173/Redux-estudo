import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IProduct } from '../store/modules/cart/types';
import api from '../services/api';
import { addNewProduct } from '../store/modules/cart/actions';

const Catalago = () => {    
    const dispatch = useDispatch();
    const [catalog, setCatalog] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('products').then(response => {
            setCatalog(response.data);
        })
    },[]);

    const handleAddToCart = useCallback((produto: IProduct) => {
        dispatch(addNewProduct(produto));
    },[dispatch]);

    // const catalogo = useSelector(state => state);
    // const store = useStore();

    // console.log(store.getState()); //pegando os estados

    return(
        <>
            <h1>Catalago</h1>
            <div>
                {catalog.map(produto => (
                    <article key={produto.id}>
                        <strong>{produto.title}: </strong>
                        <span>R${produto.price} </span>
                        <button onClick={() =>handleAddToCart(produto)}>Comprar</button>
                    </article>
                ))}
            </div>
        </>
    )
}

export default Catalago;