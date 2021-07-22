import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  :root {
    font-size: 62.5%;
    box-sizing: border-box;
    // X-axis scroll fixish 
    overflow-x: hidden;
  } 

  *, *:before, *:after{
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  } 
  
  body {
    font-size: 1.6rem;
    background-color:	hsl(240, 67%, 8%);
    color: hsl(0, 0%, 100%);
  }

  h1, h2 {
    font-family: 'Antonio';
    font-weight: 500;
  }

  h1 {
    line-height: 10.3rem;
    font-size: 8rem;
    letter-spacing: 0;
  }

  h2 {
    line-height: 5.2rem;
    font-size: 4rem;
    letter-spacing: -.15rem;
  }

  h3, h4 {
    font-family: 'Spartan';
    font-weight: 700;
  }

  h3 {
    line-height: 2.5rem;
    font-size: 1.2rem;
    letter-spacing: .26rem;
  }


  h4 {
    line-height: 2.5rem;
    font-size: 1.1rem;
    letter-spacing: .1rem;
  }

  p {
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
    font-size: 1.4rem;
    text-align: left;
  }
`;

export default GlobalStyle;
