import { createGlobalStyle } from "styled-components";
import { createTheme } from "@mui/material";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: rgba(31, 41, 57, 1);
  }
  body {
    margin: 0;
    padding: 0;
  }
  div {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  h1, h2, h3, h4, h5 {
    margin: 0;
    font-weight: 100;
  }
  img{
    width: 100%;
    height: 100%;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
