import React from 'react';
import Header from './components/Header/Header';
import Board from './components/Header/WeatherBoard/Board';
import { WeatherProvider } from './contextProvider';

const App = () => {
  return (

    <WeatherProvider>
      <div className='grid place-items-center h-screen'>
        <Header />
        <main>
          <section>
            <Board />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
};

export default App;