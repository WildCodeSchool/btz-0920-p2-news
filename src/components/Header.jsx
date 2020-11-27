import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { wildnewsLogo, home, user, search } from '../images';
import categorieContext from '../contexts/categorieContext';

function Header() {
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

  return (
    <header className="background">
      <nav className="navbar">
        <Link to="/" onClick={selectCategory}>
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
