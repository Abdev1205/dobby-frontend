'use client'

import React, { useEffect, useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { useRouter, usePathname } from 'next/navigation';

const SearchBar = () => {
  const [searchText, setSearchText] = useState("")

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.push(`${pathname}?search=${searchText}`)
  }, [searchText])

  return (
    <div className=' flex gap-[1rem]  items-center bg-bgSecondary w-[29rem] h-[2.5rem] rounded-md border-[#36353a] border-[1px] text-textSecondary text-opacity-40 px-[.8rem] ' >
      <BiSearch className=' text-[1.1rem] ' />
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search here...' type="text" className=' bg-transparent outline-none text-[.9rem] w-[87%] ' />
    </div>
  )
}

export default SearchBar
