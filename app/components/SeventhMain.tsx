import React from 'react'

interface CardzProps {
    src: string;
    title: string;
    post: string;
  }

const Cardz = (props: CardzProps) => {
    return (
        <div className='border-2 border-black h-[40vh] p-5'>
            <div className='flex justify-start items-center py-2'> ⭐⭐⭐⭐⭐ </div>
            <div>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                </p>
            </div>
            <div className='flex justify-start py-4 '>
                <div>
                    <img className='rounded-full m-1 w-12' src={props.src} alt="image" />
                </div>
                <div className='flex flex-col m-1 justify-start items-start'>
                    <span className='font-bold'>{props.post}</span>
                    <span>{props.title}</span>
                </div>
            </div>
        </div>
    )
}
interface CardzProps {
    src: string;
    title: string;
    post: string;
  }
  

const SeventhMain = (props: CardzProps) => {
    return (
        <div className='h-[80vh] bg-[#F7F7F7]'>
            <div className='flex items-center flex-col justify-center'>
                <span className='block sm:hidden'>
                    <h1 className='text-3xl font-bold p-5' >
                    What Our Student Say
                    </h1>
                </span>
                <h1 className='hidden sm:block text-5xl mx-10 font-bold p-5'>Customer testimonials</h1>
                <p className='text-lg text-center m-5 sm:mx-10 p-2 sm:p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='flex gap-9 justify-center items-center'>
                <div className='w-[80%] sm:w-1/4'>
                    <Cardz src="/images/1113.png" title="James Nduku" post="Software Developer" />
                </div>
                <div className='hidden sm:block w-1/4'>
                    <Cardz src="/images/1111.png" title="Erick Kipkemboi" post="Scrum Master" />
                </div>
                <div className='hidden sm:block w-1/4'>
                    <Cardz src="/images/1116.png" title="Stephen Kerubo" post="Dog Trainer" />
                </div>
            </div>
        </div>
    )
}

export default SeventhMain
