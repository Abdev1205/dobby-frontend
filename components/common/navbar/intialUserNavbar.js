'use client'
import React from 'react'
import Image from 'next/image'
import { LogoImage } from '@/public/assetsManager'
import Link from 'next/link'
import { FaSlack } from "react-icons/fa";
import useSession from '@/hooks/useSession'



const IntialUserNavbar = () => {
  const { loggedIn, loading } = useSession()

  const handleSlackConnect = async () => {
    window.location.href = "https://slack.com/oauth/v2/authorize?client_id=7149344100518.7155932689219&team=T074DA42YF8&install_redirect=oauth&scope=channels:read,chat:write,chat:write.public,groups:read,im:read,incoming-webhook,mpim:read,channels:history,groups:history,mpim:history,im:history"
  }
  return (
    <>

      <div className={`  sticky top-0 w-[100%] h-[4.5rem] flex items-center px-[5rem] bg-[#1C1C1C] justify-between border-b-[1px] border-[#34343477] text-black `} >
        <div className=' flex items-center gap-[.8rem] ' >
          <Image
            src={LogoImage}
            width={500}
            height={500}
            alt="logo"
            className=' w-[7.2rem]'
          />

        </div>

        <div className=' flex items-center gap-[2rem] ' >
          <div className={loggedIn ? "flex gap-[1rem]  " : "hidden"} >
            <Link href={"/"} className=' text-[#adadad] font-nunito font-[500] text-[1.15] tracking-wide ' >{loggedIn ? 'Home' : "Login"}</Link>
            <Link href={loggedIn ? '/profile' : "/register"} className=' text-[#adadad] font-nunito font-[500] text-[1.15] tracking-wide ' >{loggedIn ? 'Profile' : "Register"}</Link>
          </div>
          <button onClick={handleSlackConnect} className=' active:scale-95 duration-300 bg-[#f2f2f2] flex justify-center items-center gap-[.5rem] px-[1rem] py-[.4rem] rounded-md font-nunito font-[500] text-[1.02rem] m   ' >
            <FaSlack className=' text-[1.2rem] ' />
            Connect slack
          </button>

        </div>

      </div>
    </>
  )
}

export default IntialUserNavbar
