'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { ApiUrl } from '@/utils/BaseUrl';
import { MdLockOutline, MdGroup, MdPublic, MdClose } from "react-icons/md"

const FileViewer = (
  { visible,
    onClose = () => { },
    callback = () => { },
    data
  }
) => {

  // console.log("data in viewer", data);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);
  if (!visible) return null;
  return (
    <div
      id="background"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.id == "background") onClose();
      }}
    >

      <div className='  relative rounded-md flex flex-col justify-center min-w-[35rem] h-[30rem] px-[2.5rem] py-[2.5rem]  ' >

        <div className=' w-[100%] relative h-[30rem] mx-auto px-[1rem]   ' >
          <div onClick={(e) => onClose()} className=' absolute flex justify-center items-center w-[2rem] h-[2rem] rounded-[50%] border-[1px] text-black bg-white right-[-2rem] top-[-2rem] border-transparent shadow-md hover:text-black hover:bg-primary hover:border-black cursor-pointer ' >
            <MdClose className=' text-[1.3rem]  ' />
          </div>

          <Image
            src={ApiUrl + "/" + data?.path}
            width={1000}
            height={1000}
            alt={"abhay"}
            className=' object-contain w-[100%] h-[100%]  rounded-tl-md rounded-tr-md  '
          />
        </div>






      </div>



    </div>
  )
}

export default FileViewer
