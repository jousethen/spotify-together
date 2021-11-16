import React from 'react';
import { Image, ProgressBar } from 'react-bootstrap';

const SongInfo = (props) => {
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
      <style type="text/css">{`.progress-bar { background-color: #2ebd59;}`}
      </style>
      <ProgressBar color="#2ebd59" now={props.percentage} />
    </>
  )
}
export default SongInfo;
