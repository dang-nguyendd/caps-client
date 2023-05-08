import { io, Socket } from "socket.io-client";

const SOCKET_SERVER_URL =
  process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || "http://localhost:3003";

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
