import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'your_mapbox_token';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

function App() {
  const getLayers = (id: string) => [
    new LineLayer({id: 'line-layer', data})
  ];

  return (
    <>
      <h1>learn react</h1>
      {/* Without children */}
      <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={getLayers('1')} />

      {/* With single child */}
      <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={getLayers('2')}>
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>

      {/* With multiple children */}
      <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={getLayers('3')}>
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        <div>Lorem ipsum</div>
      </DeckGL>
    </>
  );
}

export default App