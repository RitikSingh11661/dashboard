import React, { useState, useMemo } from 'react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

interface TableData {
  name: string;
  age: number;
  role: string;
}

interface DataTableProps {
  data: TableData[];
}

const DataTable = ({ data }: DataTableProps) => {
  const [sortConfig, setSortConfig] = useState<{ key: keyof TableData; direction: 'ascending' | 'descending' } | null>(null);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Default value

  const filteredData = useMemo(() => {
    return data.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.role.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter]);

  const sortedData = useMemo(() => {
    let sortableData = [...filteredData];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }
    return sortableData;
  }, [filteredData, sortConfig]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const requestSort = (key: keyof TableData) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') direction = 'descending';
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: keyof TableData) => {
    if (!sortConfig) return <FaSort className="inline-block" />;
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? <FaSortUp className="inline-block" /> : <FaSortDown className="inline-block" />;
    }
    return <FaSort className="inline-block" />;
  };

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="mb-2 md:mb-0 md:flex-1">
          <input 
            type="text" 
            className="p-2 border border-gray-300 text-black rounded w-full md:w-auto" 
            onChange={(e) => setFilter(e.target.value)} 
            placeholder="Filter by name or role" 
            value={filter}
          />
        </div>
        <div>
          <label htmlFor="itemsPerPage" className="mr-2 text-sm font-medium text-gray-700">Items per page:</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="p-2 border border-gray-300 text-black rounded"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={18}>18</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('name')}
              >
                Name {getSortIcon('name')}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('age')}
              >
                Age {getSortIcon('age')}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('role')}
              >
                Role {getSortIcon('role')}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentData.length > 0 ? (
              currentData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{item.age}</td>
                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{item.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">No matching records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
        <div className="flex justify-center md:justify-start mb-2 md:mb-0">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="text-sm text-gray-600">Page {currentPage} of {totalPages}</div>
      </div>
    </div>
  );
};

export default DataTable;