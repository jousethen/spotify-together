export const fetchUser = (token) => {
  let user;

  fetch('https://api.spotify.com/v1/me', {
    method: 'GET', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {

      user = {
        email: json.email,
        display_name: json.display_name
      }


      // Make POST to Backend to create or find user based on email
      fetch(`${process.env.REACT_APP_API_HOST}/api/users/new`, {
        method: 'POST', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: user
        })
      })

      //Store in Local Storage for later use
      localStorage.setItem("spotifyUser", json.email);
    });
}

export const createRoom = (hostToken, email) => {
  // Make POST to Backend to create or find user based on email
  dispatchEvent({ type: "CREATE_ROOM_START" })
  fetch(`${process.env.REACT_APP_API_HOST}/api/rooms/new`, {
    method: 'POST', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      room: {
        room_key: generateRoomKey(),
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


const generateRoomKey = () => {
  let text = '';
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 6; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};