import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { Container, Box, CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import CookieRunBold from "../fonts/CookieRunBold.otf";

const cookierun = {
  fontFamily: "CookieRunBold",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('CookieRunBold'),
    local('CookieRunBold'),
    url(${CookieRunBold}) format('opentype')
  `,
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "CookieRunBold, Arial",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [cookierun],
      },
    },
  },
});

function App({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <Container maxWidth="lg">
          <Box my={2} style={{ height: "100%" }}>
            <Component {...pageProps} />
          </Box>
        </Container>
        {/* <AppFooter /> */}

        <style>{`jsx
        html,
        body,
        body > div:first-child,
        div#__next {
          height: 100%;
        } {
          height: 100%;
        }
      `}</style>
      </ThemeProvider>
    </>
  );
}

export default App;
