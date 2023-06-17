import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import UserModel from "@/models/userModel";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import AuthContextModel from "@/models/authContextModel";

export const AuthContext = createContext<AuthContextModel | null>(null);
export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserModel | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || !user.uid || !user.displayName || !user.email)
        return setUser(null);
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      });
    });
    return () => unsubscribe();
  }, []);

  const signup = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  const login = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };
  const logout = async () => {
    setUser(null);
    return await signOut(auth);
  };

  const forgotPassword = async (email: string) => {
    return await sendPasswordResetEmail(auth, email);
  };
  console.log(user);

  return (
    <AuthContext.Provider
      value={{ user, signup, login, logout, forgotPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
