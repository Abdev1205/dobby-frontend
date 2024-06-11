'use client'

import React, { useState } from 'react';
import { TbLayoutGridFilled } from "react-icons/tb";
import { TbArrowsSort } from "react-icons/tb";
import { MdAdd } from "react-icons/md";
// import { Popover } from 'react-tiny-popover'
import SortData from '@/components/common/filter/SortData';
import Create from '@/components/modals/Create';
import { useRouter } from 'next/navigation';


import CustomPopover from '@/components/popover';

import { usePopper } from "react-popper";

const Popup = () => {
  return (
    <div>
      <button label="Admin" />
      <button className="user" label="User" />
    </div>
  );
};



const OverviewHeader = () => {
  const [createModal, setCreateModal] = useState(false);

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
    modifiers: [{ name: "offset", options: { offset: [0, 5] } }]
  });

  const router = useRouter();

  const sortOptionData = [
    {
      id: 1,
      option: "Newest",
    },
    {
      id: 2,
      option: "Oldest",
    },
  ]

  const [sortValue, setSortValue] = useState(sortOptionData[0].option)

  return (
    <div className='flex items-end justify-between px-[2.5rem] mt-[1.2rem] ' >
      <Create
        visible={createModal}
        setVisible={setCreateModal}
        onClose={() => setCreateModal(false)}
        callback={() => router.push('/dashboard')}
      />
      <div>
        <div className=' flex items-center gap-[1rem]    rounded-md text-textSecondary text-opacity-70 ' >
          <TbLayoutGridFilled />
          <h2>Overview Storage</h2>
        </div>
      </div>

      <div className=' flex items-center gap-[.8rem] ' >
        <SortData sortValue={sortValue} setSortValue={setSortValue} sortOptionData={sortOptionData} />
        <div className=' cursor-pointer bg-[#363739] text-textSecondary text-opacity-70 flex items-center justify-center gap-[.5rem] px-[.5rem] py-[.3rem] text-[.9rem] rounded-md ' >
          <TbLayoutGridFilled />
          View
        </div>
        <div onClick={() => setCreateModal(true)} className=' cursor-pointer flex items-center gap-[.2rem] text-[.9rem] bg-primary px-[.5rem] py-[.3rem]  rounded-md ' >
          <MdAdd />
          <h2>Create</h2>
        </div>
      </div>



    </div>
  )
}

export default OverviewHeader
