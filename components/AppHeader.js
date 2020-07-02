import Head from "next/head";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function AppHeader() {
  return (
    <>
      <Head>
        <title>쿠오븐 쿠폰 대량 입력</title>
        <link rel="icon" href="/favicon.ico" />

        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#000000" />

        <meta name="author" content="hwiveloper" />
        <meta
          name="description"
          content="쿠오븐 쿠폰 대량 입력 페이지입니다."
        />
        <meta
          name="keywords"
          content="쿠키런,쿠오븐,쿠키런오븐브레이크,쿠키런쿠폰,쿠폰"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="쿠오븐 쿠폰 대량 입력" />
        <meta
          property="og:description"
          content="쿠오븐 쿠폰 대량 입력 페이지입니다."
        />
        {/* <meta property="og:image" content="" /> */}
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
