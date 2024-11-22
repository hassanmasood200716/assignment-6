import React from 'react'

const FirstMain = () => {
  return (
    <div className='sm:flex items-center justify-center '>
      <div className='sm:m-auto my-10 w-full sm:w-1/2'>
        <div className='sm:w-[30vw] w-[99vw]  mx-auto'>
          <h1 className='sm:text-5xl text-4xl px-10 py-2 sm:px-10 sm:py-5 font-bold'>Learn new skills online with ease</h1>
          <p className='sm:text-lg text-lg px-10 py-2 sm:py-5 m-1 sm:m-auto'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors</p>
          <div className='flex px-10 sm:px-10 py-5 gap-5'>
            <button className="hover:bg-white hover:text-black border-2 p-2   sm:px-3 sm:py-2 border-black rounded-md bg-black text-white">
              Start learning now
            </button>
            <button className="hover:bg-black hover:text-white border-2 p-2  sm:px-3 sm:py-2 border-black rounded-md bg-white ">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-end w-full sm:w-1/2'>
        <img className='w-full h-auto sm:h-[85vh] object-contain' src="/images/photo.png" alt="photo" />
      </div>
    </div>
  )
}

export default FirstMain
