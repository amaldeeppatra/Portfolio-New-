import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='text-center flex flex-col items-center font-ibmMono mb-48'>
        <div className='ml-20'>
            <span className='text-lg text-[#548CA8] font-semibold'>[ 001 ]</span>
        </div>
        <h1 className='text-[3.5rem] font-bold text-[#334257] mb-5'>Projects</h1>

        <div className='flex gap-28 mb-5'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    </section>
  )
}

export default Projects