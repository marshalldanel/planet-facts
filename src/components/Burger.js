import React, { useState } from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';

const BurgerStyles = styled.div`
  display: none;
  height: 2rem;
  position: fixed;
  right: 32px;
  top: 22px;
  width: 2rem;
  z-index: 20;

  @media (max-width: 767px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  div {
    background-color: ${({ visible }) =>
      visible ? 'hsl(240, 17%, 26%)' : '#FFF'};
    height: 0.25rem;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;
    height: 3px;
  }
`;

export default function Burger({ planets }) {
  const [visible, setVisible] = useState(false);

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
