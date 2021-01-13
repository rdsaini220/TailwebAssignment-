import { Container, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <NavLink className="navbar-brand" to={"/"}>
        Assignment ReactJs
      </NavLink>
    </Container>
  </Navbar>
);

export default Header;
