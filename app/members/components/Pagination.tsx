'use client'
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-4" aria-label='pagination component'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label='previous page'
        className="p-2 bg-[#c7c7c7a2] rounded-full hover:cursor-pointer hover:bg-[#aeaeaed0] disabled:opacity-50"
      >
        <ArrowLeftIcon className='w-5 h-5' />
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          aria-label={`${i+1} page`}
          className={`w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer  transition ${currentPage === i + 1 ? 'bg-blue-500  text-white' : 'bg-[#c7c7c7a2] hover:bg-[#aeaeaed0]'}`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        aria-label='next page'
        disabled={currentPage === totalPages}
        className="p-2 bg-[#c7c7c7a2] rounded-full hover:cursor-pointer hover:bg-[#aeaeaed0] disabled:opacity-50"
      >
        <ArrowRightIcon className='w-5 h-5' />
      </button>
    </div>
  )
}

export default Pagination;
