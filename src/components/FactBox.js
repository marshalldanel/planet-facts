import React from 'react';
import styled from 'styled-components/macro';
import { mediaQueries } from '../styles/mediaQueries';

const StyledBox = styled.div`
  align-items: center;
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-flow: row nowrap;
  height: 4.8rem;
  justify-content: space-between;
  margin: 0.8rem 2.4rem;

  ${mediaQueries('tablet')`
    align-items: flex-start;
    flex-flow: column nowrap;
    height: 8.8rem;
    margin: 0 .6rem;
    width: 16.4rem;
  `}

  ${mediaQueries('desktop')`
    align-items: flex-start;
    height: 10.8rem;
    margin: 0 1.8rem;
    width: 20.9rem;
  `}

  ${mediaQueries('desktopLg')`
    align-items: flex-start;
    height: 12.8rem;
    margin: 0 1.5rem;
    width: 25.5rem;
  `}

  p {
    color: #fff;
    opacity: 0.5;
    font-family: Spartan;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.073rem;
    line-height: 1.6rem;
    padding-left: 2.4rem;
    text-transform: uppercase;

    ${mediaQueries('tablet')`
      padding: 1.6rem 0 0 1.5rem;
    `}

    ${mediaQueries('desktop')`
      font-size: .9rem;
      letter-spacing: .085rem;
      line-height: 2.5rem;
      padding: 1.8rem 0 0 1.9rem;
    `}

    ${mediaQueries('desktopLg')`
      font-size: 1rem;
      letter-spacing: .01rem;
      line-height: 2.5rem;
      padding: 2rem 0 0 2.3rem;
    `}
  }

  h2 {
    font-family: Antonio;
    font-size: 2rem;
    font-weight: normal;
    letter-spacing: -0.075rem;
    line-height: 2.6rem;
    padding-right: 2.4rem;
    text-transform: uppercase;

    ${mediaQueries('tablet')`
      padding: 0 0 1.9rem 1.5rem;
    `}

    ${mediaQueries('desktop')`
      font-size: 3rem;
      letter-spacing: -.15rem;
      line-height: 5.2rem;
      padding: 0 0 2.7rem 1.9rem;
    `}

    ${mediaQueries('desktopLg')`
      font-size: 4rem;
      letter-spacing: -.15rem;
      line-height: 5.2rem;
      padding: 0 0 2.7rem 2.3rem;
    `}
  }
`;

export default function FactBox({ title, content }) {
  return (
    <StyledBox>
      <p>{title}</p>
      <h2>{content}</h2>
    </StyledBox>
  );
}
