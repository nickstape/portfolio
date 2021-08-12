

import '../css/App.css';
import '../css/Responsive.css';
import { Navbar, Nav, Container } from 'react-bootstrap';


const Navigation = () => {
  return (
      <Navbar  collapseOnSelect fixed='top' expand='sm' data-v-5ef39566="">
        <Container>
        <Nav.Link  href="/" title="Fisher Mary Anike"   data-v-5ef39566="" className="c-link c-link--underline">Fisher Mary</Nav.Link>
          <Navbar.Toggle arial-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav classname='nav-side'>
              <Nav.Link data-v-5ef39567="" href="/About">About</Nav.Link>
              <Nav.Link data-v-5ef39567="" href="/Work">Work</Nav.Link>
              <Nav.Link data-v-5ef39567="" href="mailto:fishermary@gmail.com">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container> 
      </Navbar>
    
  );
}

export default Navigation;