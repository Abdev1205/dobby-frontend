'use client'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import { ApiUrl } from '@/utils/BaseUrl';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import TextFields from '@/components/common/input/InputFields/TextFields';
import api from '@/utils/axios';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  console.log(email, "email")
  console.log(pass, "pass")

  const handleUserLogin = async (e) => {
    try {
      e.preventDefault();
      if (email && pass) {
        const data = {
          "email": email,
          "password": pass
        }
        const res = await api.post(`/api/auth/login`, data, { withCredentials: true });
        console.log(res)
        toast.success("User Logged in Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        router.push('/dashboard')
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

  const handleGoogleLogin = async () => {
    try {
      window.location.href = `${ApiUrl}/api/auth/google`;
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <>

      <div className='bg-bgPrimary w-[100%] h-[100vh] ' >
        <div className=' w-[100%] h-[100vh] flex justify-center items-center   ' >
          <div className=' flex flex-col w-[30rem]   bg-bgSecondary border-[1px] border-borderPrimary rounded-md px-[2.5rem] py-[2.5rem] ' >


            <form onSubmit={(e) => handleUserLogin(e)} className=' flex flex-col gap-[1rem]   '  >
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
              <button className={` active:scale-95 duration-300   ${email && pass ? "opacity-100" : "opacity-25"} bg-primary text-black px-[.5rem] py-[.5rem] rounded-md mt-[1rem] `} >Login</button>

              <div className=' flex justify-center items-center gap-[.3rem] mt-[1rem] ' >
                <div className=' w-[40%] h-[1px]  bg-[#ffcc3340] ' />
                <span className=' text-primary text-opacity-70' >Or</span>
                <div className=' w-[40%] h-[1px] bg-[#ffcc3340] ' />
              </div>

            </form>
            <button onClick={handleGoogleLogin} className=' active:scale-95 duration-300 bg-[#b7b8ba] flex justify-center items-center gap-[.5rem] px-[.5rem] py-[.5rem] rounded-md font-nunito font-[400] text-[1.02rem] text-black mt-[2rem]   ' >
              <FcGoogle className=' text-[1.2rem] ' />
              Login with Google
            </button>
            <div className=' flex justify-center gap-[.4rem] mt-[.6rem] ' >
              <p className='text-opacity-50 text-textSecondary ' >Don't have account,</p>
              <Link className='underline text-primary text-opacity-60 underline-offset-1' href="/register">
                register
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login
