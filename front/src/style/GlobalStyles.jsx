import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }
    body {
        background: #F1F1F2;
        overflow-x: hidden;
        overflow: auto;
        min-height: 100vh;
    }
    * {    
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
    text-decoration: none;
    list-style-type: none;
}


.main-content {
  margin-bottom: 350px;
}


`;

// PALETA DE COLORES
// #F1F1F2 (BACKGROUND), #4C4C4D (TEXTOS), #BCBABE (FORMS), #A1D6E2 (CAJITAS), #1995AD (NAVBAR; FOOOTER; BOTONES;)
