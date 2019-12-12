import React from 'react';
import { Provider } from 'react-redux';


import createStore from './store';
const store = createStore();


import Messages from './messages';

export default function App() {
  return (
    <Provider store={store}>
      <Messages />
    </Provider>
  );
}


