'use client'

import React from 'react'
import PanelFooter from './PanelFooter'
import PanelHeader from './PanelHeader'
import SingleLinks from './SingleLinks'

import { MdOutlineWbCloudy } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbLayoutGridFilled } from "react-icons/tb";
import { LuFolder } from "react-icons/lu";

import { useRouter } from 'next/navigation'






const Panel = () => {
  const router = useRouter()


  return (
    <>
      <div className=' bg-transparent  relative border-r-[1px] border-borderPrimary w-[18rem] h-[100vh] flex flex-col justify-between ' >
        <div>
          <PanelHeader />
          <div className='  flex flex-col gap-[.5rem] px-[1.5rem] py-[1.5rem] max-h-[61.4vh] overflow-y-auto  ' >
            <div onClick={() => router.push('/dashboard')} className=' cursor-pointer flex flex-col gap-[.5rem] mb-[1.5rem] ' >
              <div className=' flex items-center gap-[1rem] bg-primary px-[1rem] py-[.5rem]  rounded-md ' >
                <TbLayoutGridFilled />
                <h2>Overview Storage</h2>
              </div>
            </div>
            <SingleLinks name={"My Storage"} icon={<MdOutlineWbCloudy />} href={'/dashboard/storage?search='} />
            <SingleLinks name={"Folders"} icon={<LuFolder />} href={'/dashboard/folders'} />
            <SingleLinks name={"Recent"} icon={<FiClock />} href={'/dashboard/recent'} />
            <SingleLinks name={"Favourites"} icon={<FaRegStar />} href={'/dashboard/favourites'} />
            <SingleLinks name={"Trash"} icon={<FaRegTrashCan />} href={'/dashboard/trash'} />
          </div>
        </div>
        <div className='' >
          <PanelFooter />
        </div>
      </div>
    </>
  )
}

export default Panel
