'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import useSession from '@/hooks/useSession.js';
import Image from 'next/image.js';
import { LuLogOut } from "react-icons/lu";
import DashboardLayout from "../Layout.js"

const ProfilePage = () => {
  const { user, loading, loggedIn, logout } = useSession();
  const router = useRouter();
  return (
    <DashboardLayout>
      <div className=' w-[100%] text-textSecondary h-[calc(100vh-7rem)] flex justify-center items-center  ' >
        <div className=' relative flex flex-col w-[30rem] h-[43vh] justify-between  bg-bgSecondary border-[1px] border-borderPrimary rounded-md px-[2.5rem] py-[2.5rem] ' >

          <div className='relative flex items-center justify-center mt-[-2.5rem] ' >
            <Image
              src={user?.profilePicture}
              width={100}
              height={100}
              className='absolute mx-auto rounded-full w-[8rem] '
              alt='Profile Pic'
            />

          </div>
          <div className=' relative flex flex-col  mt-[3rem] gap-[1rem] mx-auto ' >
            <div className='mx-auto flex flex-col gap-[1rem] ' >
              <div className=' flex gap-[1rem] opacity-65 ' >
                <div>
                  Name :
                </div>
                <h2>{user?.name}</h2>
              </div>
              <div className=' flex gap-[1rem] opacity-65 ' >
                <div>
                  Email :
                </div>
                <h2>{user?.email}</h2>
              </div>
            </div>


            <button onClick={logout} className=' active:scale-95 duration-300 bg-[#e2eaf8] text-black  flex justify-center items-center gap-[.5rem] px-[.5rem] py-[.5rem] rounded-md font-nunito font-[500] text-[1.02rem] mt-[2rem]  w-[20rem]  mx-auto ' >
              <LuLogOut className=' text-[1.2rem] ' />
              Log Out
            </button>
          </div>

        </div>
      </div>
    </DashboardLayout>
  )
}

export default ProfilePage
