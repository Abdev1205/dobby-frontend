import React from 'react'
import AuthLayer from '../(AuthLayer)/AuthLayer'
import Panel from '@/components/Dashboard/LeftPanel/Panel'
import SearchBar from "../../components/Dashboard/Navbar/SearchBar.js"
import Navbar from "../../components/Dashboard/Navbar/Navbar.js"


const DashboardLayout = ({ children }) => {
  return (
    <AuthLayer>
      <div className=" bg-bgPrimary w-[100%] border-red-500 h-[100vh]  flex flex-row ">
        <Panel />
        <div className=" w-[calc(100%-18rem)]  h-[100vh] bg-bgPrimary flex  flex-col    ">
          <div className='flex items-center border-b-[1px] border-borderPrimary  px-[2.5rem] h-[4.55rem]  ' >
            <Navbar />
          </div>
          {children}
        </div>
      </div>
    </AuthLayer>
  )
}

export default DashboardLayout
