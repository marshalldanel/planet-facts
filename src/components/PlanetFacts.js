import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';

import FactBox from './FactBox';

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-items: space-evenly;

  ${mediaQueries('tablet')`
    flex-flow: row nowrap;
    justify-content: center;
  `}
`;

export default function PlanetFacts({
  radius,
  revolution,
  rotation,
  temperature,
}) {
  return (
    <StyledContainer>
      <FactBox title={'Rotation Time'} content={rotation} />
      <FactBox title={'Revolution Time'} content={revolution} />
      <FactBox title={'Radius'} content={radius} />
      <FactBox title={'Average Temperature'} content={temperature} />
    </StyledContainer>
  );
}
