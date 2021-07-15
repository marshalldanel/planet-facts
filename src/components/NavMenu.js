import React from 'react';
import styled from 'styled-components';

const Circle = styled.span`
  background: ${(props) => props.theme[props.name.toLowerCase()]};
  border-radius: 50%;
  height: 20px;
  margin-right: 15px;
  width: 20px;

  // Restrict to mobile
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 60vw;

  // Mobile Nav
  @media (max-width: 767px) {
    background-color: hsl(240, 67%, 8%);
    flex-flow: column nowrap;
    height: 100vh;
    justify-content: flex-start;
    position: fixed;
    padding: 44px 24px;
    top: 86px;
    transform: ${({ visible }) =>
      visible ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    width: 100vw;
    -webkit-overflow-scrolling: touch;
  }

  @media (min-width: 768px) {
    padding-bottom: 27px;
    width: 100vw;
  }

  @media (min-width: 1024px) {
    padding: 0;
    width: 50vw;
  }
`;

const NavItem = styled.li`
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-flow: row nowrap;
  height: 66px;

  &:nth-child(1) {
    border: none;
  }
  @media (min-width: 768px) {
    border: none;
    height: 25px;
  }
`;

const NavName = styled.h4`
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;

  // Change default h4 sizing for mobile
  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 1.3px;
    padding-top: 5px;
  }
`;

const Arrow = styled.span`
  border: solid rgba(255, 255, 255, 0.2);
  border-width: 0 1px 1px 0;
  display: inline-block;
  margin-left: auto;
  padding: 2px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

  // Restrict to mobile
  @media (min-width: 768px) {
    border: none;
  }
`;

export default function Nav({ planets, visible, setVisible }) {
  return (
    <NavList visible={visible}>
      {planets.map((planet) => (
        <NavItem key={planet.name}>
          <Circle name={planet.name} />
          <NavName>{planet.name}</NavName>
          <Arrow />
        </NavItem>
      ))}
    </NavList>
  );
}
