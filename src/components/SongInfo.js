import React from 'react';
import { Image } from 'react-bootstrap';

const SongInfo = (props) => {
  console.log(props)
  return (
    <>
      <p id="playing_from">Playing from Album</p>
      <b><p id="album_name">{props.currentTrack.album.name}</p></b>
      <Image id="album_art" src={props.currentTrack.album.image} rounded />
      <b><p id="song_name">{props.currentTrack.name}</p></b>
      <div id="artists_name">
        {props.currentTrack.artists.map((a, i) => {
          if (i !== props.currentTrack.artists.length - 1) {
            return a.name + ", "
          }
          else {
            return a.name
          }
        })}
      </div>
    </>
  )
}
export default SongInfo;
