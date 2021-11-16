import React from 'react';
import { Image, ProgressBar } from 'react-bootstrap';

const SongInfo = (props) => {
  return (
    <>
      <p id="playing-from">Playing from Album</p>
      <b><p id="album-name">{props.currentTrack.album.name}</p></b>
      <Image id="album-art" src={props.currentTrack.album.image} rounded />
      <b><p id="song-name">{props.currentTrack.name}</p></b>
      <div id="artists-name">
        {props.currentTrack.artists.map((a, i) => {
          if (i !== props.currentTrack.artists.length - 1) {
            return a.name + ", "
          }
          else {
            return a.name
          }
        })}
      </div>
      <style type="text/css">{`.progress-bar { background-color: #2ebd59; height:5px} .progress{height:5px}`}
      </style>
      <ProgressBar now={props.percentage} />
      <p id="room-key">Room Id: {props.room.roomKey}</p>
    </>
  )
}
export default SongInfo;
