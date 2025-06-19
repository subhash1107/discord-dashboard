"use client";
import ThemeManager from "./components/ThemeManager";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-500  min-h-screen transition-colors">
      <ThemeManager />
    </div>
  );
}
