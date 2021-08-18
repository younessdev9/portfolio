import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  currentTheme: "light",
  //grayColor: '#353637',
  grayColor: "#212121",
  yellowColor: "#FACC15",
  blueColor: "#0099F7",
  redColor: "#F11712",
  darkLightPrimary: "#000",
  darkLightSecondary: "#F3F3F3",
  buttonBg: "#FFF",
  CardParagraphColor: "#343236",
  excerptColor: "#585858",
  orangeColor: "#fd9170",
  textColor: "#000000d6",
  bgQuote: "#faf0f090",
  //breakpoints
  sm: "500px",
  xd: "730px",
  md: "900px",
  lg: "1400px",
};
export const darkTheme = {
  currentTheme: "dark",
  grayColor: "#212121",
  yellowColor: "#FACC15",
  blueColor: "#0099F7",
  redColor: "#F11712",
  darkLightPrimary: "#FFF",
  darkLightSecondary: "#0C0C0C",
  buttonBg: "#EEE",
  CardParagraphColor: "#F3F3F3",
  excerptColor: "#F3F3F3",
  orangeColor: "#fd9170",
  textColor: "#FFFFFF",
  bgQuote: "#2b2b2b",
  //breakpoints
  sm: "500px",
  xd: "730px",
  md: "900px",
  lg: "1400px",
};
export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  *:focus {
    outline: 0;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box
  }
  body {
    font-size: 1.7rem;
    font-family: -apple-system,Ubuntu, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    transition: all .3s ease-out;
    transition-property: background-color;
    background-color: ${(props) =>
      props.currentTheme === "dark" ? "#333" : "#FFF"};
    color: ${(props) => (props.currentTheme === "dark" ? "#FFF" : "#000")};
    a {
      text-decoration: none;
      color : inherit;
    }
  }
  pre[class*="language-"] {
	overflow: auto;
	position: relative;
	margin: 0.5em 0;
	padding: 1.25em 1em;
  }
`;
