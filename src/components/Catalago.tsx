import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IProduct } from '../store/modules/cart/types';
import api from '../services/api';
import { response } from 'express';

const Catalago = () => {    
    const [catalog, setCatalog] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('products').then(response => {
            setCatalog(response.data);
        })
    },[])

    // const catalogo = useSelector(state => state);
    // const store = useStore();

    // console.log(store.getState()); //pegando os estados

    return(
        <>
            <h1>Catalago</h1>
            <div>
                {catalog.map(item => (
                    <article key={item.id}>
                        <strong>{item.title}: </strong>
                        <span>{item.price} </span>
                        <button>Comprar</button>
                    </article>
                ))}
            </div>
        </>
    )
}

export default Catalago;