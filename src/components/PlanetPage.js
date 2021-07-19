import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Planet from './Planet';
import Button from './Button';

export default function PlanetPage({ homePlanet }) {
  let { state } = useLocation();

  const planet = homePlanet ? homePlanet : state.planet;

  const views = ['geology', 'overview', 'structure'];

  const [currentView, setCurrentView] = useState('overview');

  return (
    <div>
      {views.map((view) => (
        <Button key={view} view={view} setCurrentView={setCurrentView}></Button>
      ))}
      <Planet planet={planet} currentView={currentView} />
    </div>
  );
}
