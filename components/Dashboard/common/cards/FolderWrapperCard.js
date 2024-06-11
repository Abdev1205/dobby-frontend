import React from 'react'
import { LuFolder } from "react-icons/lu";
import { useRouter } from 'next/navigation';


const FolderWrapperCard = ({ data }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/dashboard/folders/${data._id}`)} className={` shadow-2xl hover:scale-110  bg-[#363739] duration-500 flex flex-col gap-[.7rem] cursor-pointer w-[10rem] px-[1rem] py-[1rem] rounded-md `} >
      <div className='flex justify-center gap-[1rem] '  >
        <div className={`flex justify-center bg-[#FF4646] text-[1.3rem] rounded-md items-center  size-[2.6rem] text-textPrimary  `} >
          <LuFolder />
        </div>
      </div>
      <div className=' flex flex-col gap-[.5rem] ' >
        <div>
          <h2 className=' text-textSecondary text-opacity-80 text-[.85rem] text-center ' >{data.name}</h2>
        </div>
      </div>
    </div>
  )
}

export default FolderWrapperCard
