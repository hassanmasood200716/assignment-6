import React from 'react'

const ForthMain = () => {
  return (
    <div>
      <div className='py-10'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold text-4xl sm:text-5xl py-6'> 
            Our Achivements
            </h1>
            <p className='w-[80vw] text-center py-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.<span className='hidden sm:inline'> Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</span>
            </p>
        </div>
        <div className='flex flex-wrap sm:flex-nowrap gap-6 items-center justify-center py-5'>
            <div className='flex flex-col justify-center items-center w-1/3 sm:w-1/4 gap-2 f'><span className='font-bold text-4xl'>+200</span><span className='text-lg'>Courses</span></div>
            <div className='flex flex-col justify-center items-center w-1/3 sm:w-1/4 gap-2 f'><span className='font-bold text-4xl'>50K</span><span className='text-lg'>Mentors</span></div>
            <div className='flex flex-col justify-center items-center w-1/3 sm:w-1/4 gap-2 f'><span className='font-bold text-4xl'>370K</span><span className='text-lg'>Students</span></div>
            <div className='flex flex-col justify-center items-center w-1/3 sm:w-1/4 gap-2 f'><span className='font-bold text-4xl'>100K+</span><span className='text-lg'>Recognition</span></div>
        </div>
      </div>
    </div>
  )
}

export default ForthMain
