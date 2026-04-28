import { initializeApp } from "firebase/app";
import { getRemoteConfig, fetchAndActivate, getBoolean } from "firebase/remote-config";

const firebaseConfig = {
  apiKey: "AIzaSyB5hoq1knVexMhwtOmp_ghptR_GF5VaJ2U",
  authDomain: "gain-real-state.firebaseapp.com",
  projectId: "gain-real-state",
  storageBucket: "gain-real-state.firebasestorage.app",
  messagingSenderId: "300138469055",
  appId: "1:300138469055:web:8591f053a4047fd594d80a",
  measurementId: "G-RGTLT4ZYHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Remote Config
const remoteConfig = getRemoteConfig(app);

// ⚡ Settings: 1 minute ka cache (taki changes jaldi dikhein)
remoteConfig.settings.minimumFetchIntervalMillis = 60000;

// Ye function hum App.js mein use karenge
export const checkMaintenanceMode = async () => {
  try {
    await fetchAndActivate(remoteConfig);
    const isMaintenance = getBoolean(remoteConfig, "is_maintenance");
    return isMaintenance;
  } catch (err) {
    console.error("Firebase error:", err);
    return false; // Error aaye toh site chalti rahegi
  }
};
