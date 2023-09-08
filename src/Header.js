import { StyledHeader, Nav, Logo } from "./components/styled/Header.styled";
import { Button } from "./components/styled/Button.styled";
import { Container } from "./components/styled/Container.styled";

function Header() {
  return (
    //eslint-disable-next-line
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try it for free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
export default Header;
