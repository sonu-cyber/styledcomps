import {
  StyledHeader,
  Nav,
  Logo,
  Image,
} from "./components/styled/Header.styled";
import { Button } from "./components/styled/Button.styled";
import { Container } from "./components/styled/Container.styled";
import { Flex } from "./components/styled/Flex.styled";

function Header() {
  return (
    //eslint-disable-next-line
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try it for free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle reimagines the way we build communities.You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion. you
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
            <Image src="./images/illustration-mockups.svg" alt="mockups" />
          </div>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
export default Header;
