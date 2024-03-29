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
        display_name: json.display_name,
        spotify_id: json.id
      }

      localStorage.setItem("spotifyUser", json.id);
      localStorage.setItem("spotifyAuthToken", token)

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

    });
}
