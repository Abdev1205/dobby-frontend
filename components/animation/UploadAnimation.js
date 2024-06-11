import React from 'react'
import Lottie from 'lottie-react'
import UploadAnim from "../../public/assets/animation/upload.json"

const UploadAnimation = () => {
  return (
    <div className=' w-[100%] h-[100vh] fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ' >
      <Lottie
        animationData={UploadAnim}
        autoplay={true}
        loop={true}
      />
    </div>
  )
}

export default UploadAnimation
