import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { mediaQueries } from '../styles/mediaQueries';

const Circle = styled.span`
  background: ${(props) => props.theme[props.name.toLowerCase()]};
  border-radius: 50%;
  height: 2rem;
  margin-right: 1.5rem;
  width: 2rem;

  // Restrict to mobile
  ${mediaQueries('tablet')`
    display: none;
  `}
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
  ${mediaQueries('mobile', 'max')`
    background-color: hsl(240, 67%, 8%);
    flex-flow: column nowrap;
    height: 100vh;
    justify-content: flex-start;
    position: fixed;
    padding: 4.4rem 2.4rem;
    top: 8.5rem;
    width: 100vw;
    transition: transform 0.4s ease-in-out;
    z-index: 100;
  `}

  // Can't pass props for conditional inside media query func 🙃
  ${(props) =>
    props.visible
      ? mediaQueries('mobile', 'max')`transform: translateX(0);
    `
      : mediaQueries('mobile', 'max')`transform: translateX(100%);
    `}
  
  ${mediaQueries('tablet')`
    padding-bottom: 2.7rem;
    width: 100vw;
  `}

  ${mediaQueries('desktop')`
    padding: 0;
    width: 50vw;
    height: 100%;
  `};
`;

// ALL THIS FOR THE HOVER BORDER
const damnDesktopBorderColor = (theme, name) => {
  const color = theme[name];
  return css`
    @media (min-width: 64rem) {
      &:hover {
        border-top: 0.4rem solid ${color};
      }
    }
  `;
};

const NavItem = styled.li`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 6.6rem;

  ${(props) => damnDesktopBorderColor(props.theme, props.name)}

  ${(props) =>
    props.name === 'mercury'
      ? css`
          border-top: none;
        `
      : mediaQueries(
          'mobile',
          'max'
        )`border-top: 0.1rem solid rgba(255, 255, 255, 0.2);`}

  ${mediaQueries('tablet', 'min')`
    border: none;
    height: 2.5rem;
  `}

  ${(props) =>
    props.name === 'neptune' &&
    mediaQueries('desktop')(
      css`
        margin-right: 2rem;
      `
    )}

  ${mediaQueries('desktop')`
    border-top: 0.4rem solid transparent;
    height: 8.5rem;
    padding-top: .6rem;
  `}
`;

const NavName = styled.h4`
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;

  // Change default h4 sizing for mobile
  ${mediaQueries('mobile', 'max')`
    font-size: 1.5rem;
    line-height: 2.5rem;
    letter-spacing: 0.13rem;
    padding-top: 0.5rem;
  `}
`;

const Arrow = styled.span`
  border: solid rgba(255, 255, 255, 0.2);
  border-width: 0 0.1rem 0.1rem 0;
  display: inline-block;
  margin-left: auto;
  padding: 0.2rem;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

  // Restrict to mobile
  ${mediaQueries('tablet')`
    border: none;
  `}
`;

// Don't need NavLink and location/activeClassName but leaving in for now
const StyledLink = styled(NavLink)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link {
    text-decoration: none;
  }
`;

export default function Nav({ planets, visible, setVisible }) {
  let { pathname } = useLocation();
  const splitLocation = pathname.split('/');
  const active = splitLocation[1];

  return (
    <NavList visible={visible}>
      {planets.map((planet) => (
        <StyledLink
          to={{
            pathname: `/${planet.name.toLowerCase()}`,
            state: { planet },
          }}
          key={planet.name}
          onClick={() => setVisible(!visible)}
          activeClassName="active"
        >
          <NavItem active={active} name={planet.name.toLowerCase()}>
            <Circle name={planet.name} />
            <NavName>{planet.name}</NavName>
            <Arrow />
          </NavItem>
        </StyledLink>
      ))}
    </NavList>
  );
}
