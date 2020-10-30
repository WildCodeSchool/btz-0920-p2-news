import './App.css';
import MyCarousel from './components/MyCarousel';
import Header from './components/Header';
import TapBar from './components/Navbar';
import MainHome from './components/MainHome';

function App() {
  return (
    <div className="App">
      <Header />
      <MyCarousel />
      <MainHome className="App-header" />
      <TapBar />
    </div>
  );
}

export default App;
