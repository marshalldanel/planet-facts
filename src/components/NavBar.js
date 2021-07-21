import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { mediaQueries } from '../styles/mediaQueries';

import Burger from './Burger';

const TextLogo = styled.div`
  font-family: Antonio;
  font-size: 2.8rem;
  line-height: 3.6rem;
  letter-spacing: -0.105rem;
  margin: 2.2rem 0 0 3.2rem;
  text-transform: uppercase;

  ${mediaQueries('tablet')`
    margin: 3.7rem 0 3.4rem 0;
  `}

  ${mediaQueries('desktop')`
    margin: 0 0 0 3.2rem;
  `}
`;

const NavStyles = styled.nav`
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
  display: flex;
  height: 8.5rem;
  top: 0;
  position: sticky;
  background-color: hsl(240, 67%, 8%);
  z-index: 1;
  width: 100vw;

  ${mediaQueries('tablet')`
    align-items: center;
    flex-flow: column nowrap;
    height: 15.9rem;
  `}

  ${mediaQueries('desktop')`
    flex-flow: row nowrap;
    height: 8.5rem;
    justify-content: space-between;
  `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function NavBar({ planets }) {
  return (
    <NavStyles>
      <StyledLink
        to={{
          pathname: `/earth`,
          state: { planet: planets.find((planet) => planet.name === 'Earth') },
        }}
      >
        <TextLogo>The Planets</TextLogo>
      </StyledLink>
      <Burger planets={planets} />
    </NavStyles>
  );
}
