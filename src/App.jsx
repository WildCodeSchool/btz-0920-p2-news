import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainHome from './components/MainHome';

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
