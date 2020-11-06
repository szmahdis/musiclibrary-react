import './AlbumList.css'

const AlbumList = (props) => {
    return (
        <div className="AlbumList">
            {
                props.songs.map((song) => (<div>{song.album} </div>))
            }

        </div>
    )
}

export default AlbumList;