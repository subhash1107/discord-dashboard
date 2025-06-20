'use client'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { Bars3BottomLeftIcon, BellAlertIcon, PuzzlePieceIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import NavButton from './NavButton'
import ThemeManager from './ThemeManager'
import SideBarOverlay from './SideBarOverlay'
import Link from 'next/link'

const NavBar = () => {
    const [sideBar,setSideBar] = useState<boolean>(false)
  return (
    <nav>
    <SideBarOverlay className={`transition-transform duration-300 ease-in-out ${sideBar ? 'translate-x-0' : '-translate-x-[100%]'}`} onClose={()=>setSideBar(false)}/>
    <div className='bg-blue-500 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex justify-center p-6 transition'>
      <div className='max-w-6xl w-full '>
        <div className='flex justify-between items-center'>
         <div className='flex justify-between gap-4 items-center hover:cursor-pointer'>
            <Bars3BottomLeftIcon aria-label='click to open slidebar' className='w-8 h-8 block md:hidden' onClick={()=>setSideBar(!sideBar)}/>
            <Link href={'/'}><PuzzlePieceIcon aria-label='logo' className='sm:w-12 sm:h-12 w-8 h-8'/></Link>
            <h1 className='text-2xl font-semibold hidden sm:block'>PuzzleZone</h1>
         </div>
         <div className='flex justify-between items-center gap-2'>
            <NavButton className=' rounded-full p-2 bg-[#ffffff48]'>
            <BellAlertIcon aria-label='alert icon' className='sm:w-7 sm:h-7 w-5 h-5'/>
            </NavButton>
            <ThemeManager className='p-2 rounded-full bg-[#ffffff48]' />
            <NavButton className=' rounded-full p-2 bg-[#ffffff48]'>
            <UserCircleIcon className='sm:w-7 sm:h-7 w-5 h-5'/>
            </NavButton>

         </div>
         </div>
      </div>
    </div>
    </nav>
  )
}

export default NavBar