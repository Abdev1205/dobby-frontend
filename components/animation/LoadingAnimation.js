import React from 'react'
import Loader from './Loader'


const LoadingAnimation = ({ type }) => {
  return (
    <>
      {
        type == "global" && (
          <div id={'globalLoader'} className=' z-[100] fixed flex justify-center items-center w-[100%] h-[100vh] bg-bgPrimary  '>
            <Loader />
          </div>
        )
      }

      {
        type == "local" && (
          <div id={'globalLoader'} className=' z-[100] fixed flex justify-center items-center w-[100%] h-[100vh] bg-bgPrimary  bg-opacity-50 '>
            <Loader />
          </div>
        )
      }

    </>

  )
}

export default LoadingAnimation
