// import { useState, useEffect } from 'react'
import './SongPreview.css';
import './../font-awesome/css/all.min.css';

const SongPreview = (props) => {
    const { song } = props;
    // const [data, setData] = useState({});

    // const getSongId = () => {
    //     const url = window.location.href
    //     const song = url.split('?')
    //     const songId = song[1].split('=')[1]
    //     return songId;
    // };


    // const getSongs = () => fetch('https://musiclibrary-server.herokuapp.com/songs')
    //     .then((res) => res.json())

    // useEffect(() => {
    //     getSongs().then((data) => {
    //         const songId = getSongId()
    //         for (let item of data) {
    //             if (item.id === songId) {
    //                 console.log(item)
    //                 setData(item)

    //             }
    //         }
    //     })
    // }, []);

    // useEffect(() => {
    //     setImage()
    // },[]);


    // const setImage = () => {
    //     fetch(`https://musiclibrary-server.herokuapp.com/images/${data.cover}`)
    //         .then((res) => {
    //             res.json()
    //             console.log(res.json())

    //         }
    //         )
    // }

   
//   let audioObj = undefined
//    const playSong = () => {
//         if (audioObj) {
//             audioObj.play();
//         } else {
//             const songId = getSongId()
//             fetch(`https://musiclibrary-server.herokuapp.com/audio/${songId}`).then(
//                 (response) => {
//                     audioObj = new Audio(response.url)
//                     audioObj.play();
//                 }
//             )
//         }
//     };

//     const pauseSong = () => {
//         if (audioObj) {
//             audioObj.pause()
//         }
//     };
// console.log(data.cover)


// todo fix button
//fix fetching image
//investigate why server crashes
return (
    <div className="container">
        <div className="textContainer">
            <p id="songTitle"> {song.title} </p>
            <p id="artistName"> {song.artist}</p>
        </div>
        <div className="action-bar">
            <img className="image" id="coverAlbum" src={`https://musiclibrary-server.herokuapp.com/images/${song.cover}`} alt="coverAlbum" />
            <button className="fav-btn"><i className="fas fa-heart"></i></button>
            <button className="back-btn"><i className="fas fa-backward"></i></button>
            <button className="play-btn" id="play-btn"> <i className="fas fa-play"></i> </button>
            <button className="pause-btn" id="pause-btn"><i className="fas fa-pause"></i></button>
            <button className="forward-btn"><i className="fas fa-forward"></i></button>
        </div>
    </div>
);
}

export default SongPreview;
