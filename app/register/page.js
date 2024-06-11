'use client'
import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import api from '@/utils/axios';
import TextFields from '@/components/common/input/InputFields/TextFields';

const Register = () => {
  const router = useRouter()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [cpass, setCPass] = useState();
  const [valid, setvalid] = useState(false)
  const validDataForm = () => {
    console.log("valid : ", valid)
    if (name && email && pass) {
      if (pass === cpass) {
        // setvalid(true);
        // console.log(pass, name, email)
        return true;
      }
      // else {
      //   setvalid(false)
      // }
    }
    else {
      // setvalid(false)
      return false;
    }
  }
  // useEffect(() => {
  //   validDataForm()
  // }, [name, pass, cpass, email])

  const handleUserReg = async (e) => {
    e.preventDefault()
    try {
      if (name && email && pass && cpass && validDataForm()) {
        // setvalid(true)
        const data = {
          "name": name,
          "email": email,
          "password": pass,
        }
        const res = await api.post(`/api/auth/register`, data);
        console.log(res);
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        router.push('/login')

      } else {
        // setvalid(false);
        toast.error("fill all required details correctly", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    }
  }
  return (
    <>

      <div className='bg-bgPrimary w-[100%] h-[100vh] ' >
        <div className=' w-[100%] h-[100vh] flex justify-center items-center   ' >
          <div className=' flex flex-col w-[30rem]   bg-bgSecondary border-[1px] border-borderPrimary rounded-md px-[2.5rem] py-[2.5rem] ' >


            <form onSubmit={(e) => handleUserReg(e)} className=' flex flex-col gap-[1rem]   '  >
              <TextFields
                value={name}
                setValue={setName}
                label={"Name"}
                placeholder={"Enter your Name"}
                required={true}
                type='text'

              />
              <TextFields
                value={email}
                setValue={setEmail}
                label={"Email"}
                placeholder={"Enter your Email"}
                required={true}
                type='email'

              />
              <TextFields
                value={pass}
                setValue={setPass}
                label={"Password"}
                placeholder={"Enter your password"}
                required={true}
                type='password'

              />
              <TextFields
                value={cpass}
                setValue={setCPass}
                label={"Confirm Password"}
                placeholder={"Enter your password"}
                required={true}
                type='password'

              />
              <button className={` active:scale-95 duration-300   ${email && pass && cpass ? "opacity-100" : "opacity-25"} bg-primary text-black px-[.5rem] py-[.5rem] rounded-md mt-[1rem] `} >Register</button>

              <div className=' flex justify-center items-center gap-[.3rem] mt-[1rem] ' >
                <div className=' w-[40%] h-[1px]  bg-[#ffcc3340] ' />
                <span className=' text-primary text-opacity-70' >Or</span>
                <div className=' w-[40%] h-[1px] bg-[#ffcc3340] ' />
              </div>

            </form>

            <div className=' flex justify-center gap-[.4rem] mt-[.6rem] ' >
              <p className='text-opacity-50 text-textSecondary ' >Already have account,</p>
              <Link className='underline text-primary text-opacity-60 underline-offset-1' href="/login">
                login
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Register
