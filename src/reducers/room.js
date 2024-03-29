export const roomReducer = (state = { room: "", loading: false }, action) => {
  switch (action.type) {
    case "CREATE_ROOM_START":
      return {
        ...state,
        room: state.room,
        loading: true,
        error: false,
      };
    case "CREATE_ROOM":
      return {
        ...state,
        room: action.room,
        loading: false,
      }
    case "DELETE_ROOM_START":
      return {
        ...state,
        loading: true,
      }

    case "DELETE_ROOM":
      return {
        ...state,
        room: null,
        loading: false,
      }

    case "SEARCHING_FOR_ROOM":
      return {
        ...state,
        room: null,
        loading: true,
        error: false
      }

    case "ROOM_FOUND":
      return {
        ...state,
        room: action.room,
        loading: false,
        error: false
      }

    case "ROOM_NOT_FOUND":
      return {
        ...state,
        loading: false,
        error: true,
        room: null
      }

    case "EXIT_ROOM":
      return {
        ...state,
        loading: false,
        error: false,
        room: null
      }
    default:
      return state;
  }
};
