import { ThemeProvider } from "styled-components";
import { useDarkMode } from "components/hooks/useDarkMode";
import { GlobalStyles, darkTheme, lightTheme } from "styles/globalStyles";
function MyApp({ Component, pageProps }) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles currentTheme={theme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
