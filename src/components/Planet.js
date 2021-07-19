import React from 'react';
import Description from './Description';
import PlanetFacts from './PlanetFacts';

export default function View({ planet, currentView }) {
  const {
    geology,
    images,
    name,
    overview,
    radius,
    revolution,
    rotation,
    structure,
    temperature,
  } = planet;

  const info = Object.keys(planet)
    .filter((key) => key === currentView)
    .reduce((obj, key) => {
      obj[key] = planet[key];
      return obj[key];
    }, {});

  return (
    <>
      <Description name={name} info={info} />
      <PlanetFacts
        radius={radius}
        revolution={revolution}
        rotation={rotation}
        temperature={temperature}
      />
    </>
  );
}
