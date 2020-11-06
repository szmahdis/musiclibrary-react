import './App.css';
import Header from './components/Header';
import TitleList from './components/TitleList';
import ArtistList from './components/ArtistList';
import AlbumList from './components/AlbumList';

const songs = [
  {
      id: "s0000",
      artist: "Paramore",
      title: "Aint It Fun",
      album: "Paramore",
      cover: "paramore.jpg"
  },
  {
      id: "s0001",
      artist: "Florence + The Machine",
      title: "Dog Days Are Over",
      album: "Lungs",
      cover: "florence_and_the_machine.jpg"
  },
  {
      id: "s0002",
      artist: "London Grammar",
      title: "Wasting My Youngs Years",
      album: "If You Wait",
      cover: "london_grammar.jpg"
  },

  {
      id: "s0003",
      artist: "Hasan Shamaizadeh",
      title: "Bishtar Bishtar",
      album: "Khodafez",
      cover: "shamaizadeh_khodahafez.jpg"
  }
];

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TitleList songs={songs}></TitleList>
      <ArtistList songs={songs}></ArtistList>
      <AlbumList songs={songs}></AlbumList>
    </div>
  );
}

export default App;
