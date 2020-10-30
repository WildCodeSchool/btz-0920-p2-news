import logo from './wildnewsLogo.png';
import './Header.css';

function Header() {
  return (
    <div className="background">
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}

export default Header;
