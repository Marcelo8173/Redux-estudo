import React from 'react';
import { Provider } from 'react-redux';
import Catalago from './components/Catalago';
import store from './store';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <Catalago />
      <Cart />
    </Provider>
  );
}

export default App;
