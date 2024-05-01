import React, { useState, useEffect, createContext } from "react";
import {
  loginRequest,
  logoutRequest,
  registerRequest,
} from "./authentication.service";
import { onAuthStateChanged, getAuth } from "firebase/auth";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
        setIsLoading(false);
        // ...
      } else {
        setIsLoading(false);
      }
    });
    return () => {
      unsubscribe();
      setError(null);
      setIsLoading(false);
    };
  }, []);

  const onLogin = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      const resUser = await loginRequest(email, password);
      setUser(resUser.user);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  const onRegister = async (email, password, repeatPassword) => {
    setIsLoading(true);
    setError(null);
    if (password !== repeatPassword) {
      setError({
        code: "Password_Does_Not_Match",
      });
      setIsLoading(false);
      return;
    }

    try {
      const resUser = await registerRequest(email, password);
      setUser(resUser.user);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  const onLogout = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await logoutRequest();
    } catch (err) {
      setError(err);
    } finally {
      setUser(null);
      setError(null);
      setIsLoading(false);
    }
  };
  //useEffect(() => {
  //  onLogout();
  // }, []);
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
