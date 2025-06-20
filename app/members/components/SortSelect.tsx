import React from 'react'

interface SortSelectProps {
  sortValue: 'name' | 'joinedAt'
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
}

const SortSelect = ({ sortValue, onChange, className }:SortSelectProps) => {
  return (
    <select
      value={sortValue}
      aria-label='select to sort'
      onChange={onChange}
      className={`p-2 rounded bg-blue-500 text-white outline-none border dark:border-blue-950 ${className || ''}`}
    >
      <option aria-label='sort by join date' value="joinedAt">Sort by Join Date</option>
      <option value="name" aria-label='sort by name'>Sort by Name</option>
    </select>
  )
}

export default SortSelect
