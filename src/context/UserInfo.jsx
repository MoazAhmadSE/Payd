import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Moaz Ahmad",
    id: "123456",
    earnedNGN: 3000000,
    sucessfull: 1500,
    unsucessfull: 100,
    errors: {
      "Customer errors": 5,
      "Fraud blocks": 2,
      "Bank errors": 1,
      "System errors": 8,
    },
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
