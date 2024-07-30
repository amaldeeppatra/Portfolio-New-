import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import ProjectCard from '../components/ProjectCard'

const ProjectsPage = () => {
  return (
      <>
        <Navbar/>
        {/* <div> */}
            <Projects/>
            <Projects/>
            <Projects/>
            <Projects/>
        {/* </div> */}
      </>
  )
}

export default ProjectsPage