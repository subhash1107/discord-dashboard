import React from 'react'

interface FilterSelectProps {
  filterValue: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
}

const FilterSelect: React.FC<FilterSelectProps> = ({ filterValue, onChange, className }) => {
  return (
    <select
      value={filterValue}
      aria-label='select option to filter users'
      onChange={onChange}
      className={`p-2 rounded bg-blue-500 text-white outline-none  dark:border-blue-950 ${className}`}
    >
      <option aria-label='all roles' value="All">All Roles</option>
      <option aria-label='admin' value="Admin">Admin</option>
      <option aria-label='editor' value="Editor">Editor</option>
      <option aria-label='viewer' value="Viewer">Viewer</option>
    </select>
  )
}

export default FilterSelect
