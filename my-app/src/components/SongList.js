import { useState, useEffect } from 'react'
import SongRow from './SongRow.js';


const SongList = () => {
    const [data, setData] = useState([]);

    const getSongs = () => fetch('https://musiclibrary-server.herokuapp.com/songs')
        .then((res) => res.json())

    useEffect(() => {
        getSongs().then((data) => setData(data))
    }, []);


    return (
        <div className="songList">
            {
                data.map((song) => (<div><SongRow song={song}></SongRow></div>))
            }
        </div>
    )
}

export default SongList;