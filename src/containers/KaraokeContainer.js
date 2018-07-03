import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: songs,
    selectedSong: ""
  }

  changeSelectedSong = (song) => {
    this.setState({
      selectedSong: song
    })
  }

  filteredSong = (event) => {
    console.log("before filter ", this.state.songs)
    console.log(event.target.value)
    let filteredSongList = this.state.songs.filter(song => {return song.title.includes(event.target.value)})

    this.setState({
      songs: filteredSongList
    }, () => {
      console.log("inside setstate ",this.state.songs)
    })

  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter filterSongs={this.filteredSong}/>
          <SongList changeSelectedSong={this.changeSelectedSong} songs={this.state.songs}/>
        </div>
        <KaraokeDisplay selectedSong={this.state.selectedSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
