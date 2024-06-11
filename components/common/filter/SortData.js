import React, { useState, useContext } from "react";
import { PiSlidersLight } from "react-icons/pi";
import { useRouter, usePathname } from "next/navigation";


const SortData = ({ sortValue, setSortValue, sortOptionData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const handleSortClick = () => {
    setIsOpen(!isOpen);
  };


  const handleOptionClick = (sortOption) => {
    setSortValue(sortOption);
    setIsOpen(false);
    router.push(`${pathname}/?sort=${sortValue}`)



    console.log("Selected sort option:", sortOption);
  };
  return (
    <div className="flex relative    gap-[1rem]  ">
      <div
        onClick={handleSortClick}
        className=" cursor-pointer bg-[#363739] text-textSecondary text-opacity-70 flex items-center justify-center gap-[.5rem] px-[.5rem] py-[.3rem] text-[.9rem] rounded-md "
      >
        <PiSlidersLight className=" text-[1.2rem] " />
        {sortValue ? sortValue : "Sort"}
      </div>
      {/* <div className="flex items-center justify-evenly  border-[2px] border-[#191F35]  px-[.4rem] py-[.3rem]  h-[1.8rem] rounded-md text-[.93rem]">
        {sortValue}
      </div> */}
      <div className=" absolute bg-[#363739]  text-textSecondary translate-y-[3rem] flex flex-col  min-w-[5rem] bg-second z-[15]   rounded-md ">
        {isOpen &&
          sortOptionData.map((data, index) => {
            let option = data.option
            return (
              <div
                onClick={() => handleOptionClick(option)}
                key={index}
                className=" hover:bg-[#676767] rounded-md duration-200  text-[.86rem] hover:bg-second2 px-[.8rem] py-[.3rem] cursor-pointer  "
              >
                {data.option}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SortData;
