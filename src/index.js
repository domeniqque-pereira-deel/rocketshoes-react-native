import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import Routes from './routes';

import './config/ReactotronConfig';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      <Routes />
    </Provider>
  );
}
