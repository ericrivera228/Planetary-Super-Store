import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlanetStore from './PlanetStore';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <PlanetStore />
  </React.StrictMode>,
  document.getElementById('root')
);