import React from 'react'
import SearchBar from './SearchBar'
import UserBar from './UserBar'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-[100%] ' >
      <SearchBar />
      <UserBar />

    </div>
  )
}

export default Navbar
