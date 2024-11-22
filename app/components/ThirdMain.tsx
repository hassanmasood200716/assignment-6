import React from 'react'


const Card = (props:any) => {
    return (
      <div className='card border-2 rounded-lg bg-[#F7F7F7] flex sm:w-1/4 w-3/4  items-center justify-around' style={{overflow: "hidden" }}>
          <img src={props.src} alt="" className='w-1/4 h-[100px]  rounded-xl overflow-hidden'/>
          <div className='3/4'>
          <h1 className='font-bold text-xl' >{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    )
  }



const ThirdMain = () => {
    return (
        <div className='py-8 sm:py-0'>
            <div>
                <div className='flex flex-col h-[28vh] items-center justify-center'>
                    <h1 className='p-4 text-4xl font-bold text-center sm:text-auto'>
                        Explore Courses By Category
                    </h1>
                    <p className='text-lg sm:text-xl text-center sm:text-auto p-2'>
                        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-9'>
                <div className='flex flex-col sm:flex-row  flex-wrap gap-y-8 gap-6 justify-center items-center'>
                <Card title="Design & Development " description="50+ Courses Available" src="/images/11.png"/>
                <Card title="Marketing" description="50+ Courses Available" src="/images/12.png"/>
                <Card title="Development" description="50+ Courses Available" src="/images/13.png"/>
                </div>
                <div className='hidden sm:flex flex-wrap gap-y-8 gap-6 justify-center items-center'>
                <Card title="Communication " description="50+ Courses Available" src="/images/14.png"/>
                <Card title="Digital Marketing" description="50+ Courses Available" src="/images/15.png"/>
                <Card title="Self Development" description="50+ Courses Available" src="/images/16.png"/>
                </div>
                <div className='hidden sm:flex flex-wrap gap-y-8 gap-6 justify-center items-center'>
                <Card title="Business" description="50+ Courses Available" src="/images/17.png"/>
                <Card title="Finance" description="50+ Courses Available" src="/images/18.png"/>
                <Card title="consulting" description="50+ Courses Available" src="/images/19.png"/>
                </div>
                <div className='flex items-center justify-center w-full'>
                <button className=' hover:bg-black hover:text-white border-2 px-3 py-2  border-black rounded-lg bg-white text-black'>View All Courses</button>
                </div>
            </div>
        </div>
    )
}

export default ThirdMain
