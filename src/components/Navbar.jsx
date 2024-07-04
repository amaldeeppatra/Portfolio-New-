import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-10 py-7 text-[2rem] font-ibmMono font-semibold'>
        <div>Amaldeep</div>
        <div className='flex gap-20'>
            <div>Projects</div>
            <div>Socials</div>
        </div>
    </nav>
  )
}

export default Navbar