import React from 'react'

interface SearchInputProps {
  searchValue: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const SearchInput = ({ searchValue, onChange, className }:SearchInputProps) => {
  return (
    <input
      type="search"
      aria-label='Search Input field'
      placeholder="Search by name..."
      className={`p-2 border rounded w-full sm:w-auto dark:placeholder:text-gray-300 dark:focus:bg-gray-800 dark:focus:outline-white ${className}`}
      value={searchValue}
      onChange={onChange}
    />
  )
}

export default SearchInput
