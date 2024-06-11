'use client'

import React, { useEffect, useState } from 'react'
import DashboardLayout from "../Layout.js"
import FileWrapperCard from '@/components/Dashboard/common/cards/FileWrapperCard.js'
import api from '@/utils/axios.js'
import useSession from '@/hooks/useSession.js'
import CommonHeader from '@/components/Dashboard/header/index.js'
import { useSearchParams } from 'next/navigation'


const Storage = () => {

  const [fileData, setFileData] = useState([]);
  const { user } = useSession()
  const [fileViewerModel, setFileViewerModel] = useState(false)
  const searchParams = useSearchParams()

  const search = searchParams.get('search')

  console.log("search params", search)


  const getFileData = async () => {
    try {
      const res = await api.get(`/api/uploads/file?search=${search}`, { withCredentials: true });
      setFileData(res.data.files);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getFileData();
  }, [search])


  return (
    <DashboardLayout>
      <div className='px-[2.5rem] mt-[1rem] text-textSecondary flex flex-col gap-[1rem]  ' >
        {/* <h1 className='lowercase cursor-pointer hover:underline underline-offset-1 '>{user && firstName(user?.name) + "/"}</h1> */}
        <CommonHeader prevRoute={'/dashboard/storage'} />
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

export default Storage
