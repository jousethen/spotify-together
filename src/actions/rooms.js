export function createRoom() {
  return {
    type: "CREATE_ROOM"
  }
}

export function deleteRoom(roomKey) {
  return {
    type: "REMOVE_ROOM",
    roomKey: roomKey
  }
}