import React from 'react'
import profilePic from '../../public/images/profile pic square.png'

const Hero = () => {
  return (
    <section className='flex justify-between px-20 py-10 text-[2.5rem] font-ibmMono font-[500] items-center text-[#334257] mb-24'>
        <div className='left flex flex-col'>
          <span className='text-lg text-[#548CA8]'>Web Developer | ML Developer</span>
          <p className='font-bold'>Amaldeep Patra</p>
          <p className='text-lg w-[21rem]'>"Hi, I'm Amaldeep Patra, a CSE grad skillful in Full Stack Web Development and ML."</p>
        </div>
        <div className="right size-72">
            <img src={profilePic} alt="" className='rounded-[10rem]'/>
        </div>
    </section>
  )
}

export default Hero