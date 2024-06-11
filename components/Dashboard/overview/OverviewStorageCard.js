'use client'

import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'

const OverviewStorageCard = ({ name, icon, items, completed, used, total, color, bg }) => {
  const styles = ` flex justify-center text-[1.3rem] rounded-md items-center  size-[2.6rem] text-textPrimary ${bg}   `
  return (
    <div className=' bg-[#363739] flex flex-col gap-[.7rem] w-[15rem] px-[1rem] py-[1rem] rounded-md ' >
      <div className='flex gap-[1rem] '  >
        <div className={styles} >
          {icon}
        </div>
        <div className='flex flex-col ' >
          <h2 className=' text-textPrimary text-opacity-80' >{name}</h2>
          <p className=' text-textSecondary text-opacity-80 text-[.85rem] ' >{items} items</p>
        </div>
      </div>
      <div className=' flex flex-col gap-[.5rem] ' >
        <ProgressBar completed={completed} maxCompleted={100} bgColor={color} isLabelVisible={false} animateOnRender={true} baseBgColor={'#2E2F31'} height={'10px'} />
        <div>
          <h2 className=' text-textSecondary text-opacity-80 text-[.85rem] ' >{used} of {total}</h2>
        </div>
      </div>

    </div>
  )
}

export default OverviewStorageCard
