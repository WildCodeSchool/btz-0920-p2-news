import logo from './wildnewsLogo.png';
import trends from './trends.png';
import user from './user.png';
import search from './search.png';

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
      <img className="logo" src={logo} alt="Logo" />
    </header>
    <div className="background">
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}

export default Header;
