import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: '#f5cb5c',
      }}
    >
      <Header />
      <Container>{children}</Container>
      <Footer />
      <Navigation />
    </div>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
