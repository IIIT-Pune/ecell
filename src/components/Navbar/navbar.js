import React, { useState } from 'react';
import './navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" expand="md">
        <NavbarBrand href="/" className="navbar-brand mr-auto"><img className="logo mx-0" src="https://cdn.discordapp.com/attachments/804354977467465790/804357385559998565/lastcell49.png"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} style={{marginRight:'50px'}} >
          <MenuRoundedIcon style={{ color: "#001427" }} />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="justify-content-end ml-auto px-3">
            <NavItem>
              <NavLink href="/" style={{borderBottom:'#001427',paddingLeft:'20px'}} >Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#vision" style={{borderBottom:'#001427',paddingLeft:'20px'}}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#event" style={{borderBottom:'#001427',paddingLeft:'20px'}}>Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" style={{borderBottom:'#001427',paddingLeft:'20px'}}>Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" style={{borderBottom:'#001427',paddingLeft:'20px'}}>Team</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;