import { useState } from "react";
import Script from "next/script";
import { ThemeProvider } from "styled-components";

import { Menu, Burger } from "components/Menu";
import { useDarkMode } from "components/hooks/useDarkMode";
import { GlobalStyles, darkTheme, lightTheme } from "styles/globalStyles";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRUCKING_ID}`}
      />
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRUCKING_ID}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles currentTheme={theme} />
        <NavBar
          toggleTheme={toggleTheme}
          currentTheme={themeMode}
          open={open}
          setOpen={setOpen}
        />
        <>
          <Menu
            toggleTheme={toggleTheme}
            theme={theme}
            open={open}
            setOpen={setOpen}
          />
          <Burger
            toggleTheme={toggleTheme}
            currentTheme={theme}
            open={open}
            setOpen={setOpen}
          />
        </>
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
