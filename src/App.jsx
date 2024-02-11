import React from 'react';
import Header from './components/Header/Header';
import Board from './components/Header/WeatherBoard/Board';
import { FavouriteProvider, LocationProvider, WeatherProvider } from './contextProvider';

const App = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>

          <div className='grid place-items-center h-screen'>
            <Header />
            <main>
              <section>
                <Board />
              </section>
            </main>
          </div>
        </FavouriteProvider>

      </WeatherProvider>
    </LocationProvider>
  );
};

export default App;