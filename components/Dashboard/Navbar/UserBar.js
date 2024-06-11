'use client'

import React, { useState } from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuInfo } from "react-icons/lu";
import Image from 'next/image'
import useSession from '@/hooks/useSession'
import Profile from '@/components/modals/Profile';


const UserBar = () => {
  const { user, loading, loggedIn } = useSession();
  const [profileModal, setProfileModel] = useState(false);
  return (
    <>
      <Profile
        visible={profileModal}
        onClose={() => setProfileModel(false)}

      />


      <div className=' flex items-center gap-[.8rem] text-textSecondary  text-[1.2rem] ' >
        <LuInfo className='cursor-pointer hover:scale-[1.14] duration-300 ' />
        <IoMdNotificationsOutline className='cursor-pointer hover:scale-[1.14] duration-300  ' />
        <LuSettings className='cursor-pointer hover:scale-[1.14] duration-300  ' />
        <div onClick={() => setProfileModel(true)} className='cursor-pointer ' >
          {
            user && user.profilePicture ?
              <Image src={user.profilePicture} className=' size-[2rem] rounded-full  ' width={100} height={100} alt={user?.name} />
              :
              <BsPersonCircle />
          }

        </div>

      </div>
    </>
  )
}

export default UserBar
