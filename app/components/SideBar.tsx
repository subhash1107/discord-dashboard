'use client'
import { ChartPieIcon } from '@heroicons/react/20/solid'
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon, UsersIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideBar = ({className,onClose}:{className?:string,onClose?:()=>void}) => {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Dashboard', icon: <ChartPieIcon className="h-5 w-5" /> },
    { href: '/members', label: 'Members', icon: <UsersIcon className="h-5 w-5" /> },
    { href: '/messages', label: 'Messages', icon: <ChatBubbleLeftEllipsisIcon className="h-5 w-5" /> },
    { href: '/roles', label: 'Roles', icon: <PencilSquareIcon className="h-5 w-5" /> },
  ]

  return (
    <aside className={`min-h-screen bg-blue-950 dark:bg-[#262a45] text-white flex flex-col items-start ${className}`}>
        <hr className='border-gray-400 w-full'/>
      {links.map(({ href, label, icon },index) => {
        const isActive = pathname === href
        const classNames = `
          flex gap-2 items-center justify-start text-xl p-3 w-full transition 
          hover:bg-[#ffffff62] hover:cursor-pointer 
          ${isActive ? 'border-r-4 border-r-white bg-[#ffffff20]' : 'border-r-4 border-r-transparent'}`
        return (
          <Link key={index} href={href} aria-label={label} onClick={onClose} className={classNames}>
            {icon}
            {label}
          </Link>
        )
      })}
    </aside>
  )
}

export default SideBar
