import React from 'react'

const ProjectCard = () => {
  return (
    <div className='text-left border-[3px] border-black font-bold'>
        <div className='p-5'>
            <p className='text-[#548CA8]'>#1 [ 11 / Mar / 2023 ]</p>
            <p>Substitute Faculty System</p>
        </div>
        <div className='flex border-t-[3px] border-black'>
            <div className='p-3 border-r-[3px] border-black w-1/3'>ExpressJS, MongoDB</div>
            <div className='p-3'>/github /view</div>
            <div className='w-20 bg-black'></div>
        </div>
    </div>
  )
}

export default ProjectCard