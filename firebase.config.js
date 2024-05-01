import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBKTSEO8DkNoMoGvUFQzDxURMkyZuEVZZ4",
  authDomain: "meals-4a6c2.firebaseapp.com",
  projectId: "meals-4a6c2",
  storageBucket: "meals-4a6c2.appspot.com",
  messagingSenderId: "628175561935",
  appId: "1:628175561935:web:3a8b256a0b813073af03ba",
};

export const getFirebaseConfig = () => {
  const app = initializeApp(firebaseConfig);

  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
};
