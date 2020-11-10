import { Nav, NavItem, NavLink } from 'reactstrap';
import './Navbar.css';

import { Link } from 'react-router-dom';

import { home, category, user, search } from '../images';

const Navigation = () => {
  return (
    <div className="Navbar">
      <Nav className="navbar">
        <NavItem>
          <NavLink className="btn">
            <Link to="/my-profile">
              <img className="user-icon" src={user} alt="icon for profile" />
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className="btn">
              <Link to="/categories">
              <img className="trend-icon" src={category} alt="category icon" />
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <NavLink className="btn">
            <Link to="/">
              <img className="cat-icon" src={home} alt="icon for user" />
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="btn">
            <img className="cat-icon" src={search} alt="icon for search" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
