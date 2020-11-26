import './SongPreview.css';
import './../font-awesome/css/all.min.css';

const SongPreview = (props) => {
    const { song } = props;
  
return (
    <div className="container">
        <img className="coverAlbum" id="coverAlbum" src={`https://musiclibrary-server.herokuapp.com/images/${song.cover}`} alt="coverAlbum" />
        <div className="textContainer">
            <p id="songTitle"> {song.title} </p>
            <p id="artistName"> {song.artist}</p>
        </div>
        <div className="action-bar">
            <button className="fav-btn"><i className="fas fa-heart"></i></button>
            <button className="back-btn"><i className="fas fa-backward"></i></button>
            <button className="play-btn" id="play-btn"> <i className="fas fa-play"></i> </button>
            <button className="pause-btn" id="pause-btn"><i className="fas fa-pause"></i></button>
            <button className="forward-btn"><i className="fas fa-forward"></i></button>
        </div>
    </div>
);
}

export default SongPreview;
