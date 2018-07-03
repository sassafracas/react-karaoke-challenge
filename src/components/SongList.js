import React from 'react';
import Song from "./Song"



const SongList = (props) => {

const getEachSong = () => {
  let oneSong = props.songs.map( (song) => {
    return <Song song={song} changeSelectedSong={props.changeSelectedSong}/>
  })
  return oneSong
}

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>
        {getEachSong()}
      </tbody>
    </table>
  )
}

export default SongList;
