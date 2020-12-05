import { Box, Container, CssBaseline, Link, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import AppHeader from "../components/AppHeader";
import { VersionInfo } from "../components/VersionInfo";
import CookieRunBold from "../fonts/CookieRunBold.otf";
import "../styles.css";

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
        {/* <AppHeader handleOpen={_handleVersionInfoOpen} /> */}
        {/* <Container maxWidth="lg"> */}
          <Box my={2} style={{ height: "100%", textAlign: 'center' }}>
            {/* <Component {...pageProps} /> */}
            <Typography variant="h3">
              사이트 통합되었습니다.<br />
              <Link href={`https://crob-lab.netlify.app`}>https://crob-lab.netlify.app</Link>
            </Typography>
          </Box>
        {/* </Container> */}
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
