import React from 'react'

const Cards = (props: any) => {
    return (
        <div className='overflow-hidden w-[90%] sm:w-1/4 h-[60vh] '>
            <div className='bg-[#F7F7F7] rounded-lg'>
            <img src={props.src} alt="" className='h-[32vh] sm:w-[25vw] object-fill' />
            <div className='flex flex-col items-start justify-start'>
                <h1 className='font-bold px-4 py-2 text-2xl' >{props.title}</h1>
                <p className='px-4 py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            </div>
            <div className='flex p-4 gap-4'>
                <button className='sm:px-6 px-8  hover:bg-black hover:text-white border-2  border-black rounded-lg bg-white text-black'>Enroll Now</button>
                <p className='px-4'>$400</p>
            </div>
            </div>
        </div>
    )
}



const FifthMain = () => {
    return (
        <div>
            <div className=''>
                <div className='flex items-center p-16 justify-center flex-col'>
                    <h1 className='text-5xl font-bold p-4'>Courses</h1>
                    <p className='p-2 text-lg'>Your Ultimate Guide to learning</p>
                </div>
                <div className='flex items-center justify-center gap-8 text-lg pb-10'>
                    <span className='hover:font-bold p-2 underline underline-offset-8'>Popular</span><span className='hover:font-bold p-2'>Recommended</span><span className='hover:font-bold p-2'>Best  Price</span>
                </div>
                <div className='flex flex-wrap gap-12 items-center justify-center'>
                    <Cards title="UX/UI Design 201" src="/images/111.png" />
                    <Cards title="Introduction to Python" src="/images/112.png" />
                    <Cards title="Data Analysis for Beginners" src="/images/113.png" />
                </div>
                <div className='hidden sm:flex flex-wrap gap-12 items-center justify-center'>
                    <Cards title="Art Specialization" src="/images/114.png" />
                    <Cards title="Rule of Law" src="/images/115.png" />
                    <Cards title="Introduction to webflow" src="/images/116.png" />
                </div>
                <div className='unhidden flex items-center justify-center w-full'>
                        <button className=' hover:bg-black hover:text-white border-2 px-3 py-2  border-black rounded-lg bg-white text-black'>View All Courses</button>
                </div>
            </div>
        </div>
    )
}

export default FifthMain
