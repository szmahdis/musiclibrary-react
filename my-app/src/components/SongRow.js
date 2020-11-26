import './SongRow.css'
import './../font-awesome/css/all.min.css'
import { useHistory } from 'react-router-dom';

const SongRow = (props) => {
    const history = useHistory();

    return (
        <div className="song row">
            <button className="play-button" id="play-button" onClick={() => history.push(`/song/${props.song.id}`)}> <i className="fa fa-play fa-2x"></i></button>
            <img className="cover-img" src={`https://musiclibrary-server.herokuapp.com/images/${props.song.cover}`} alt="img"/>
            <span>{props.song.artist}</span>
            <span>{props.song.title}</span>
            <span>{props.song.album}</span>
        </div>
    )

}

export default SongRow;