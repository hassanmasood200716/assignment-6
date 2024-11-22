import React from 'react'

interface CardssProps {
  src: string;
  title: string;
  post: string;
}

const Cardss = (props: CardssProps) => {
  return (
    <div className='overflow-hidden w-full sm:w-1/3 py-6 flex items-center justify-center'>
      <div>
        <div className='flex items-center justify-center'>
          <img src={props.src} alt="" className='h-[80px] w-[80px] object-fill' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-bold px-4 py-2 text-xl' >{props.title}</h1>
          <h1 className=' px-4  text-md' >{props.post}</h1>
        </div>
        <div className='flex justify-center items-center p-3 gap-2'>
          <span><img className='w-[20px]' src='/images/facebook.png' alt='image'/></span>
          <span><img className='w-[20px]' src='/images/instagram.png' alt='image'/></span>
          <span><img className='w-[20px]' src='/images/linked.png' alt='image'/></span>
        </div>
      </div>
    </div>
  )
}




const SixthMain = () => {
  return (
    <div className=''>
      <div className='bg-[#F7F7F7] py-10' >
        <div className='flex items-center justify-center flex-col my-10'>
          <h1 className='text-4xl sm:5xl p-12 font-bold'>OUR TEAM</h1>
          <p className='text-lg text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className='my-10 flex flex-wrap'>
          <Cardss title="James Nduku" post="Marketing Coordinator" src="/images/1111.png" />
          <Cardss title="Joseph Munyambu" post="Nursing Assistant" src="/images/1112.png" />
          <Cardss title="Joseph Ngumbau" post="Medical Assistant" src="/images/1113.png" />
        </div>
        <div className='hidden sm:flex my-10 flex-wrap'>
          <Cardss title="Erick Kipkemboi" post="Web Designer" src="/images/1114.png" />
          <Cardss title="Stephen Kerubo" post="President of Sales" src="/images/1115.png" />
          <Cardss title="John Leboo" post="Dog Trainer" src="/images/1116.png" />
        </div>
        <div className=' flex items-center justify-center w-full'>
          <button className=' hover:bg-black hover:text-white border-2 px-3 py-2  border-black rounded-lg bg-white text-black'>View All Courses</button>
        </div>
      </div>
    </div>
  )
}

export default SixthMain
