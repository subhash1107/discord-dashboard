"use client";
import { useEffect, useMemo, useState } from "react";
import Pagination from "./components/Pagination";
import { mockMembers } from "../mockData/members.mockData";
import { AvatarWithFallback } from "./components/AvtarWithFallBack";
import SearchInput from "./components/SearchInput";
import FilterSelect from "./components/FilterSelect";
import SortSelect from "./components/SortSelect";
import AddUserModal from "./components/AddUserModal";

const MembersTable = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [roleFilter, setRoleFilter] = useState("All");
  const [sortBy, setSortBy] = useState<"name" | "joinedAt">("joinedAt");
  const [currentPage, setCurrentPage] = useState(1);
  console.log(modalOpen)
  const filtered = useMemo(() => {
    let data = mockMembers.filter((member) =>
      member.name.toLowerCase().includes(search.toLowerCase())
    );
    if (roleFilter !== "All")
      data = data.filter((member) => member.role === roleFilter);
    return data.sort((a, b) =>
      sortBy === "name"
        ? a.name.localeCompare(b.name)
        : new Date(b.joinedAt).getTime() - new Date(a.joinedAt).getTime()
    );
  }, [search, roleFilter, sortBy]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedData = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, roleFilter, sortBy]);

  return (
    <div className="bg-gray-50 dark:bg-gray-700  min-h-screen transition-colors w-full p-5 dark:text-white">
      <h2 className="text-xl font-semibold mb-4">Members</h2>

      <div className="flex flex-wrap items-center gap-4 mb-4">
        <SearchInput
          searchValue={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FilterSelect
          filterValue={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        />
        <SortSelect
          sortValue={sortBy}
          onChange={(e) => setSortBy(e.target.value as "name" | "joinedAt")}
        />
        <button
          className="p-2 rounded bg-blue-500 text-white outline-none  dark:border-blue-950"
          aria-label="add user"
          onClick={() => setModalOpen(true)}
        >
          Add User
        </button>
        {modalOpen&&<AddUserModal onClose={()=>setModalOpen(false)} />}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-blue-500 dark:bg-blue-950">
            <tr>
              {tableHead.map((head, index) => (
                <th key={index} className="px-4 py-2">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((m) => (
              <tr
                key={m.id}
                className="border-b border-b-gray-600 hover:bg-blue-50 dark:hover:bg-[#262a45] transition-all"
              >
                <td className="px-4 py-2">
                  <AvatarWithFallback src={m.avatarUrl} alt={m.name} />
                </td>
                <td className="px-4 py-2 font-medium">{m.name}</td>
                <td className="px-4 py-2">{m.email}</td>
                <td className="px-4 py-2">{m.role}</td>
                <td className="px-4 py-2">{m.joinedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default MembersTable;

const tableHead = ["Avatar", "Name", "Email", "Role", "Joined At"];

const itemsPerPage = 6;
