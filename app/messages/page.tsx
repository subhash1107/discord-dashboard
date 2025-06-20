"use client";

import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Message, mockMessages } from "../mockData/message.mockData";
import { AvatarWithFallback } from "../components/AvtarWithFallBack";

const MessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const handleDelete = (id: number) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-white w-full">
      <h2 className="text-2xl font-semibold mb-6">Messages</h2>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="flex items-start gap-4 bg-white dark:bg-gray-900 p-4 rounded shadow relative"
          >
            <AvatarWithFallback src={msg.avatarUrl} alt={msg.username} />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-sm">{msg.username}</span>
              </div>
              <p className="text-sm">{msg.content}</p>
            </div>
            <div className="flex flex-col gap-5 items-end">
              <button
                onClick={() => handleDelete(msg.id)}
                className="hover:cursor-pointer text-gray-500 hover:text-red-500"
                aria-label="Delete Message"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;
