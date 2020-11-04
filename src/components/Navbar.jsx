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
  return (
    <div className="Navbar">
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
    </div>
  );
};

export default Navigation;
