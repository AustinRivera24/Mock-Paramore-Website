import { useEffect, useState } from "react"; //imports the use tools
import './Music-Videos.css'

function MusicAndVideos() { 
  const [albums, setAlbums] = useState([]); //sets up my usestate

  useEffect(() => { //used for fecthing
    //fetch data
    fetchData(); // calls my fetch
  }, []); //ensures its only on mount

  const fetchData = () => {
    fetch("http://localhost:3000/paramore-albums") //GET
      .then((response) => response.json()) //converts
      .then((albums) => { //uses data
        setAlbums(albums);
      });
  };


console.log(albums);

return (
    <>
      {albums.length > 0 ? (
        <div id="container">
          <h1>Paramore Albums</h1>
          {albums.map((album) => (
            <div id="album-sections" key={album.id}>
              <h2>
                {album.album} ({album.year})
              </h2>
              <p>Artist: {album.artist}</p>
              <p>Genre: {album.genre}</p>
              <p>Label: {album.label}</p>
              <img class="album-cover" width="300px" height="300px" src={album.image} alt={album.album} />
              <h3>Tracks:</h3>
              <ol>
                {album.tracks.map((track, index) => (
                  <li key={index}>
                    {track.title}
                    <audio controls src={track.audio}>{track.title}</audio>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      ) : (
        <p>Nothing here to see at the moment</p>
      )}
    </>
  );
      
};



export default MusicAndVideos;