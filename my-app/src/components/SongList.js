const SongList = (props) => {
    return (
        <div>
            {
                props.songs.map((song) => (<div>{song.title}</div>))
            }
        </div>

    )
}

export default SongList;