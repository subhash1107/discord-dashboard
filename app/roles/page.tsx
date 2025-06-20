'use client'
import { useState } from 'react'
import { mockRoles, Role } from '../mockData/roles.mockData'


const RolesPage = () => {
  const [roles, setRoles] = useState<Role[]>(mockRoles)

  const toggleVisibility = (id: number) => {
    setRoles(prev =>
      prev.map(role =>
        role.id === id ? { ...role, visible: !role.visible } : role
      )
    )
  }

  const renameRole = (id: number, newName: string) => {
    setRoles(prev =>
      prev.map(role => (role.id === id ? { ...role, name: newName } : role))
    )
  }

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-white w-full">
      <h2 className="text-2xl font-semibold mb-6">Server Roles</h2>
      <div className="space-y-4">
        {roles.map(role => (
          <div
            key={role.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white dark:bg-gray-900 p-4 rounded shadow"
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-0">
              <div className={`w-4 h-4 rounded-full ${role.color}`} />
              <input
                className="bg-transparent border-b outline-none px-2"
                value={role.name}
                onChange={(e) => renameRole(role.id, e.target.value)}
              />
            </div>
            <div>
              <label className="flex items-center gap-2">
                <span className="text-sm">Visible</span>
                <input
                  type="checkbox"
                  checked={role.visible}
                  onChange={() => toggleVisibility(role.id)}
                  className="w-5 h-5"
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RolesPage
