import React from "react";
import LikeButton from '../components/LikeButton';
import ForwardButton from '../components/ForwardButton';
import BackwardButton from '../components/BackwardButton';
import ActionButton from "./ActionButton";


function ActionBar() {
    const getSongId = () => {
        const url= window.location.href
        const strings= url.split('/');
        const songId = strings[4];
        return songId;
    };
    
    let audioObj = undefined
    const play = () => {
        if (audioObj) {
            audioObj.play();
        } else {
           const songId = getSongId()
           fetch(`http://localhost:5000/audio/${songId}`).then(
               (response) => {
                   audioObj = new Audio(response.url)
                   audioObj.play();
               }
           )
            
        }
    }

    const pause = () => {
        if (audioObj) {
            audioObj.pause()
        }
    }

    return <div>
        <LikeButton></LikeButton>
        <BackwardButton onAction={pause}></BackwardButton>
        <ActionButton actionName={"play-btn"} onAction={play} icon={"fas fa-play"}></ActionButton>
        <ActionButton actionName={"pause-btn"} onAction={pause} icon={"fas fa-pause"}></ActionButton>
        <ForwardButton onAction={pause}></ForwardButton>
        
    </div>
}

export default ActionBar;