import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // при вході на сайт витягнемо з localStorage
  useEffect(() => {
    const saved = localStorage.getItem("f1shop_user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const register = (data) => {
    // data: {name, email, password}
    setUser({ name: data.name, email: data.email });
    localStorage.setItem("f1shop_user", JSON.stringify({ name: data.name, email: data.email }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("f1shop_user");
  };

  return (
    <AuthContext.Provider value={{ user, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
