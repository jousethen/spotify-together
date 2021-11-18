export const fetchPlayingTrack = (hostToken, isHost) => {
  // Going to use this action for both pulling and syncing
  let track;

  return (dispatch) => {
    dispatch({ type: "LOADING_CURRENT_TRACK" });
    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      method: 'GET', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + hostToken
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json)
        track = {
          artists: json.item.artists,
          album: {
            image: json.item.album.images[0].url,
            name: json.item.album.name
          },
          id: json.item.id,
          name: json.item.name,
          duration_ms: json.item.duration_ms,
          progress_ms: json.progress_ms
        }
        dispatch({ type: "LOAD_CURRENT_TRACK_SUCCESS", track: track });

        //Sync track after track has been obtained
        if (isHost === false) {
          dispatch({ type: "SYNC_BEGIN", track: track });
          syncTrack(
            localStorage.getItem("spotifyAuthToken"),
            json.item.album.uri,
            json.item.track_number,
            json.progress_ms
          );
        }

      })
      .catch((error) => {
        dispatch({ type: "NO_TRACK" })
      });
  }
}

const syncTrack = (token, album, track, position) => {
  fetch('https://api.spotify.com/v1/me/player/play', {
    method: 'PUT', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({
      "context_uri": album,
      "offset": {
        "position": track - 1
      },
      "position_ms": position
    })
  });
}