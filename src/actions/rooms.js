export const createRoom = (hostToken) => {
  return (dispatch) => {
    // Kick of dispatch to start room creation
    dispatch({ type: "CREATE_ROOM_START" });
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
        },
        email: localStorage.getItem("spotifyUser"),
      })
    })
      .then((responseJSON) => {
        //Complete Dispatch of room creation
        dispatch({
          type: "CREATE_ROOMS",
          room: {
            roomKey,
            hostToken,
          }
        });
      });
  };
};

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