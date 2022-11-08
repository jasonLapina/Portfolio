import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './NavBar.module.scss';
const NavBar = () => {
  return (
    <Navbar fixed='top' collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container className={classes.container}>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className={`me-auto ${classes.nav}`}>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#contacts'>Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
