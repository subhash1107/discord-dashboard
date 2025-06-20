"use client";
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { ThemeMode, useTheme } from "../context/ThemeContext";
import NavButton from "./NavButton";

const ThemeManager = ({ className }: { className?: string }) => {
  const [optionToggle, setOptionToggle] = useState<boolean>(false);
  const { mode, setMode } = useTheme()!;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOptionToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOpenToggle = () => setOptionToggle((prev) => !prev);

  const options: {
    value: ThemeMode;
    icon: React.JSX.Element;
  }[] = [
    {
      value: "light",
      icon: <SunIcon className="sm:w-7 sm:h-7 w-5 h-5 text-yellow-300" />,
    },
    {
      value: "dark",
      icon: <MoonIcon className="sm:w-7 sm:h-7 w-5 h-5 text-gray-300" />,
    },
    {
      value: "system",
      icon: (
        <ComputerDesktopIcon className="sm:w-7 sm:h-7 w-5 h-5 text-blue-400" />
      ),
    },
  ];

  return (
    <div className="relative dark:text-gray-200" ref={containerRef}>
      <NavButton
        onClick={handleOpenToggle}
        className={`hover:cursor-pointer ${className}`}
      >
        <span>{options.find((option) => option.value === mode)?.icon}</span>
      </NavButton>

      {optionToggle && (
        <ul className="absolute mt-2 border border-gray-200 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 transition-all">
          {options.map((option, index) => (
            <li
              key={index}
              aria-label={option.value}
              className="inline-flex gap-2 items-center hover:bg-gray-100 rounded-md w-full p-1 hover:cursor-pointer dark:hover:bg-gray-800 transition"
              onClick={() => {
                setOptionToggle(false);
                setMode(option.value);
              }}
            >
              {option.icon}
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeManager;
