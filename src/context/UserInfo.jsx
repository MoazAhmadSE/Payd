// import { createContext, useContext, useState, useEffect } from "react";
// import { fetchDashboardData } from "../api/DashboardApi";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchDashboardData();
//         setUser(data.DashboardDataApi?.user?.data || null);
//         setMessages(data.DashboardDataApi?.messages?.data || []);
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//       } finally {
//         setTimeout(() => {
//           setLoading(false);
//         }, 1000);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser, messages, loading }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => useContext(UserContext);





// import { createContext, useContext, useState, useEffect } from "react";


// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   console.log(user, messages)


//   useEffect(() => {
//     setLoading(true);
//     const Socket = new WebSocket("ws://localhost:8080");
//     Socket.addEventListener("open", () => {
//       console.log("Connected to WebSocket server");
//       Socket.send("Hello from frontend!");
//     });
//     Socket.addEventListener("message", (event) => {
//       const { type, payload } = JSON.parse(event.data);
//       const dataType = {
//         messages: () => setMessages(payload.data),
//         userData: () => setUser(payload.data),
//       };
//       if (dataType[type]) {
//         dataType[type]();
//       } else {
//         console.log(event);
//       }
//     });
//     setLoading(false);
//   },[]);

//   return (
//     <UserContext.Provider value={{ user, setUser, messages, loading }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => useContext(UserContext);
