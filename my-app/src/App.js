import './App.css';
import Header from './components/Header';
import SongList from './components/SongList';
import HeaderRow from './components/HeaderRow';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeaderRow></HeaderRow>
      <SongList></SongList>
    </div>
  );
}

export default App;
