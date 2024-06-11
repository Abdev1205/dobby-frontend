'use client'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link'
import Image from "next/image";
import { LogoImage } from "@/public/assetsManager";
import { nunitoSans } from "@/public/fonts";
import { ApiUrl } from "@/utils/BaseUrl";

const Login = () => {

  const handleGoogleLogin = async () => {
    try {
      window.location.href = `${ApiUrl}/api/auth/google`;
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <div className={nunitoSans.className} >
      <div className='bg-[#09080F] w-[100%] h-[100vh] ' >
        {/* <IntialUserNavbar /> */}
        <div className=' w-[100%] h-[100vh] flex justify-center items-center   ' >
          <div className=' flex flex-col w-[30rem] h-[70vh] justify-between  bg-[#1C1C1C] border-[1px] border-[#4d4d4d47] rounded-md px-[2.5rem] py-[2.5rem] ' >
            <div className=" flex flex-col items-center justify-center gap-[2rem] mt-[1rem] " >
              <Image
                src={LogoImage}
                alt="Logo Image"
              />
              <p className="text-center text-white font-nunito " >The #1 Unified API platform for truly native API integrations</p>
            </div>

            <div className="flex flex-col gap-[1rem] " >
              <button onClick={handleGoogleLogin} className=' active:scale-95 duration-300 bg-[#e2eaf8] flex justify-center items-center gap-[.5rem] px-[.5rem] py-[.5rem] rounded-md font-nunito font-[600] text-[1.02rem] mt-[2rem]   ' >
                <FcGoogle className=' text-[1.2rem] ' />
                Login with Google
              </button>
              <div className=' flex justify-center gap-[.4rem] mt-[.6rem] ' >
                <p className='text-[#AEB9E180] ' >Don't have account,</p>
                <Link className=' text-[#b1b3ee] underline underline-offset-1 ' href="/register">
                  register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
