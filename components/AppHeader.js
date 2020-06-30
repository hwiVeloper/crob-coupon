import Head from "next/head";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function AppHeader() {
  return (
    <>
      <Head>
        <title>쿠키런 쿠폰 입력</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4">쿠오븐 쿠폰 대량 입력</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
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
