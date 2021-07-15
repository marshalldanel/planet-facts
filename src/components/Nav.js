import React from 'react';
import styled from 'styled-components';

const Circle = styled.span`
  background: ${(props) => props.theme[props.name.toLowerCase()]};
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right: 15px;
`;

const NavList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  list-style-type: none;
`;

const NavItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  &:nth-child(1) {
    border: none;
  }
  border-top: 1px grey solid;
`;

export default function Nav({ planets }) {
  return (
    <NavList>
      {planets.map((planet) => (
        <NavItem key={planet.name}>
          <Circle name={planet.name} />
          <p>{planet.name}</p>
        </NavItem>
      ))}
    </NavList>
  );
}
