import SongRow from'./SongRow.js'

const songs = [
    {
        id: "s0000",
        artist: "Paramore",
        title: "Aint It Fun",
        album: "Paramore",
        cover: "paramore.jpg"
    },
    {
        id: "s0001",
        artist: "Florence + The Machine",
        title: "Dog Days Are Over",
        album: "Lungs",
        cover: "florence_and_the_machine.jpg"
    },
    {
        id: "s0002",
        artist: "London Grammar",
        title: "Wasting My Youngs Years",
        album: "If You Wait",
        cover: "london_grammar.jpg"
    },

    {
        id: "s0003",
        artist: "Hasan Shamaizadeh",
        title: "Bishtar Bishtar",
        album: "Khodafez",
        cover: "shamaizadeh_khodahafez.jpg"
    }
]

const SongList = () => {
    return (
        <div className = "songList"> 
        {
            songs.map((song) => (<div><SongRow song={song}></SongRow></div>))
        }
        </div>
    )
} 

export default SongList;