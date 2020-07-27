import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { Container, Box, CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import CookieRunBold from "../fonts/CookieRunBold.otf";
import "../styles.css";
import { VersionInfo } from "../components/VersionInfo";

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

  const [openVersionInfo, setOpenVersionInfo] = useState(false);

  const _handleVersionInfoOpen = () => {
    setOpenVersionInfo(true);
  };

  const _handleVersionInfoClose = () => {
    setOpenVersionInfo(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader handleOpen={_handleVersionInfoOpen} />
        <Container maxWidth="lg">
          <Box my={2} style={{ height: "100%" }}>
            <Component {...pageProps} />
          </Box>
        </Container>
        <VersionInfo
          open={openVersionInfo}
          handleClose={_handleVersionInfoClose}
        />
        {/* <AppFooter /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
