import { render } from '@testing-library/react';
import React from 'react';
import playlistTracks from '../App/App'
import './Playlist.css';
import TrackList from '../TrackList/TrackList'

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
  <input defaultValue={"New Playlist"}/>
  <TrackList tracks={this.props.playlistTracks}/>
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>
        );
    }
}

export default Playlist;