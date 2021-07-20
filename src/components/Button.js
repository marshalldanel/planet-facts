import React from 'react';
import styled from 'styled-components/macro';

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

  ${(props) =>
    props.view === props.currentView
      ? `
        :after {
          content: "";
          background: ${props.theme[props.name.toLowerCase()]};
          position: absolute;
          bottom: 0;
          left: 25%;
          height: .4rem;
          width: 50%;
        };`
      : `
        opacity: .5;
        `};
`;

export default function Button({ view, setCurrentView, currentView, name }) {
  return (
    <StyledButton
      name={name}
      onClick={() => setCurrentView(view)}
      view={view}
      currentView={currentView}
    >
      {view}
    </StyledButton>
  );
}
