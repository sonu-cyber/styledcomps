import { ThemeProvider } from "styled-components";
import Header from "./Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { Container } from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/Global.styled";

import content from "./components/Content";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h2>Images go here</h2>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
