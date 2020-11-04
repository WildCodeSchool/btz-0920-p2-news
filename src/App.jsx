import './App.css';

import MyCarousel from './components/MyCarousel';
import Header from './components/Header';
import Navigation from './components/Navbar';
import MainHome from './components/MainHome';

import Pages from './components/Pages';

function App() {
  return (
    <div className="App">
      <Header />
      <MyCarousel />
      <MainHome className="App-header" />
      <Navigation />
      <Pages />
    </div>
  );
}

export default App;
