"use client";

import StatsCard from "./components/StatsCard";
import { statsData } from "./mockData/dashboard.mockData";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800  min-h-screen transition-colors w-full p-5">
      <h1 className="text-2xl font-semibold dark:text-gray-100">Dashboard Overview.</h1>
      <p className="text-gray-400">{"Welcome back! Here's what's happening in your server."}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-6">
        {statsData.map((data, index) => (
          <div key={index} className="rounded-l-lg border-l-4 shadow-lg border-l-blue-500 dark:border-l-[#262a45]">
            <StatsCard
              change={data.change}
              icon={data.icon}
              label={data.label}
              value={data.value}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
