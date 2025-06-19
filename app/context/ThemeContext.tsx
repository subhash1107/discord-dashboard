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

interface ThemeContextTypes {
  mode: ThemeMode,
  setMode: Dispatch<SetStateAction<ThemeMode>>
}
export type ThemeMode = 'light' | 'dark' | 'system'

const ThemeContext = createContext<ThemeContextTypes | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('system');

  const applyTheme = (newMode:ThemeMode) =>{
    if(newMode === 'light'){
        document.documentElement.classList.remove('dark')
        localStorage.setItem('themeMode','light')
    } else if(newMode === 'dark'){
        document.documentElement.classList.add('dark')
        localStorage.setItem('themeMode','dark')
    } else {
        const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        document.documentElement.classList.toggle('dark',preferDark)
        localStorage.removeItem('themeMode')
    }
  }
  useEffect(() => {
    const storedTheme = localStorage.getItem('themeMode')
    const initialMode = storedTheme === 'dark' || storedTheme ==='light' ? storedTheme : 'system' 
    setMode(initialMode)
    applyTheme(initialMode)
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme : dark)')
    const handleChange = (e:MediaQueryListEvent) =>{
        document.documentElement.classList.toggle('dark',e.matches)
    }

    mediaQuery.addEventListener('change',handleChange)
    return ()=> mediaQuery.removeEventListener('change',handleChange)
}, []);

useEffect(()=>{
    applyTheme(mode)
},[mode])
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
