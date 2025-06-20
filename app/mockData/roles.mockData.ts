export interface Role {
  id: number
  name: string
  color: string
  visible: boolean
}

export const mockRoles: Role[] = [
  {
    id: 1,
    name: 'Admin',
    color: 'bg-red-500',
    visible: true,
  },
  {
    id: 2,
    name: 'Moderator',
    color: 'bg-purple-500',
    visible: true,
  },
  {
    id: 3,
    name: 'Editor',
    color: 'bg-yellow-500',
    visible: false,
  },
  {
    id: 4,
    name: 'Contributor',
    color: 'bg-blue-500',
    visible: true,
  },
  {
    id: 5,
    name: 'Viewer',
    color: 'bg-green-500',
    visible: false,
  },
]
