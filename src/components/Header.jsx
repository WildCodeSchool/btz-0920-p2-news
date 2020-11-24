import { Link } from 'react-router-dom';
import { wildnewsLogo, home, user, search } from '../images';

import './Header.css';

function Header() {
  return (
    <header className="background">
      <nav className="navbar">
        <Link to="/">
          <img className="home" src={home} alt="home" />
        </Link>
        <div className="menu">
          <Link to="/myprofile">
            <img className="user" src={user} alt="user" />
          </Link>
          <Link to="/search">
            <img className="search" src={search} alt="search" />
          </Link>
        </div>
      </nav>
      <img className="mainLogo" src={wildnewsLogo} alt="Logo" />
    </header>
  );
}

export default Header;
