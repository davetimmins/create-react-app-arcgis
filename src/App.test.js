import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
