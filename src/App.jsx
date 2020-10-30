import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainHome from './components/MainHome';

// CLEFS API
// Raph : 78050e6ed06b44eabff4ee83ec5e7864
// Albin : e6339d9c525446cc9b6c27d6fbd39e88

function App() {
  return (
    <div className="App">
      <Header />
      <MainHome className="App-header" />
      <Navbar />
    </div>
  );
}

export default App;
