import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './NavBar.module.scss';
const NavBar = () => {
  return (
    <Navbar fixed='top' collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#features'>Home</Nav.Link>
            <Nav.Link href='#features'>About</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>More deets</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
