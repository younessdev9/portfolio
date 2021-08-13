import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "components/hooks/useDarkMode";
import { GlobalStyles, darkTheme, lightTheme } from "styles/globalStyles";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles currentTheme={theme} />
        <NavBar
          toggleTheme={toggleTheme}
          currentTheme={themeMode}
          open={open}
          setOpen={setOpen}
        />
        <main
          style={{
            minHeight: "84vh",
          }}
        >
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
