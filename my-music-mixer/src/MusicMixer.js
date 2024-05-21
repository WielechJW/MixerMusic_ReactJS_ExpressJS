import React, { useState, useEffect } from 'react';

const MusicMixer = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/songs')
      .then(response => response.json())
      .then(data => setSongs(data));
  }, []);

  const playSong = (file) => {
    const audio = new Audio(`http://localhost:3001/music/${file}`);
    audio.play();
    setCurrentSong(audio);
  };

  const stopSong = () => {
    if (currentSong) {
      currentSong.pause();
      setCurrentSong(null);
    }
  };

  return (
    <div>
      <h1>Paris Platynov radio</h1>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            {song.title} by {song.artist}
            <button onClick={() => playSong(song.file)}>Play</button>
          </li>
        ))}
      </ul>
      {currentSong && <button onClick={stopSong}>Stop</button>}
    </div>
  );
};

export default MusicMixer;
