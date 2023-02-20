import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    --white: #FAFBFC;
    --darkest-orange: #ffaf00;
    --dark-orange: #F07900;
    --mid-orange: #F8A145;
    --lighter-black: #151515;
    --darker-black: #010101;
    --bg-white: #FAFBFC;
    --bg-blue: #026AA7;
    --text-blue: #42526E;
    --light-blue: #67A6CA;
    --dark-blue: #172b4d;
    --blue: #E4F0F6;
    --grey: #F0F2F5;
  }
  body{
    overflow-y: hidden;
    overflow-x: hidden;

    background: var(--bg-white);
    padding: 0;
  }
  select{
    outline: none;
    border: none;
    background: var(--white);
    color: var(--text-blue);
    font-size: 0.7rem;
  }
  option{
    background: var(--white);
    color: var(--text-blue);
    outline: none;
    border: none;
    margin-top: 20px;
     border: 1px solid green!important;
  }
`;

export default GlobalStyles;
