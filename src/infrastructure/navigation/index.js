import React, { useContext } from "react";
import { AppNavigation } from "./app.navigation";
import { AccountNavigation } from "./account.navigation";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return isAuthenticated ? <AppNavigation /> : <AccountNavigation />;
};
