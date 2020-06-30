import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { Container, Box } from "@material-ui/core";

function App({ Component, pageProps }) {
  return (
    <>
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
    </>
  );
}

export default App;
