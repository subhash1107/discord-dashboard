import React from "react";
import { StatItem } from "../mockData/dashboard.mockData.js";

const StatsCard = ({ icon, value, change, label }: StatItem) => {
  const Icon = icon;
  return (
    <div className="bg-white shadow rounded p-4 dark:bg-[#1e2132] text-gray-800 dark:text-white">
      <div className="flex items-center justify-between">
        <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      </div>
      <div className="text-2xl font-bold mt-2">{value}</div>
      <div className="text-sm text-gray-500 dark:text-gray-300">{label}</div>
      <div className="text-sm mt-1 text-green-600 dark:text-green-400">
        {change}
      </div>
    </div>
  );
};

export default StatsCard;
