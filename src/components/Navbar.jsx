// import React from 'react';
import {
  // Collapse,
  // Navbar,
  // NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './Navbar.css';
import trends from './trend.png';
import user from './user.png';
import category from './categorie.png';

const Navigation = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className="Navbar">
      {/* <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!isOpen} navbar> */}
      <Nav className="navbar">
        <NavItem>
          <NavLink>
            <img className="user-icon" src={user} alt="icon for trends" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <img className="trend-icon" src={trends} alt="icon for trends" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <img className="cat-icon" src={category} alt="icon for trends" />
          </NavLink>
        </NavItem>
      </Nav>
      {/* </Collapse>
      </Navbar> */}
    </div>
  );
};

export default Navigation;
