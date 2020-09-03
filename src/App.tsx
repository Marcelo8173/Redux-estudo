import React from 'react';
import { Provider } from 'react-redux';
import Catalago from './components/Catalago';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Catalago />
    </Provider>
  );
}

export default App;
