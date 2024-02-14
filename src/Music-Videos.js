import { useEffect, useState } from "react"; //imports the use tools

import Navbar from "./Navbar";

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
      <div style={{ background: 'linear-gradient(#c84359, #f8e354)'}}>
        {albums.length > 0 ? (
          <>
            <Navbar customStyle="top" />
            <div style={{ width: '100vw', }}>
              <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Albums</h1>
              {albums.map((album) => (
                <div id={album.album} key={album.id}>
                  <h2 style={{ textAlign: 'center' }}>
                    {album.album} ({album.year})
                  </h2>

                  <p style={{ fontSize: '1.25em', textAlign: 'center' }}>Genre: {album.genre}</p>
                  <p style={{ fontSize: '1.5em', textAlign: 'center' }}>Label: {album.label}</p>
                  <img
                    className="album-cover"
                    width="300px"
                    height="300px"
                    src={album.image}
                    alt={album.album}
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                  />
                  <h3 style={{ textAlign: 'center' }}>Tracks:</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>

                    {album.tracks.map((track, index) => (
                      <p className="track-name" key={index} style={{ fontSize: '1.2em', textAlign: 'center' }}>
                        {track.title}
                        <div></div>
                        <audio controls src={track.audio}></audio>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </>
        ) : (
          <p>Nothing here to see at the moment</p>
        )}
      </div>
    </>
  );
}

export default MusicAndVideos;
