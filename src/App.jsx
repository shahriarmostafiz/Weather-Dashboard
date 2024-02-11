import React from 'react';
import Header from './components/Header/Header';
import Board from './components/Header/WeatherBoard/Board';
import { FavouriteProvider, LocationProvider, WeatherProvider } from './contextProvider';
import Page from './Page';

const App = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>

          <Page />
        </FavouriteProvider>

      </WeatherProvider>
    </LocationProvider>
  );
};

export default App;