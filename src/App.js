import { ThemeProvider } from "styled-components";
import Header from "./Header";
import { Container } from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/Global.styled";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
