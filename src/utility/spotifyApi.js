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
      console.log(json)
      return { email: json.email, displayName: json.displayName }
    });
}
