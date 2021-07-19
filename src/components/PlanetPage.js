import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Planet from './Planet';
import Button from './Button';

const StyledButtons = styled.div`
  display: flex;
  flex-flow: row;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
`;

export default function PlanetPage({ homePlanet }) {
  let { state } = useLocation();

  const planet = homePlanet ? homePlanet : state.planet;

  const views = ['geology', 'overview', 'structure'];

  const [currentView, setCurrentView] = useState('overview');

  return (
    <div>
      <StyledButtons>
        {views.map((view) => (
          <Button
            key={view}
            currentView={currentView}
            view={view}
            setCurrentView={setCurrentView}
            name={planet.name}
          ></Button>
        ))}
      </StyledButtons>
      <Planet planet={planet} currentView={currentView} />
    </div>
  );
}
