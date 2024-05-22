import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const updateCurrentUserWithWorkerData = (workerData) => {
    setCurrentUser((prevUser) => {
      if (prevUser) {
        const updatedUser = {
          ...prevUser,
          ...workerData
        };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        return updatedUser;
      }
      return prevUser;
    });
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const value = {
    currentUser,
    login,
    logout,
    updateCurrentUserWithWorkerData
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

