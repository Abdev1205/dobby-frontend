import React, { useEffect } from 'react'
import useSession from '@/hooks/useSession'
import { LuLogOut } from "react-icons/lu";
import Image from 'next/image';

const Profile = (

  { visible,
    onClose = () => { },
    callback = () => { },
    data
  }
) => {
  const { user, loading, loggedIn, logout } = useSession();
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
      <div className=' relative flex flex-col w-[30rem] h-[43vh] justify-between  bg-[#1C1C1C] border-[1px] border-[#4d4d4d47] rounded-md px-[2.5rem] py-[2.5rem] text-textSecondary ' >

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
  )
}

export default Profile
