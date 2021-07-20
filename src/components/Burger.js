import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import NavMenu from './NavMenu';
import { mediaQueries } from '../styles/mediaQueries';

const BurgerStyles = styled.div`
  display: none;
  height: 2rem;
  position: fixed;
  right: 3.2rem;
  top: 2.2rem;
  width: 2rem;
  z-index: 2;

  ${mediaQueries('mobile', 'max')`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  `}

  div {
    background-color: ${({ visible }) =>
      visible ? 'hsl(240, 17%, 26%)' : '#FFF'};
    height: 0.25rem;
    transform-origin: 0.1rem;
    transition: all 0.3s linear;
    width: 2rem;
    height: 0.3rem;
  }
`;

export default function Burger({ planets }) {
  const [visible, setVisible] = useState(false);

  // No scroll when mobile nav open
  useEffect(() => {
    visible && (document.body.style.overflow = 'hidden');
    !visible && (document.body.style.overflow = 'unset');
  }, [visible]);

  return (
    <>
      <BurgerStyles visible={visible} onClick={() => setVisible(!visible)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerStyles>
      <NavMenu planets={planets} visible={visible} setVisible={setVisible} />
    </>
  );
}
