import React from 'react';
import styled, { css } from 'styled-components/macro';
import { useViewport } from '../utils';
import { mediaQueries } from '../styles/mediaQueries';

const StyledButton = styled.button`
  height: 5rem;
  flex-grow: 1;
  border: none;
  background: none;
  color: #fff;
  text-transform: uppercase;
  line-height: 1rem;
  font-size: 0.9rem;
  letter-spacing: 0.193rem;
  font-family: Antonio;
  font-weight: 700;
  position: relative;
  cursor: pointer;

  ${(props) =>
    props.view.viewName === props.currentView &&
    `
        :after {
          content: "";
          background: ${props.theme[props.name.toLowerCase()]};
          position: absolute;
          bottom: 0;
          left: 25%;
          height: .4rem;
          width: 50%;
        };`}

  ${mediaQueries('tablet')`
      border: 0.1rem solid rgba(255, 255, 255, 0.2);
      height: 4rem;
      text-align: left;
      padding-left: 2rem;
      margin-bottom: 1.6rem;
      line-height: 2.5rem;
      letter-spacing: .26rem;
      :after {
        content: none;
      }
  `};

  ${mediaQueries('desktop')`
      font-size: 1.2rem;
  `};

  ${mediaQueries('desktopLg')`
      height: 4.8rem;
  `};

  // Button styles for tablet/desktop, can't pass into func
  // TODO: Update mediaQueries func to accept props?
  ${(props) =>
    props.view.viewName === props.currentView
      ? css`
          @media (min-width: 48rem) {
            background-color: ${props.theme[props.name.toLowerCase()]};
          }
        `
      : css`
          @media (min-width: 48rem) {
            &:hover {
              background-color: rgba(216, 216, 216, 0.2);
            }
          }
        `}
`;

export default function Button({ view, setCurrentView, currentView, name }) {
  const { width } = useViewport();

  return (
    <StyledButton
      name={name}
      onClick={() => setCurrentView(view.viewName)}
      view={view}
      currentView={currentView}
    >
      {width < 768 ? <>{view.viewName}</> : <>{view.displayName}</>}
    </StyledButton>
  );
}
