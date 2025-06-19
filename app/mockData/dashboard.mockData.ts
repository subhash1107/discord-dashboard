import {
  UsersIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/solid'
import { ComponentType, SVGProps } from 'react'

export type StatItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  value: string
  label: string
  change: string
}

export const statsData: StatItem[] = [
  {
    icon: UsersIcon,
    value: '2,547',
    label: 'Total Members',
    change: '↗️ +12% from last month',
  },
  {
    icon: UserGroupIcon,
    value: '432',
    label: 'Online Now',
    change: '↗️ +5% from yesterday',
  },
  {
    icon: ShieldCheckIcon,
    value: '15',
    label: 'Active Roles',
    change: '→ No change',
  },
  {
    icon: ChatBubbleLeftEllipsisIcon,
    value: '1,234',
    label: 'Messages Today',
    change: '↗️ +8% from yesterday',
  },
]
