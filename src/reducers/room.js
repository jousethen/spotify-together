
const catsReducer = (state = { room: "", loading: false }, action) => {
  switch (action.type) {
    case "CREATE_ROOM_START": {
      return {
        room: state.room,
        creating: true,
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