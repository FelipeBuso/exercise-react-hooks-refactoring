// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const state = {
    redCar: false,
    blueCar: false,
    yellowCar: false,
  };

  const [colorCar, setColorCar ] = useState(state);

  const moveCar = (car, side) => {
    setColorCar({ [car]: side });
  };

  return (
    <CarsContext.Provider value={ { colorCar, moveCar} }>
      {children}
    </CarsContext.Provider>
  );


};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
