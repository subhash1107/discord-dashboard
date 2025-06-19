'use-client'
import { ComputerDesktopIcon, MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { ThemeMode, useTheme } from "../context/ThemeContext";
import useWidth from "../hooks/useWidth";

const ThemeManager = () => {
  const [optionToggle, setOptionToggle] = useState<boolean>(false);
  const {mode,setMode} = useTheme()!
  const width = useWidth()

  const handleOpenToggle = () => setOptionToggle(!optionToggle);

  const options: {
    label: string;
    value: ThemeMode;
    icon: React.JSX.Element;
  }[] = [
    { label: "Light", value: "light", icon: <SunIcon className="w-5 h-5 text-yellow-300"/> },
    { label: "Dark", value: "dark", icon: <MoonIcon className="w-5 h-5 text-gray-300" /> },
    { label: "System", value: "system", icon: <ComputerDesktopIcon className="w-5 h-5 text-blue-400" /> },
  ];
  return (
    <div className="inline-block relative dark:text-gray-200">
      <button onClick={handleOpenToggle}
      className="flex gap-2 items-center w-full lg:rounded-md rounded-full lg:px-3 lg:py-2 p-4 border border-gray-100 bg-white hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-gray-700 dark:border-gray-600 transition"
      >
        <span>{options.find((option)=>option.value===mode)?.icon}</span>
        {width!==null&&width>768&&<span>{options.find((option)=>option.value===mode)?.label}</span>}
      </button>
      {optionToggle&&(
        <ul className="absolute border border-gray-200 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 transition-all ">
            {options.map((option,index)=>(
                <li key={index} className="inline-flex gap-2 items-center hover:bg-gray-100 rounded-md w-full p-1 hover:cursor-pointer dark:hover:bg-gray-800 dark:bg-gray-700  transition"
                onClick={()=>{setOptionToggle(false);setMode(option.value)}}
                >
                 {option.icon}
                 {option.value}
                </li>
            ))}
        </ul>
      )}
      {mode}
    </div>
  );
};

export default ThemeManager;
