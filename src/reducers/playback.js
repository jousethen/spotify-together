
export const playbackReducer = (state = { track: {}, loading: false }, action) => {
  switch (action.type) {
    case "LOADING_CURRENT_TRACK":
      return {
        ...state,
        track: state.track,
        loading: true,
      };
    case "LOAD_CURRENT_TRACK_SUCCESS":
      return {
        ...state,
        track: action.track,
        loading: false,
      }
    default:
      return state;
  }
};
