'use client'

import React, { useEffect, useState } from 'react'
import DashboardLayout from "../Layout.js"
import FileWrapperCard from '@/components/Dashboard/common/cards/FileWrapperCard.js'
import api from '@/utils/axios.js'
import useSession from '@/hooks/useSession.js'
import firstName from '@/utils/firstName.js'
import FileViewer from '@/components/modals/FileViewer.js'
import CommonHeader from '@/components/Dashboard/header/index.js'
import FolderWrapperCard from '@/components/Dashboard/common/cards/FolderWrapperCard.js'


const Folders = () => {

  const [folderData, setFolderData] = useState([]);
  const { user } = useSession()

  const getFolderData = async () => {
    const res = await api.get('/api/uploads/folder', { withCredentials: true });
    setFolderData(res.data.folders);
  }

  useEffect(() => {
    getFolderData();
  }, [])

  return (
    <DashboardLayout>
      <div className='px-[2.5rem] mt-[1rem] text-textSecondary flex flex-col gap-[1rem]  ' >
        {/* <h1 className='lowercase cursor-pointer hover:underline underline-offset-1 '>{user && firstName(user?.name) + "/"}</h1> */}
        <CommonHeader prevRoute={'/dashboard/folders'} name={"Folders"} />
        <div className=' flex flex-wrap gap-[1.5rem] mt-[1rem]  ' >
          {folderData && folderData.map((data, index) => {
            return (
              <div key={index} >
                <FolderWrapperCard data={data} key={index} />
              </div>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Folders
