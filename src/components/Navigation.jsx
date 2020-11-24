import { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Navigation.css';

import { Link } from 'react-router-dom';

import { home, category, user, search } from '../images';

const Navigation = () => {
  const [navItems] = useState([
    {
      label: 'Home',
      route: '/',
      image: home,
    },
    {
      label: 'My Profile',
      route: '/myprofile',
      image: user,
    },
    {
      label: 'Category',
      route: '/categories',
      image: category,
    },
    {
      label: 'Search',
      image: search,
    },
  ]);

  return (
    <div className="Navbar">
      <Nav className="navbar">
        {navItems.map((item) => {
          return (
            <NavItem className="nav-item" key={item.route}>
              <NavLink tag={Link} to={item.route} className="btn">
                <img
                  className="icon-navbar"
                  src={item.image}
                  alt="images of navigation bar"
                />
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </div>
  );
};

export default Navigation;
