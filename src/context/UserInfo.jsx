import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Moaz Ahmad",
    id: "123456",
    earnedNGN: 3000000,
    sucessfull: 1500,
    unsucessfull: 1000,
    errors: {
      "Customer errors": 250,
      "Fraud blocks": 200,
      "Bank errors": 100,
      "System errors": 180,
    },
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
