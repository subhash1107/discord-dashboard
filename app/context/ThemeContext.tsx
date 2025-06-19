"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeContextTypes {
  mode: ThemeMode;
  setMode: Dispatch<SetStateAction<ThemeMode>>;
}

const ThemeContext = createContext<ThemeContextTypes | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("system");
  const [hydrated, setHydrated] = useState<boolean>(false);

  const applyTheme = (newMode: ThemeMode) => {
    if (newMode === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("themeMode", "light");
    } else if (newMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      localStorage.removeItem("themeMode");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("themeMode") as ThemeMode | null;
    const initialMode = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "system";
    setMode(initialMode);
    applyTheme(initialMode);
    setHydrated(true); 

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (initialMode === "system") {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (hydrated) {
      applyTheme(mode);
    }
  }, [mode, hydrated]);

  if (!hydrated) return null;

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
