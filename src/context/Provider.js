import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const state = {
    redCar: false,
    blue: false,
    yellow: false,
  };

  const [colorCar, setColorCar ] = useState(state);
  const [signal, setSignal] = useState({ color: 'red' });

  const moveCar = (car, side) => {
    setColorCar({ [car]: side})
  };

  const changeSignal = (signalColor) => {
    setSignal({ color: signalColor })
  };
  return (
    <CarsContext.Provider value={ { colorCar, signal, moveCar, changeSignal }}>
      {children}
    </CarsContext.Provider>
  );
};
export default Provider;
