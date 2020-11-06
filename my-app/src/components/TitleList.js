import './TitleList.css';

const SongList = (props) => {
    return (
        <div className="TitleList">
            {
                props.songs.map((song) => (<div>{song.title}</div>))
            }
        </div>

    )
}

export default SongList;