
import React from 'react'
import Lottie from 'lottie-react';
import UnderAnim from "../../public/assets/animation/under.json"

const UnderConstruction = () => {
  return (
    <div className='  flex mx-auto justify-center w-[100%] '>
      <Lottie
        animationData={UnderAnim}
        autoplay={true}
        loop={true}
        allowTransparency={true}
      />
    </div>
  )
}

export default UnderConstruction
