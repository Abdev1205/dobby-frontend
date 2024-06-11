'use client'

import React from 'react'
import Link from 'next/link'
import SingleLinks from './SingleLinks'
import { IoPersonSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { FaCrown } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import { IoCloudUploadOutline } from "react-icons/io5";
import { GrDiamond } from "react-icons/gr";



import { ApiUrl } from '@/utils/BaseUrl';


const PanelFooter = () => {
  const router = useRouter()
  const handleLogout = async () => {
    console.log('logout clicked')
    try {
      const reponse = await axios.get(`${ApiUrl}/api/logout`, {
        withCredentials: true
      });
      console.log(reponse)
      if (reponse.data.success == true) {
        console.log('response sucess');
        router.push('/login')
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>


      <div className='flex flex-col   gap-[1.2rem] px-[1.5rem] py-[1.5rem]  w-[100%] border-t-[1px] border-borderPrimary  ' >
        <div className=' flex flex-col gap-[.6rem] ' >
          <div className='flex justify-between text-textSecondary ' >
            <div className=' flex gap-[.5rem] items-center ' >
              <IoCloudUploadOutline className='  text-[1.1rem] ' />
              <h2>Storage</h2>
            </div>
            <h2>92%</h2>

          </div>
          <div>
            <ProgressBar completed={92} maxCompleted={100} bgColor={'#FFCC33'} isLabelVisible={false} animateOnRender={true} baseBgColor={'#2E2F31'} height={'10px'} />
          </div>
        </div>
        <button className=' flex items-center gap-[1rem] bg-primary px-[1rem] py-[.5rem]  rounded-md ' >
          <FaCrown />
          Upgrade Plan
        </button>
      </div>

    </div>
  )
}

export default PanelFooter
