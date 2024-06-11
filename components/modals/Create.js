'use client'

import React, { useEffect, useState, useRef } from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { FiFolderPlus } from "react-icons/fi";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { TbCloudUpload } from "react-icons/tb";
import TextFields from '../common/input/InputFields/TextFields';
import { BsFillCloudCheckFill } from "react-icons/bs";
import UploadAnimation from '../animation/UploadAnimation';
import LoadingAnimation from '../animation/LoadingAnimation';
import api from '@/utils/axios';
import { ToastContainer, toast } from 'react-toastify';




const Create = ({
  visible,
  onClose = () => { },
  callback = () => { },
  folderId,
}) => {

  const [createActive, setCreateActive] = useState(-1);
  const [continueButton, setContinueButton] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [folderName, setFolderName] = useState('')
  const [file, setFile] = useState("")
  const [showFileLoader, setShowFileLoader] = useState(false)

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()
  const ref = useRef();

  const newVal = searchParams.get('new')

  const handleFolderCreation = async (e) => {
    e.preventDefault()
    setShowFileLoader(true);
    try {
      if (folderName) {
        const res = await api.post('/api/uploads/folder', { name: folderName }, { withCredentials: true });
        console.log(res);
        setShowFileLoader(false);
        toast.success("Folder Created Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        let foldersId = res.data.folder._id;
        router.push(`/dashboard/folders/${foldersId}`);
      }

    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setShowFileLoader(false);
    }
  }

  const handleFileCreation = async (e) => {
    e.preventDefault();
    setShowFileLoader(true);
    try {
      if (file && selectedFileName) {

        const data = new FormData();
        data.append("file", file);
        data.append("filename", selectedFileName);
        data.append("folder", folderId)

        const res = await api.post('/api/uploads/file', data, { withCredentials: true });
        console.log(res);
        setShowFileLoader(false);
        toast.success("File Uploaded Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        router.push('/dashboard/storage');
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(error.message);
    }

  }

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);
  if (!visible) return null;
  return (
    <div
      id="background"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.id == "background") {
          onClose()
          callback()
          setContinueButton(false)
          setShowFileLoader(false)
        }
      }}
    >

      <div className=' bg-bgSecondary rounded-md flex flex-col justify-center w-[35rem] h-[25rem] px-[2.5rem] py-[2.5rem]  ' >

        {
          !continueButton && (newVal == undefined || newVal == null) && (
            <>
              <div className='flex justify-center gap-[2rem]' >
                <div onClick={() => setCreateActive(1)} className={` ${createActive == 1 ? " shadow-[#ffcc3356] shadow-2xl scale-110 border-2 border-primary " : " border-2 border-transparent"} bg-[#363739] duration-500 flex flex-col gap-[.7rem] cursor-pointer w-[12rem] px-[1rem] py-[1rem] rounded-md `} >
                  <div className='flex justify-center gap-[1rem] '  >
                    <div className={`flex justify-center bg-[#FF4646] text-[1.3rem] rounded-md items-center  size-[2.6rem] text-textPrimary  `} >
                      <FaRegFileLines />
                    </div>
                  </div>
                  <div className=' flex flex-col gap-[.5rem] ' >
                    <div>
                      <h2 className=' text-textSecondary text-opacity-80 text-[.85rem] text-center ' >New File</h2>
                    </div>
                  </div>
                </div>

                <div onClick={() => setCreateActive(2)} className={` ${createActive == 2 ? " shadow-[#ffcc3356] shadow-2xl scale-110 border-2 border-primary " : " border-2 border-transparent"} duration-500 bg-[#363739] flex flex-col gap-[.7rem] cursor-pointer w-[12rem] px-[1rem] py-[1rem] rounded-md `} >
                  <div className='flex justify-center gap-[1rem] '  >
                    <div className={`flex justify-center bg-[#FF4646] text-[1.3rem] rounded-md items-center  size-[2.6rem] text-textPrimary  `} >
                      <FiFolderPlus />
                    </div>
                  </div>
                  <div className=' flex flex-col gap-[.5rem] ' >
                    <div>
                      <h2 className=' text-textSecondary text-opacity-80 text-[.85rem] text-center ' >New Folder</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' flex w-[100%] justify-center mt-[5rem] ' >

                <button onClick={() => {
                  setContinueButton(true)
                  let createParams = createActive == 1 ? "file" : createActive == 2 ? "folder" : "unknown"
                  router.push(`${pathname}/?new=${createParams}`)
                }} className={` active:scale-95 duration-300   ${createActive != -1 ? "opacity-100" : "opacity-25"} bg-primary text-black px-[.5rem] py-[.5rem] rounded-md mt-[1rem] w-[15rem] `} >Continue</button>
              </div>
            </>
          )
        }

        {
          newVal == "file" && (
            <>
              <form onSubmit={(e) => handleFileCreation(e)} className=' flex flex-col gap-[1rem] ' >

                <div className=' flex flex-col gap-[1rem] ' >


                  <div className=' relative flex flex-col justify-center items-center gap-[.4rem] outline-none border-dashed border-[2px] border-primary border-opacity-[.5] bg-[#8C8C9A1F] focus:bg-[#c8a84714] rounded-md w-[100%] h-[10rem] '>
                    <label className='flex flex-col w-[100%] h-[100%] items-center justify-center ' >
                      <div className=' w-[3rem] h-[3rem] mb-[1rem] bg-[#565657] text-white  rounded-full flex justify-center items-center ' >
                        <TbCloudUpload className=' text-[1.7rem] ' />
                      </div>
                      <p className=' text-textSecondary text-[.8rem] font-inter font-[400] ' ><span className='  text-[.8rem] ' >Click to upload</span> or drag and drop</p>


                      <input
                        ref={ref}
                        className='hidden select-files'
                        type="file"
                        accept="image/*"
                        name="file"
                        id="Select Files"
                        required
                        onChange={(e) => {
                          setSelectedFileName(e.target.files[0]?.name);
                          setFile(e.target.files[0]);
                        }}
                      />
                      <p className={` ${file ? " flex text-opacity-65 items-center absolute bottom-[.5rem]  gap-[.5rem] mt-[.5rem] text-[.9rem] " : "hidden"} text-green-500  `} > <BsFillCloudCheckFill />  File Uploaded</p>
                    </label>
                  </div>
                  <div>
                    <TextFields
                      value={selectedFileName}
                      setValue={setSelectedFileName}
                      required={true}
                      label={"File Name"}
                      placeholder={"Enter a file name"}
                      type='text'
                    />
                  </div>
                </div>
                <div className=' w-[100%] flex justify-center ' >
                  <button className={` active:scale-95 duration-300   ${selectedFileName && file ? "opacity-100" : "opacity-25"} bg-primary text-black px-[.5rem] py-[.5rem] rounded-md mt-[1rem] w-[15rem] `} >Continue</button>
                </div>

              </form>
            </>
          )
        }
        {
          newVal == "folder" && (
            <>
              <form onSubmit={(e) => handleFolderCreation(e)} className=' flex flex-col gap-[1rem] ' >

                <div className=' flex flex-col gap-[1rem] ' >
                  <div>
                    <TextFields
                      value={folderName}
                      setValue={setFolderName}
                      required={true}
                      label={"Folder Name"}
                      placeholder={"Enter a Folder name"}
                      type='text'
                    />
                  </div>
                </div>
                <div className=' w-[100%] flex justify-center ' >
                  <button className={` active:scale-95 duration-300   ${folderName ? "opacity-100" : "opacity-25"} bg-primary text-black px-[.5rem] py-[.5rem] rounded-md mt-[1rem] w-[15rem] `} >Continue</button>
                </div>

              </form>
            </>
          )
        }
      </div>

      {
        showFileLoader && (
          <>
            <LoadingAnimation type={'local'} />
          </>
        )
      }

    </div>
  )
}

export default Create
