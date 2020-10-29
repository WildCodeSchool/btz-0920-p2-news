import './App.css';
import NewsList from './components/NewsList';
import MyCarousel from './components/MyCarousel';

function App() {
  return (
    <div className="App">
      <MyCarousel />
      <NewsList />
    </div>
  );
}

export default App;
