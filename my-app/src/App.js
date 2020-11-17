import './App.css';
import Header from './components/Header';
import SongList from './components/SongList';
import HeaderRow from './components/HeaderRow';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <Toggle></Toggle>
      <Header></Header>
      <HeaderRow></HeaderRow>
      <SongList></SongList>
    </div>
  );
}

export default App;
