import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const TextLogo = styled.div`
  font-family: Antonio;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  margin: 22px 0 0 32px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    margin: 37px 0 34px 0;
  }

  @media (min-width: 1024px) {
    margin: 0 0 0 32px;
  }
`;

const NavStyles = styled.nav`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  height: 85px;
  top: 0;
  width: 100%;

  @media (min-width: 768px) {
    align-items: center;
    flex-flow: column nowrap;
    height: 159px;
  }

  @media (min-width: 1024px) {
    flex-flow: row nowrap;
    height: 85px;
    justify-content: space-between;
  }
`;

export default function NavBar({ planets }) {
  return (
    <NavStyles>
      <TextLogo>The Planets</TextLogo>
      <Burger planets={planets} />
    </NavStyles>
  );
}
