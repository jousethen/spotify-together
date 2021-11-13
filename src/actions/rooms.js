import { createRoom } from './utility/spotifyApi'

export const createRoom = (hostToken) => {
  // Make POST request to create Room
  dispatchEvent({ type: "CREATE_ROOM_START" });
  let roomKey = generateRoomKey();

  fetch(`${process.env.REACT_APP_API_HOST}/api/rooms/new`, {
    method: 'POST', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      room: {
        room_key: roomKey,
        host_token: hostToken,
        email: localStorage.getItem("spotifyUser"),
      }
    })
  })
    .then((responseJSON) => {
      dispatchEvent({
        type: "CREATE_ROOMS",
        room: {
          roomKey,
          hostToken
        }
      });
    });
}

/* ----------------------------------------------------*/
const generateRoomKey = () => {
  let text = '';
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 6; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export function deleteRoom(roomKey) {
  return {
    type: "REMOVE_ROOM",
    roomKey: roomKey
  }
}