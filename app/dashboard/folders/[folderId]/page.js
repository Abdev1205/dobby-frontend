'use client'

import React, { useEffect, useState } from 'react'
import DashboardLayout from "../../Layout.js"
import FileWrapperCard from '@/components/Dashboard/common/cards/FileWrapperCard.js'
import api from '@/utils/axios.js'
import useSession from '@/hooks/useSession.js'
import firstName from '@/utils/firstName.js'
import FileViewer from '@/components/modals/FileViewer.js'
import CommonHeader from '@/components/Dashboard/header/index.js'
import { useSearchParams } from 'next/navigation.js'


const Page = ({ params }) => {
  const folderId = params.folderId;

  const [fileData, setFileData] = useState([]);
  const { user } = useSession()
  const [fileViewerModel, setFileViewerModel] = useState(false)
  const [folderName, setFolderName] = useState('')
  const searchParams = useSearchParams()

  const search = searchParams.get('search')

  const getFolderName = async () => {
    try {
      let res = await api.get(`/api/uploads/folders/${folderId}`, { withCredentials: true });
      // console.log("res data name", res.data.folder.name);
      setFolderName(res.data.folder.name)
    } catch (error) {

    }
  }

  const getFileData = async () => {
    try {
      let res = await api.get(`/api/uploads/file?folderId=${folderId}&search=${search}`, { withCredentials: true });
      // console.log("res data  fodler id", res.data.files);
      setFileData(res.data.files)

    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getFolderName()
  }, [])
  useEffect(() => {
    getFileData()
  }, [search])

  return (
    <DashboardLayout>
      <div className='px-[2.5rem] mt-[1rem] text-textSecondary flex flex-col gap-[1rem]  ' >
        {/* <h1 className='lowercase cursor-pointer hover:underline underline-offset-1 '>{user && firstName(user?.name) + "/"}</h1> */}
        <CommonHeader prevRoute={`/dashboard/folders/${folderId}`} folderId={folderId} name={folderName} />
        <div className=' flex flex-wrap gap-[1.5rem] mt-[1rem]  ' >
          {fileData && fileData.map((data, index) => {
            return (
              <div key={index} >
                <FileWrapperCard data={data} key={index} />
              </div>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Page
