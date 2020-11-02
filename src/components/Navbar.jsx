import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './Navbar.css';

const TapBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className="Navbar">
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink>Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Tendances</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Categorie</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TapBar;
