/* eslint-disable prettier/prettier */
import React from 'react';
import Nav from './src/navigation';
import {Loader} from './src/components';
import {StoreProvider} from './src/context/store';

const App = () => (
  <StoreProvider>
    <Nav />
    <Loader />
  </StoreProvider>
);

export default App;
