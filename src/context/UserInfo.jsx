import { createContext, useContext, useState, useEffect } from "react";
import { DashboardApi } from "../api/DashboardApi";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await DashboardApi("user");
        const datam = await DashboardApi("messages");
        setUser(data?.data || null);
        setMessages(datam?.data || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, messages, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
