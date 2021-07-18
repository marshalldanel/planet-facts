import React from 'react';
import { useLocation } from 'react-router-dom';
import PlanetFacts from './PlanetFacts';

export default function PlanetPage({ homePlanet }) {
  let { state } = useLocation();

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
  } = homePlanet ? homePlanet : state.planet;

  return (
    <div>
      <h3>ID: {name}</h3>
      <PlanetFacts
        radius={radius}
        revolution={revolution}
        rotation={rotation}
        temperature={temperature}
      />
    </div>
  );
}
