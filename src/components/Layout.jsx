import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import Navigation from './Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
// import NewsList from './NewsList';
import Header from './Header';

// import MyCarousel from './MyCarousel';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Navigation />
    </div>
  );
};
export default Layout;

Layout.propTypes = { children: PropTypes.isRequired };
