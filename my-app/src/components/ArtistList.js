import './ArtistList.css';

const ArtistList = (props) => {
    return (
        <div className="ArtistList">
            {
                props.songs.map((song) => (<div>{song.artist}</div>))
            }

        </div>
    )
}

export default ArtistList