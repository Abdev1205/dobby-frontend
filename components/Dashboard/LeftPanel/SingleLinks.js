'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const SingleLinks = ({ name, icon, href, notification }) => {
  const router = useRouter()
  const pathname = usePathname();
  console.log(pathname)
  const isLinkActive = (href) => {
    if (pathname === href) {
      return true;
    }
    else {
      return false;
    }
  }

  useEffect(() => {
    isLinkActive(pathname);
  }, [router])


  return (
    <Link href={href} className={` flex justify-between items-center gap-[1rem] px-[.7rem]  w-[100%] h-[2.2rem] ${isLinkActive(href) ? " border-[#ffcc33a7]  text-primary text-opacity-[.8]   " : " text-textSecondary border-transparent "} border-l-4 rounded-[.25rem] `} >
      <div className=' flex gap-[1rem] ' >
        <div className={` text-[1.1rem] `} >
          {icon}
        </div>
        <h2 className=' text-[.9rem] font-nunito font-[400] ' >{name}</h2>
      </div>
      <div className={`${notification ? "flex" : "hidden"}`} >
        {notification}

      </div>
    </Link>
  )
}

export default SingleLinks
