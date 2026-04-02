import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate ,NavLink} from 'react-router-dom';
function NavbarLayout() {
  const navigate=useNavigate();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link  href='/book/list'>Add Listing</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>



    </>
  );
}

export default NavbarLayout;











