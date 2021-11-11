export const fetchUser = (token) => {
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

      let user = {
        email: json.email,
        display_name: json.display_name
      }


      // Make POST to Backend to create or find user based on email
      fetch(`${process.env.REACT_APP_HOST}api/users/new`, {
        method: 'POST', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: user
        })
      })

      //Store in Local Storage for later use
      localStorage.setItem("spotifyUser", json.display_name);
    });
}
