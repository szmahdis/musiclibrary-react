import React, { useEffect, useState } from "react";
import './LikeButton.css'


const LikeButton = () => {
    const [liked, isLiked] = useState();

    const setFavorite = () => {
        const newLiked = !liked;
        isLiked(newLiked);
        return newLiked;
    }

    const getCurrentSongId = () => {
        const url= window.location.href
        const strings= url.split('/');
        const songId = strings[4];
        return songId;
    };

    const submitFavorites = () => {
        return fetch('http://localhost:5000/liked', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: getCurrentSongId(),
                liked: setFavorite(),
            })
        }).then((Response) => Response.json())
        .then((data) => {
            console.log('Data sent successfully', data);
          })
          .catch((error) => {
            console.error('Error sending data:', error);
          });
    
        }

    const getFavorites = () => fetch('http://localhost:5000/liked')
    .then((res) => res.json());

    const getIsLiked = async (songId) => {
        const data = await getFavorites();
        const result = data.find(item => item.songId === songId);
        return result ? result.isLiked : null;
    }

    useEffect(async() => {
        const id = getCurrentSongId()
        const res = await getIsLiked(id);
        isLiked(res);
    },[getCurrentSongId]);

    return (
        <button className="fav-btn" onClick={submitFavorites}><i className={`fas fa-heart liked-${liked}`}></i></button>
    )
}

export default LikeButton;
