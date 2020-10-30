import './App.css';
import MyCarousel from './components/MyCarousel';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainHome from './components/MainHome';

function App() {
  return (
    <div className="App">
      <Header />
      <MyCarousel />
      <MainHome className="App-header" />
      <Navbar />
    </div>
  );
}

export default App;
