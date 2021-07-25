import React, { useState } from 'react';
import './navbar.css';
import {
  Collapse,Navbar,NavbarToggler,
  NavbarBrand,Nav,NavItem,
  NavLink
} from 'reactstrap';
import scrollTo from 'gatsby-plugin-smoothscroll';
import img from '../../images/lastcell49.png';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" expand="md">
        <NavbarBrand href="/" className="navbar-brand mr-auto"><img className="logo" src={img}></img></NavbarBrand>
        <NavbarToggler onClick={toggle} style={{marginRight:'20px'}} >
          <MenuRoundedIcon style={{ color: "#001427" }} />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="justify-content-end ml-auto px-3">
            <NavItem>
              <NavLink href="/" style={{borderBottom:'#001427',paddingLeft:'20px'}} >Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo('#vision')} style={{borderBottom:'#001427',paddingLeft:'20px',cursor:'pointer'}}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo('#event')} style={{borderBottom:'#001427',paddingLeft:'20px',cursor:'pointer'}}>Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" style={{borderBottom:'#001427',paddingLeft:'20px'}}>Resources</NavLink>
            </NavItem>
            {/*<NavItem>
              <NavLink href="/recruitment" style={{borderBottom:'#001427',paddingLeft:'20px'}}>Careers</NavLink>
            </NavItem>*/}
            <NavItem>
              <NavLink href="/" style={{borderBottom:'#001427',paddingLeft:'20px'}}>Team</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;