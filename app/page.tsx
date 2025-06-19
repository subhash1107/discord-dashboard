'use client'
import { ThemeMode, useDarkMode } from "./context/ThemeContext";

export default function Home() {
  const {mode,setMode} = useDarkMode()!
  const handleThemeChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    setMode(e.target.value as ThemeMode) 
  }
  return (
    <div className="bg-white dark:bg-gray-500 flex flex-col items-center justify-center min-h-screen transition-colors">
      Hii
      {mode}
      <select onChange={(e)=>handleThemeChange(e)}>
        <option value={'light'}>light</option>
        <option value={'dark'}>dark</option>
        <option value={'system'}>system</option>
      </select>
    </div>
  );
}
