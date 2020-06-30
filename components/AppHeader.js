import Head from "next/head";
import { AppBar, Toolbar, Typography, CssBaseline } from "@material-ui/core";

export default function AppHeader() {
  return (
    <>
      <Head>
        <title>CROB COUPON</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4">CROB</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          width: 100%;
          height: 100%;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
