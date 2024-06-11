import React from 'react'
import OverviewStorageCard from '../OverviewStorageCard'
import { FiImage } from "react-icons/fi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";





const OverviewStorage = () => {

  const data = [
    {
      name: "Image",
      icon: <FiImage />,
      items: "154",
      completed: 24,
      used: "24GB",
      total: "100GB",
      color: "#FF4646",
      bg: "bg-[#FF4646]"
    },
    {
      name: "Video",
      icon: <MdOutlineOndemandVideo />,
      items: "154",
      completed: 24,
      used: "24GB",
      total: "100GB",
      color: "#2970FF",
      bg: "bg-[#2970FF]"
    },
    {
      name: "Document",
      icon: <IoDocumentTextOutline />,
      items: "154",
      completed: 24,
      used: "24GB",
      total: "100GB",
      color: "#40CD64",
      bg: "bg-[#40CD64]"
    },
    {
      name: "Others",
      icon: <LuFiles />,
      items: "154",
      completed: 24,
      used: "24GB",
      total: "100GB",
      color: "#F3CC30",
      bg: "bg-[#F3CC30]"

    },
  ]

  return (
    <div className='flex justify-between px-[2.5rem] mt-[2rem] ' >
      {
        data.map((item, index) => {
          return (
            <OverviewStorageCard name={item.name} icon={item.icon} items={item.items} completed={item.completed} used={item.used} total={item.total} color={item.color} bg={item.bg} key={index} />
          )
        })
      }
    </div>
  )
}

export default OverviewStorage
