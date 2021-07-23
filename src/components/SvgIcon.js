import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';

const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6.4rem 10rem 6.7rem 10rem;

  ${mediaQueries('tablet')`
    grid-area: svg;
    justify-self: center;
  `};
`;

const SvgImage = styled.img`
  height: auto;
  width: 75%;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${mediaQueries('tablet')`
    width: 60%;
  `};

  ${mediaQueries('desktop')`
    width: 70%;
  `};
`;

export default function SvgIcon(props) {
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const fetchSvg = async () => {
      let importedIcon = '';
      props.view === 'structure'
        ? (importedIcon = await import(
            `../assets/planet-${props.planet}-internal.svg`
          ))
        : (importedIcon = await import(`../assets/planet-${props.planet}.svg`));

      setIcon(importedIcon.default);
      console.log('importedIcon :>> ', importedIcon);
    };
    fetchSvg();
  }, [props]);
  console.log('icon :>> ', icon);

  return (
    <SvgContainer>
      <SvgImage src={icon} />
    </SvgContainer>
  );
}

// & svg {
//     height: ${(props) => (props.height ? `${props.height}px` : '100%')};
//     width: ${(props) => (props.width ? `${props.width}px` : '100%')};
//   }
