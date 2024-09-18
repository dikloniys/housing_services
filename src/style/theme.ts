import { createGlobalStyle } from "styled-components";
import RobotoRegular from "../fonts/Roboto-Regular.ttf";
import RobotoMedium from "../fonts/Roboto-Medium.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  *{
    font-family: 'Roboto';
    font-weight: 400;
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
