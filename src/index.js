import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import App from "./App";

const theme = {
  primary: "#FF8252",
  success: "#00AF9C",
  success_gradient: "rgba(0, 175, 156, 0.1);",
  dark: "#252729",
  gray: "#B8B9BB",
  gray_gradient: "rgba(37, 39, 41, 0.1);",
  button_shadow: `10px 0px 75px rgba(155, 155, 155, 0.08)`,
  dark2: "rgba(37, 39, 41, 0.8)",
  card_shadow: "0px 6px 75px rgba(100, 87, 87, 0.05);",
};

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;800&display=swap');

  *,
  *::after,
  *::before{
    margin : 0;
    padding : 0;
    box-sizing : border-box;
  }

  html {
    font-size : 62.5%;
  }

  body{
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    font-family : "Nunito Sans", sans-serif !important;
  }

  ::root{
    --screen-lg: 1280px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
