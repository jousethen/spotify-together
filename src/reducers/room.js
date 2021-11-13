
export const roomReducer = (state = { room: "", loading: false }, action) => {
  console.log(action);
  switch (action.type) {
    case "CREATE_ROOM_START": {
      return {
        room: state.room,
        loading: true,
      };
    }
    case "CREATE_ROOM": {
      return {
        room: action.room,
        loading: false,
      }
    }
    default:
      return state;
  }
};