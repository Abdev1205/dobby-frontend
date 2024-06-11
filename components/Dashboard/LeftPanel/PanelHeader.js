'use client'

import React from 'react'
import { LogoImage } from '@/public/assetsManager'
import Image from 'next/image'
import { BiSearch } from "react-icons/bi";
import { TbLayoutGridFilled } from "react-icons/tb";
import { useRouter } from 'next/navigation';



const PanelHeader = ({ user }) => {
  const router = useRouter();
  return (
    <div className='  flex flex-col  gap-[1rem] px-[1.5rem] py-[1.5rem]  border-b-[1px] border-borderPrimary ' >
      <div onClick={() => router.push('/dashboard')} className=' cursor-pointer flex items-center gap-[1rem] pl-[.1rem] ' >
        <Image
          src={LogoImage}
          width={300}
          height={300}
          alt='abhay'
          className=' w-[5.5rem] '
        />
        <h2 className=' text-primary uppercase font-rubik font-[500] text-[1rem] ml-[rem]  ' >Cloud Store</h2>
      </div>

      {/* <div className=' flex flex-col gap-[.5rem] ' >
        <div className=' flex items-center gap-[1rem] bg-primary px-[1rem] py-[.5rem]  rounded-md ' >
          <TbLayoutGridFilled />
          <h2>Overview Storage</h2>
        </div>
      </div> */}

    </div>
  )
}

export default PanelHeader
