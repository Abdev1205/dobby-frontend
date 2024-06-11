'use client'

import React, { useState } from 'react'
import { ApiUrl } from '@/utils/BaseUrl.js'
import Image from 'next/image'
import { FaRegFileLines } from "react-icons/fa6";
import { TbDotsVertical } from "react-icons/tb";
import FileViewer from '@/components/modals/FileViewer';



const FileWrapperCard = ({ data }) => {

  const [fileViewerModel, setFileViewerModel] = useState(false)

  return (
    <>
      <FileViewer
        visible={fileViewerModel}
        onClose={() => setFileViewerModel(false)}
        data={data}

      // callback={callback
      />
      <div className='bg-[#363739] w-[15rem] hover:scale-110 duration-500 cursor-pointer  pt-[1rem] rounded-md shadow-md ' >
        <div onClick={() => setFileViewerModel(true)} className=' w-[15rem] mx-auto px-[1rem]   ' >
          <Image
            src={ApiUrl + "/" + data.path}
            width={300}
            height={300}
            alt={data.name}
            className='object-cover w-[13rem] h-[8rem] shadow-2xl rounded-tl-md rounded-tr-md  '
          />
        </div>
        <div className=' flex justify-between items-center bg-[#272829] px-[1rem] py-[.7rem] rounded-bl-md rounded-br-md ' >
          <div className='flex gap-[.3rem] items-center text-textPrimary text-opacity-[.8] ' >
            <FaRegFileLines />
            <h2 className=' w-[10rem] line-clamp-1 ' >{data?.name}</h2>
          </div>

          <div>
            <TbDotsVertical />
          </div>

        </div>
      </div>

    </>
  )
}

export default FileWrapperCard
