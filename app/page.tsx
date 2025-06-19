"use client";
import ThemeManager from "./components/ThemeManager";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-500 flex flex-col items-center justify-center min-h-screen transition-colors">
      <ThemeManager />
    </div>
  );
}
