import React from "react";
import { getApps } from "firebase/app";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { getFirebaseConfig } from "./firebase.config";

if (!getApps().length) {
  getFirebaseConfig();
}
export default function App() {
  const [loadOswald] = useOswald({
    Oswald_400Regular,
  });

  const [loadLoto] = useLato({
    Lato_400Regular,
  });

  if (!loadOswald || !loadLoto) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
