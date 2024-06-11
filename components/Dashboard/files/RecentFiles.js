'use client'

import React, { useState, useEffect } from 'react'
import { MdDelete } from "react-icons/md"
import api from '@/utils/axios'

const RecentFiles = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [recentFileData, setRecentFileData] = useState();
  const [deleteType, setDeleteType] = useState("")
  const [deleteId, setDeleteId] = useState()
  const [deleteModel, setDeleteModel] = useState(false)

  const getRecentData = async () => {
    let res = await api.get('/api/uploads/file', { withCredentials: true })
    // I want to reverse the res so that I can show recent files
    // we are getting files as object so we have to make it array 
    // then we will apply the reverse
    let filesData = res.data.files.reverse();
    setRecentFileData(filesData);
    console.log("files data ", filesData)

  }



  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2); // Extract the last two digits of the year
    return `${month}-${day}-${year}`;
  };
  const formatDuration = (durationString) => {
    if (durationString && typeof durationString === 'string') {
      const [minutes, seconds] = durationString.split(' ').map((part) => parseInt(part, 10) || 0);
      return `${minutes}min ${seconds}sec`;
    }
    return 'N/A'; // Return a default value if the duration is not defined or in the wrong format
  };

  const handleRowCheckboxChange = (row) => {
    const selectedRowId = row._id;
    console.log(selectedRows.length, "length")

    if (selectedRows.includes(selectedRowId)) {
      // Deselect the row if it's already selected
      setSelectedRows(selectedRows.filter((id) => id !== selectedRowId));
    } else {
      // Select the row if it's not selected
      setSelectedRows([...selectedRows, selectedRowId]);
    }

    if (selectedRows.length == 0) {
      setDeleteType("single");
      setDeleteId(`/${selectedRows[0]}`)
      console.log("single", selectedRows[0])
    }
    else {
      setDeleteType("multiple")
    }
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      // Deselect all rows
      setSelectedRows([]);
    } else {
      // Select all rows
      const allRowIds = recentFileData.map((row) => row._id);
      setSelectedRows(allRowIds);
    }

    setSelectAll(!selectAll);
    if (selectedRows.length === 0) {
      setDeleteType("single");
      setDeleteId(`/${selectedRows[0]}`)
    }
    else {
      setDeleteType("multiple")
    }
  };

  useEffect(() => {
    // reloadData()

  }, [deleteModel])

  useEffect(() => {
    getRecentData()
  }, [])

  const isRowSelected = (row) => selectedRows.includes(row._id);
  return (
    <div className=' px-[2.5rem] ' >
      <div className='flex justify-between ' >
        <h2 className='  text-textSecondary text-[1rem] mt-[4rem] mb-[1rem] ' >Recent Files</h2>
        <div onClick={() => setDeleteModel(!deleteModel)} data-tooltip-id="delete-file-data" className={`cursor-pointer hover:scale-[1.3] mt-[2rem] duration-300 ${selectedRows.length > 0 ? "flex " : "hidden"} justify-center items-center w-[1.8rem] h-[1.8rem] rounded-full bg-red-200   `}>
          <MdDelete className=" text-[1.2rem] text-red-700 " />
        </div>
      </div>

      <table className="w-full min-w-full border-collapse ">
        <thead>
          <tr>
            <th className="hidden p-3 border-b-[1px] border-borderPrimary font-bold text-gray-600 uppercase bg-primaryLight lg:table-cell">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
                className=' flex justify-center items-center w-[1.1rem] h-[1.1rem] rounded-full bg-gray'
              />
            </th>
            <th className="p-3 border-b-[1px] border-borderPrimary text-left font-inter font-[400] flex justify-start bg-primaryLight text-[#404040] lg:table-cell">
              Name
            </th>
            <th className="p-3 border-b-[1px] border-borderPrimary text-left font-inter font-[400] flex justify-start bg-primaryLight text-[#404040] lg:table-cell">
              Size
            </th>
            <th className="p-3 border-b-[1px] border-borderPrimary text-left font-inter font-[400] flex justify-start bg-primaryLight text-[#404040] lg:table-cell">
              Shared
            </th>
            <th className="p-3 border-b-[1px] border-borderPrimary text-left font-inter font-[400] flex justify-start bg-primaryLight text-[#404040] lg:table-cell">
              Last Modified
            </th>
          </tr>
        </thead>
        <tbody>
          {recentFileData && recentFileData.map((row, index) => (
            <tr key={index} className=' text-[#c2c0c09a] font-[400] ' >
              <td className="p-3 ">
                <input
                  type="checkbox"
                  checked={isRowSelected(row)}
                  onChange={() => handleRowCheckboxChange(row)}
                  className='flex justify-center items-center w-[1.1rem] h-[1.1rem] rounded-full'
                />
              </td>
              <td className="p-3 line-clamp-1 ">{row.name}</td>
              <td className="p-3 ">{'200kb'}</td>
              <td className="p-3 ">{'3'}</td>
              <td className="p-3 ">{'9-06-24'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentFiles
