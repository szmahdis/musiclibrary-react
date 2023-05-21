import React from "react";
import { useState, useEffect } from 'react'
import SongRow from './SongRow.js';


const SongList = () => {
    const [data, setData] = useState([]);

    const getSongs = () => fetch('http://localhost:5000/songs')
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