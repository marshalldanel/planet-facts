import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { mediaQueries } from '../styles/mediaQueries';

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 2.8rem 2.4rem;

  ${mediaQueries('tablet')`
    align-items: flex-start;
    margin: 0;
  `};
`;

const StyledInfo = styled.p`
  font-size: 1.1rem;
  line-height: 2.2rem;
  text-align: center;
  margin: 1.6rem 0 3.2rem 0;

  ${mediaQueries('tablet')`
    margin: 2.4rem 0 3.2rem 0;
    text-align: left;
  `};
`;

const StyledLink = styled.a`
  font-size: 1.2rem;
  line-height: 2.5rem;
  font-family: Spartan;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
`;

const StyledFaIcon = styled(FaExternalLinkAlt)`
  margin-left: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
`;

export default function Description({ name, info }) {
  return (
    <StyledContainer>
      <h2>{name}</h2>
      <StyledInfo>{info.content}</StyledInfo>
      <StyledLink href={info.source}>
        Source: <u>Wikipedia</u>
        <StyledFaIcon />
      </StyledLink>
    </StyledContainer>
  );
}
