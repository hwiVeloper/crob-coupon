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
          <Box my={2} style={{ height: "100%", textAlign: 'center' }}>
            <Typography variant="h4">
              사이트 통합되었습니다.
            </Typography>
            <Typography variant="h4">
              <Link href={`https://crob-lab.hwiveloper.dev`}>https://crob-lab.hwiveloper.dev</Link>
            </Typography>
            <Typography variant="h6">
              (현재 페이지는 2020년까지만 유지됩니다.)
            </Typography>
          </Box>
        <VersionInfo
          open={openVersionInfo}
          handleClose={_handleVersionInfoClose}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
