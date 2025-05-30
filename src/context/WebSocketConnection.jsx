import { createContext, useContext, useEffect, useRef, useState } from "react";
import Loading from "../components/Loading";

const WebSocketContext = createContext();

export const WebSocketConnectionProvider = ({ children }) => {
  const socketRef = useRef();
  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const Socket = new WebSocket("ws://localhost:8080");
    Socket.onopen = () => {
      console.log("WebSocket connected Sucessfully", socketRef.current);
    };
    Socket.onerror = (err) => {
      console.error("❌ WebSocket error:", err);
    };

    socketRef.current = Socket;
    setSocket(Socket);
    setLoading(false);
    return () => {
      Socket.close();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={ socketRef.current}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => useContext(WebSocketContext);
