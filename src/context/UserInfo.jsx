import { createContext, useContext, useState, useEffect } from "react";
import { fetchDashboardData } from "../api/DashboardApi";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDashboardData();
        setUser(data.DashboardDataApi?.user?.data || null);
        setMessages(data.DashboardDataApi?.messages?.data || []);
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
