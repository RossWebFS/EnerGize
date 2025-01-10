import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useColorScheme } from "react-native";

type ThemeT = "light" | "dark" | null | undefined

type ThemeContextT = {
  theme: ThemeT;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextT | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(systemTheme);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme as ThemeT);
      } else {
        setTheme(systemTheme);
      }
    };
    loadTheme();
  }, [systemTheme]);

  const toggleTheme = useCallback(async () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    await AsyncStorage.setItem("theme", newTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("ThemeContext need to be used inside ThemeProvider");

  return context;
};
