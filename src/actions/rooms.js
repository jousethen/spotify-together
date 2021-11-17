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
        spotify_id: localStorage.getItem("spotifyUser"),
      })
    })
      .then((responseJSON) => {
        return responseJSON.json()
      })

      .then((json) => {
        console.log(json)
        //Complete Dispatch of room creation
        dispatch({
          type: "CREATE_ROOM",
          room: {
            roomKey: json.room.room_key,
            hostToken: hostToken,
            host: json.room.host
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
/* ----------------------------------------------------*/
export const deleteRoom = (roomKey) => {
  return (dispatch) => {
    // Kick of dispatch to start room creation
    dispatch({ type: "DELETE_ROOM_START" });

    fetch(`${process.env.REACT_APP_API_HOST}/api/rooms/delete`, {
      method: 'POST', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        room_key: roomKey,
      })
    })
      .then((responseJSON) => {
        return responseJSON.json()
      })

      .then((json) => {
        //Complete Dispatch of room creation
        dispatch({
          type: "DELETE_ROOM",
        });
      });
  };
};

export const findRoom = (roomKey) => {
  return (dispatch) => {
    // Kick of dispatch to start room creation
    dispatch({ type: "SEARCHING_FOR_ROOM" });
    console.log(roomKey)
    fetch(`${process.env.REACT_APP_API_HOST}/api/rooms/${roomKey}`, {
      method: 'POST', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        room_key: roomKey,
      })
    })
      .then((responseJSON) => {
        return responseJSON.json()
      })

      .then((json) => {
        //Complete Dispatch of room creation
        console.log(json)
        dispatch({
          type: "ROOM_FOUND",
          room: {
            roomKey: json.room.room_key,
            hostToken: json.room.host_token,
            host: json.room.host
          }
        });
      })
      .catch((error) => {
        console.log(error, "ERROR NOT FOUND I EGUES")
      })
  };
};

