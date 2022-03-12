import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


  :root {
    --red: #e52e4d;
    --blue: #5429cc;
    
    --blue-light: #6933FF;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #F0F2F5;
    --shape: #FFFFFF;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media (max-width: 1000px) {
      font-size: 93.75% ;
    }
    @media (max-width: 720px) {
      font-size: 87.5% ;
    }
  }
  button {
    cursor: pointer;
  }


  [disabled] {
    opacity: 0.6;
    cursor:  not-allowed;
  }

  `;
