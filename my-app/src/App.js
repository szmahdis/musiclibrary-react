import MainPage from './pages/MainPage';
import SongPage from './pages/SongPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage></MainPage>
        </Route>
        <Route path="/song">
          <SongPage></SongPage>
        </Route>
      </Switch>
    </Router>
  )
}










// import './App.css';
// import Header from './components/Header';
// import SongList from './components/SongList';
// import HeaderRow from './components/HeaderRow';
// import Toggle from './components/Toggle';

// function App() {
//   return (
//     <div className="App">
//       <Toggle></Toggle>
//       <Header></Header>
//       <HeaderRow></HeaderRow>
//       <SongList></SongList>
//     </div>
//   );
// }

// export default App;
