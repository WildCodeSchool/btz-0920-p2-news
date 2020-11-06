import './App.css';
import Header from './components/Header';
import Navigation from './components/Navbar';
import MainHome from './components/MainHome';
import Footer from './components/Footer';

// CLEFS API
// Raph : 78050e6ed06b44eabff4ee83ec5e7864
// Albin : e6339d9c525446cc9b6c27d6fbd39e88

// import Pages from './components/Pages';

function App() {
  return (
    <div className="App">
      <Header />
      <MainHome className="App-header" />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
