// import React from 'react'
// import profilePic from '/images/profile pic square.png'

// const Hero = () => {
//   return (
//     <section className='flex justify-between px-[12rem] py-10 text-[2.5rem] font-ibmMono font-[500] items-center text-[#334257] mb-24'>
//         <div className='left flex flex-col'>
//           <span className='text-lg text-[#548CA8]'>Web Developer | ML Developer</span>
//           <p className='font-bold'>Amaldeep Patra</p>
//           <p className='text-lg w-[21rem]'>"Hi, I'm Amaldeep Patra, a CSE grad skillful in Full Stack Web Development and ML."</p>
//         </div>
//         <div className="right size-72">
//             <img src={profilePic} alt="" className='rounded-[10rem]'/>
//         </div>
//     </section>
//   )
// }

// export default Hero


import React from 'react';
import profilePic from '/images/profile pic square.png';

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row justify-between px-8 md:px-[12rem] py-10 text-[2rem] md:text-[2.5rem] font-ibmMono font-[500] items-center text-[#334257] mb-24'>
      <div className='left flex flex-col items-center md:items-start text-center md:text-left'>
        <span className='text-base md:text-lg text-[#548CA8]'>Web Developer | ML Developer</span>
        <p className='font-bold mt-2'>Amaldeep Patra</p>
        <p className='text-base md:text-lg w-full md:w-[21rem] mt-4'>"Hi, I'm Amaldeep Patra, a CSE grad skillful in Full Stack Web Development and ML."</p>
      </div>
      <div className="right mt-8 md:mt-0 w-40 h-40 md:w-[18rem] md:h-[18rem]">
        <img src={profilePic} alt="Profile Picture" className='rounded-full w-full h-full object-cover' />
      </div>
    </section>
  );
};

export default Hero;