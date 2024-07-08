// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className='flex justify-between px-[9.5rem] py-7 text-[2rem] font-ibmMono font-semibold'>
//         <div>Amaldeep</div>
//         <div className='flex gap-20'>
//             <div>Projects</div>
//             <div>Socials</div>
//         </div>
//     </nav>
//   )
// }

// export default Navbar


import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between px-8 md:px-[9.5rem] py-5 md:py-7 text-xl md:text-[2rem] font-ibmMono font-semibold'>
      <div>Amaldeep</div>
      <div className='flex gap-10 md:gap-20'>
        <div>Projects</div>
        <div>Socials</div>
      </div>
    </nav>
  );
};

export default Navbar;