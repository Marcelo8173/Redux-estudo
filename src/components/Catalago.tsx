import React from 'react';
import { useSelector } from 'react-redux';

const Catalago = () => {

    const catalogo = useSelector(state => state);
    // const store = useStore();

    // console.log(store.getState()); //pegando os estados

    return(
        <h1>Catalago</h1>
    )
}

export default Catalago;