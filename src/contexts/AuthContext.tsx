import { createContext, PropsWithChildren, useContext, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import useNotifications from "@/src/hooks/useNotifications";
import sendNotification from "@/src/services/notifications";

type AuthContextT = {
  isAuthenticated: boolean;
  handleRegister: () => void;
  error: string | null;
};

export const AuthContext = createContext<AuthContextT | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { expoPushToken } = useNotifications();
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !isEnrolled) {
      setError("Biometric authentication is not available on this device.");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Confirm Verifying",
      cancelLabel: "Cancel",
    });

    if (result.success) {
      sendNotification(expoPushToken, {
        sound: "default",
        title: "Welcome to EnerGize App!",
        body: "Let's start your training right now",
      });
      setError(null);
      setIsAuthenticated(true);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleRegister, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
