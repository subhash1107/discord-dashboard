import React from 'react'

const AddUserModal = ({ className, onClose }: { className?: string; onClose: () => void }) => {
  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center p-5 ${className}`}
      onClick={onClose} 
    >
      <div className="bg-black opacity-70 w-full h-full absolute inset-0 pointer-events-none" />
      <div
        className="relative z-50 bg-white dark:bg-gray-800 rounded p-6 w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <form aria-label="add user form">
          <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">Add New Member</h2>

          <div className="flex flex-col gap-3">
            <input type='text' required aria-label='input name' className="p-2 border rounded" placeholder="Name" />
            <input type='email' required aria-label='input email' className="p-2 border rounded" placeholder="Email" />
            <select aria-label='select to assign role' className="p-2 border rounded">
              <option value='admin'>Admin</option>
              <option value='editor'>Editor</option>
              <option value='viewer'>Viewer</option>
            </select>
            <button
              type="submit"
              aria-label='submit button'
              className="p-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Add Member
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUserModal
