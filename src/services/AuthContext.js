import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const name = "";

  const login = () => {
    console.log("user is logging");
  };

  const signup = () => {};

  const logout = () => {};

  return (
    <AuthContext.Provider value={{ name, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
