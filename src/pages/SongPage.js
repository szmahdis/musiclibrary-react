import React from "react";
import Toggle from './../components/Toggle.js';
import HomeButton from './../components/HomeButton.js';
import SongPreview from './../components/SongPreview.js';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

function SongPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const getSongs = () => fetch('http://localhost:5000/songs')
      .then((res) => res.json())

  useEffect(() => {
      getSongs().then((data) => {
          const songId = id
          for (let item of data) {
              if (item.id === songId) {
                  setData(item)

              }
          }
      })
  }, [id]);

  return (
    <div className="SongPage">
      <div className= "Header" style={{display:'flex', justifyContent: 'space-between'}}>
      <HomeButton></HomeButton>
      <Toggle></Toggle>
      </div>
      {
        data ? <SongPreview song={data}></SongPreview> : <div> Loading ... </div>
      }
    </div>
  );
}

export default SongPage;
