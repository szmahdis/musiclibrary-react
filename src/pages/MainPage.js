import React from "react";
import Header from '../components/Header';
import SongList from '../components/SongList';
import HeaderRow from '../components/HeaderRow';
import Toggle from '../components/Toggle';

function MainPage() {
  return (
    <div className="MainPage">
      <Toggle></Toggle>
      <Header></Header>
      <HeaderRow></HeaderRow>
      <SongList></SongList>
    </div>
  );
}

export default MainPage;
