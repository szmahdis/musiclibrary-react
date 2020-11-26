import Toggle from './../components/Toggle.js';
import SongPreview from './../components/SongPreview.js';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

function SongPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const getSongs = () => fetch('https://musiclibrary-server.herokuapp.com/songs')
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
  }, []);

  return (
    <div className="SongPage">
      <Toggle></Toggle>
      {
        data ? <SongPreview song={data}></SongPreview> : <div> Loading ... </div>
      }
    </div>
  );
}

export default SongPage;
