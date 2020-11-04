import { wildnewsLogo, trends, user, search } from '../images';

import './Header.css';

function Header() {
  return (
    <header className="background">
      <nav className="navbar">
        <img className="trends" src={trends} alt="trends" />
        <div className="menu">
          <img className="user" src={user} alt="user" />
          <img className="search" src={search} alt="search" />
        </div>
      </nav>
      <img className="logo" src={wildnewsLogo} alt="Logo" />
    </header>
  );
}

export default Header;
