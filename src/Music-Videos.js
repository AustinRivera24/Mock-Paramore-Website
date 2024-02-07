import { useEffect, useState } from "react"; //imports the use tools
import "./Music-Videos.css";

function MusicAndVideos() {
  const [albums, setAlbums] = useState([]); //sets up my usestate

  useEffect(() => {
    //used for fecthing
    //fetch data
    fetchData(); // calls my fetch
  }, []); //ensures its only on mount, no rerender when state changes

  const fetchData = () => {
    fetch("http://localhost:3000/paramore-albums") //GET
      .then((response) => response.json()) //converts
      .then((albums) => {
        //uses data
        setAlbums(albums);
      });
  };

  console.log(albums);

  return (
    <>
      {albums.length > 0 ? (
        <div id="container">
          <h1>Albums</h1>
          {albums.map((album) => (
            <div id={album.album} key={album.id}>
              <h2>
                {album.album} ({album.year})
              </h2>
              
              <p id="genre">Genre: {album.genre}</p>
              <p id="label">Label: {album.label}</p>
              <img
                class="album-cover"
                width="300px"
                height="300px"
                src={album.image}
                alt={album.album}
              />
              <h3>Tracks:</h3>
               <div id="track-container">

              {album.tracks.map((track, index) => (
                <p class="track-name" key={index}>
                  {track.title}
                  <div></div>
                  <audio controls src={track.audio}></audio>
                </p>
                
              ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Nothing here to see at the moment</p>
      )}
    </>
  );
}

export default MusicAndVideos;
