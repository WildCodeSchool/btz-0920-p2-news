import './App.css';
import Header from './components/Header';
import Navigation from './components/Navbar';
import MainHome from './components/MainHome';
import Footer from './components/Footer';

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
