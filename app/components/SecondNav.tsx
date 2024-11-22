import React from 'react'
import Image from 'next/image'

const SecondNav = () => {
  return (
    <div>
      <div className='h-[20vh] flex-col sm:flex-row flex items-center justify-between border-2 bg-[#F7F7F7]'>
        <div>
            <h1 className='font-bold text-xl sm:text-2xl p-4 sm:p-4'>
            Trusted by 2000+ companies worldwide.
            </h1>
        </div>
        <div className='flex items-center w-28 sm:w-auto sm:p-4 justify-center'>
            <img src='/images/1.png' alt='logo' />
            <img src='/images/2.png' alt='logo' />
            <img src='/images/3.png' alt='logo' />
            </div>
        <div className='hidden sm:flex items-center p-4 justify-center'>
            <img src='/images/5.png' alt='logo' />
            <img src='/images/6.png' alt='logo' />
            <img src='/images/7.png' alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default SecondNav
