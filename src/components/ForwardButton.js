import React from "react";
import { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom';


const ForwardButton = ({onAction}) => {
    const history = useHistory();
    const [next, setNext] = useState();

    const getCurrentSongId = () => {
        const url= window.location.href
        const strings= url.split('/');
        const songId = strings[4];
        return songId;
    };

    const getNextId = (str, arr) => {
        const currentIndex = arr.findIndex(item => item.id === str);
        if (currentIndex !== -1 && currentIndex < arr.length - 1) {
          return arr[currentIndex + 1].id;
        }
        return arr[(currentIndex + 1) % arr.length].id;
      };
      

    const getSongs = () => fetch('http://localhost:5000/songs')
    .then((res) => res.json())

    const getNextSongId = async () => {
        const songs = await getSongs();
        const currentSong = getCurrentSongId()

        const nextId = getNextId(currentSong, songs);
        return nextId;
    }

    useEffect(() => {
        getNextSongId().then((next) => setNext(next))
    }, [getCurrentSongId]);



    return (
        <button className="forward-btn" onClick={() => { onAction(); history.push(`/song/${next}`)}}><i className="fas fa-forward"></i></button>
    )

}

export default ForwardButton;