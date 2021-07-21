import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { mediaQueries } from '../styles/mediaQueries';
import Description from './Description';
import PlanetFacts from './PlanetFacts';
import Button from './Button';

const StyledButtons = styled.div`
  display: flex;
  flex-flow: row;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);

  ${mediaQueries('tablet')`
    border-bottom: none;
    display: flex;
    flex-flow: column;
  `};
`;

export default function PlanetPage({ homePlanet }) {
  let { state } = useLocation();

  const [currentView, setCurrentView] = useState('overview');

  const views = [
    { displayName: '01 Overview', viewName: 'overview' },
    { displayName: '02 Internal Structure', viewName: 'structure' },
    { displayName: '03 Surface Geology', viewName: 'geology' },
  ];

  const planet = homePlanet ? homePlanet : state.planet;

  const { name, radius, revolution, rotation, temperature } = planet;

  const info = Object.keys(planet)
    .filter((key) => key === currentView)
    .reduce((obj, key) => {
      obj[key] = planet[key];
      return obj[key];
    }, {});

  return (
    <div>
      <StyledButtons>
        {views.map((view) => (
          <Button
            key={view.viewName}
            currentView={currentView}
            view={view}
            setCurrentView={setCurrentView}
            name={planet.name}
          ></Button>
        ))}
      </StyledButtons>
      <Description name={name} info={info} />
      <PlanetFacts
        radius={radius}
        revolution={revolution}
        rotation={rotation}
        temperature={temperature}
      />
    </div>
  );
}
