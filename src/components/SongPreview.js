import React from "react";
import './SongPreview.css';
import './../font-awesome/css/all.min.css';
import ActionBar from '../components/ActionBar';

const SongPreview = (props) => {
    const { song } = props;
  
return (
    <div className="container">
        <img className="coverAlbum" id="coverAlbum" src={`http://localhost:5000/images/${song.cover}`} alt="coverAlbum" />
        <div className="textContainer">
            <p id="songTitle"> {song.title} </p>
            <p id="artistName"> {song.artist}</p>
        </div>
        <div className="action-bar">

        <ActionBar></ActionBar>
        </div>
    </div>
);
}

export default SongPreview;
