import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PlanetPage({ homePlanet }) {
  let { state } = useLocation();

  const planet = homePlanet ? homePlanet : state.planet;

  return (
    <div>
      <h3>ID: {planet.name}</h3>
    </div>
  );
}
