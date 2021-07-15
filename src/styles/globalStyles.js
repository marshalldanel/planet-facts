import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  * {box-sizing:border-box;}
  
  body {
    background-color:	hsl(240, 67%, 8%);
    color: hsl(0, 0%, 100%)
  }

  h1, h2 {
    font-family: 'Antonio';
    font-weight: 500;
  }

  h1 {
    line-height: 103px;
    font-size: 80px;
    letter-spacing: 0px;
  }

  h2 {
    line-height: 52px;
    font-size: 40px;
    letter-spacing: -1.5px;
  }

  h3, h4 {
    font-family: 'Spartan';
    font-weight: 700;
  }

  h3 {
    line-height: 25px;
    font-size: 12px;
    letter-spacing: 2.6px;
  }


  h4 {
    line-height: 25px;
    font-size: 11px;
    letter-spacing: 1px;
  }

  p {
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    font-size: 14px;
    text-align: left;
  }
`;

export default GlobalStyle;
