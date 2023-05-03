import { io, Socket } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:3003"; // Replace with your Socket.IO server URL

let socket: Socket | null;

export const initSocket = (): void => {
  if (!socket) {
    socket = io(SOCKET_SERVER_URL, {
      transports: ["websocket"],
      upgrade: false,
    });
  }
};

export const getSocket = (): Socket | undefined => {
  if (!socket) {
    console.error("Socket not initialized. Call initSocket() first.");
    return;
  }
  return socket;
};

export const closeSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
