import logo from './wildnewsLogo.png';
import trends from './trends.png';
import './Header.css';

function Header() {
  return (
    <div className="background">
      <img className="trends" src={trends} alt="trends" />
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}

export default Header;
