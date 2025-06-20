export interface Message {
  id: number;
  username: string;
  avatarUrl: string;
  timestamp: string;
  content: string;
}

export const mockMessages: Message[] = [
  {
    id: 1,
    username: 'JaneDoe',
    avatarUrl: 'https://i.pravatar.cc/100?img=5',
    timestamp: '2025-06-19 12:30',
    content: 'Welcome to the server! 😊',
  },
  {
    id: 2,
    username: 'Subhash',
    avatarUrl: 'https://i.pravatar.cc/100?img=3',
    timestamp: '2025-06-19 12:32',
    content: 'Glad to be here, thanks!',
  },
  {
    id: 3,
    username: 'Bot',
    avatarUrl: 'https://i.pravatar.cc/100?img=10',
    timestamp: '2025-06-19 12:35',
    content: 'Reminder: Complete your onboarding tasks!',
  },
];
