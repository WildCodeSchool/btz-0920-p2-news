import { useContext, useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Navigation.css';

import { Link } from 'react-router-dom';

import { home, category, user, search } from '../images';
import categorieContext from '../contexts/categorieContext';

const Navigation = () => {
  const { currentCat, setCurrentCat } = useContext(categorieContext);

  const selectCategory = () => {
    const stateCopy = currentCat.map((cat) => {
      if (cat.value === 'general') {
        return {
          ...cat,
          selected: true,
        };
      }
      if (cat.value !== 'general') {
        return {
          ...cat,
          selected: false,
        };
      }
      return cat;
    });
    setCurrentCat(stateCopy);
  };

  const [navItems] = useState([
    {
      label: 'Home',
      route: '/',
      image: home,
      onclick: selectCategory,
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
      route: '/search',
      image: search,
    },
  ]);

  return (
    <div className="Navbar">
      <Nav className="navbar">
        {navItems.map((item) => {
          return (
            <NavItem className="nav-item" key={item.route}>
              <NavLink
                tag={Link}
                to={item.route}
                onClick={item.onclick}
                className="btn"
              >
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
