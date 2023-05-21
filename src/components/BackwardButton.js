import React from "react";
import { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom';


const BackwardButton = ({onAction}) => {

    const history = useHistory();
    const [next, setNext] = useState();

    const getCurrentSongId = () => {
        const url= window.location.href
        const strings= url.split('/');
        const songId = strings[4];
        return songId;
    };

    const getPreviousId = (str, arr) => {
        const currentIndex = arr.findIndex(item => item.id === str);
        if (currentIndex !== -1 && currentIndex > 0) {
          return arr[currentIndex - 1].id;
        }

        return arr[arr.length-1].id;
      };
      

    const getSongs = () => fetch('http://localhost:5000/songs')
    .then((res) => res.json())

    const getPreviousSongId = async () => {
        const songs = await getSongs();
        const currentSong = getCurrentSongId()

        const nextId = getPreviousId(currentSong, songs);
        return nextId;
    }

    useEffect(() => {
        getPreviousSongId().then((next) => setNext(next))
    }, [getCurrentSongId]);


    return (

        <button className="back-btn" onClick={() => { onAction(); history.push(`/song/${next}`)}}> <i className="fas fa-backward"></i></button>
    )


}

export default BackwardButton;