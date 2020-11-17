import './SongRow.css'
import './../font-awesome/css/all.min.css'

const SongRow = (props) => {
    return (
        <div className="song row">
            <button className="play-button" data-song="aint-it-fun"> <i className="fa fa-play fa-2x"></i></button>
            <img class="cover-img" src="https://musiclibrary-server.herokuapp.com/images/paramore.jpg" alt="img"/>
            <span>{props.song.artist}</span>
            <span>{props.song.title}</span>
            <span>{props.song.album}</span>
        </div>
    )

}

export default SongRow;