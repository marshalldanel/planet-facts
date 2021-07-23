import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { mediaQueries } from '../styles/mediaQueries';
import SvgIcon from './SvgIcon';
import Description from './Description';
import PlanetFacts from './PlanetFacts';
import Button from './Button';

const StyledGrid = styled.div`
  ${mediaQueries('tablet')`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 45rem 25rem;
    grid-template-areas:
    "svg svg"
    "description buttons";
    margin: 0 4rem 3.6rem 4rem;
  `};

  ${mediaQueries('desktop')`
    margin: 5rem 16.5rem 0 16.5rem;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    grid-template-areas:
    "svg description"
    "svg buttons";
  `};
`;

const StyledButtons = styled.div`
  display: flex;
  flex-flow: row;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);

  ${mediaQueries('tablet')`
    align-self: center;
    border-bottom: none;
    flex-flow: column;
    grid-area: buttons;
    height: 15.2rem;
    justify-self: right;
    width: 28rem;
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
    <>
      <StyledGrid>
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
        <SvgIcon view={currentView} planet={planet.name.toLowerCase()} />
        <Description name={name} info={info} />
      </StyledGrid>
      <PlanetFacts
        radius={radius}
        revolution={revolution}
        rotation={rotation}
        temperature={temperature}
      />
    </>
  );
}
