import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FotoContext } from "../context/FotoContext";

const Navigation = () => {
  const { setView } = useContext(FotoContext);

  const handleNavLink = (clickedSection) => {
    setView(clickedSection);
  };
  return (
    <Navbar bg="success">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-5">
            <Link to="/" className="ms-3 text-decoration-none" onClick={() => handleNavLink("Home")}>
              {" "}
              Home{" "}
            </Link>{" "}
            |{" "}
            <Link to="/favorites" className="ms-3 text-decoration-none" onClick={() => handleNavLink("Favorites")}>
              {" "}
              Favorites{" "}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;