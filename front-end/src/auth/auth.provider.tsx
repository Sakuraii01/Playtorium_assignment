import { createContext, useState } from "react";
import { UserType } from "../service/repositories/user/type";

interface AuthContextType {
  user: UserType | null;
  setCredential: (user: UserType) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(() => {
    const storedUser = localStorage.getItem("user_id");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  function setCredential(user: UserType) {
    setUser(user);
    localStorage.setItem("user_id", JSON.stringify(user));
  }

  return (
    <AuthContext.Provider value={{ user, setCredential }}>
      {children}
    </AuthContext.Provider>
  );
};
