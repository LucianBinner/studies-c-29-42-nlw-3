import React from 'react';

import './styles/global.css';
import 'leaflet/dist/leaflet.css'

import Routes from './routes';
import { Provider } from './Providers';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
