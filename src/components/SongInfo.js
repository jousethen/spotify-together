import React from 'react';
import { Image } from 'react-bootstrap';

const SongInfo = (props) => {
  console.log(props)
  return (
    <Image className="album_art" src={props.currentTrack.album.image} rounded />
  )
}
export default SongInfo;
