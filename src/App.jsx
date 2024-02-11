import React from 'react';
import Header from './components/Header/Header';
import Board from './components/Header/WeatherBoard/Board';

const App = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <Header />
      <main>
        <section>

          <Board />
        </section>

      </main>
    </div>
  );
};

export default App;