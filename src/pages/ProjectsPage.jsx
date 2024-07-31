// import React from 'react'
// import Navbar from '../components/Navbar'
// import Hero from '../components/Hero'
// import Projects from '../components/Projects'
// import ProjectCard from '../components/ProjectCard'
// import ProjectPageCard from '../components/Projects/ProjectPageCard'

// const ProjectsPage = () => {
//   const projectData = [
//     {
//       date: '#1 [ 1 / July / 2024 ]',
//       title: 'Substitute Faculty System',
//       technologies: 'ExpressJS, MongoDB',
//       links: '/github /view',
//       url: 'https://substitute-faculty-system.onrender.com'
//     },
//     {
//       date: '#2 [ 30 / June / 2024 ]',
//       title: 'Training Data Share Platform',
//       technologies: 'ExpressJS, MongoDB',
//       links: '/github /view',
//       url: 'https://tdsportal.onrender.com'
//     },
//     {
//       date: '#3 [ 24 / May / 2024 ]',
//       title: 'KiiT GPT',
//       technologies: 'Python, Llama3',
//       links: '/github /view',
//       url: 'https://github.com/amaldeeppatra/KiiT-GPT'
//     },
//     {
//       date: '#3 [ 24 / May / 2024 ]',
//       title: 'KiiT GPT',
//       technologies: 'Python, Llama3',
//       links: '/github /view',
//       url: 'https://github.com/amaldeeppatra/KiiT-GPT'
//     },
//     {
//       date: '#3 [ 24 / May / 2024 ]',
//       title: 'KiiT GPT',
//       technologies: 'Python, Llama3',
//       links: '/github /view',
//       url: 'https://github.com/amaldeeppatra/KiiT-GPT'
//     },
//     {
//       date: '#3 [ 24 / May / 2024 ]',
//       title: 'KiiT GPT',
//       technologies: 'Python, Llama3',
//       links: '/github /view',
//       url: 'https://github.com/amaldeeppatra/KiiT-GPT'
//     },
//   ];
//   return (
//       <>
//         <Navbar/>
//         <section className='flex flex-col items-center font-ibmMono mt-10 px-8 md:px-[7rem]'>
//           <div className='flex flex-col md:flex-row gap-8 md:gap-28 '>
//           {projectData.map((project, index) => (
//             <ProjectPageCard 
//               key={index} 
//               date={project.date} 
//               title={project.title} 
//               technologies={project.technologies} 
//               links={project.links}
//               url={project.url}
//             />
//           ))}
//         </div>
//         </section>
//       </>
//   )
// }

// export default ProjectsPage




import React from 'react';
import Navbar from '../components/Navbar';
import ProjectPageCard from '../components/Projects/ProjectPageCard';

const ProjectsPage = () => {
  const projectData = [
    
    {
      date: '#1 [ Ongoing ]',
      title: 'FieldFuse: The Football App',
      technologies: 'React, Express',
      links: '/github /view',
      url: 'https://github.com/amaldeeppatra/Football-Web-App'
    },
    {
      date: '#2 [ Ongoing ]',
      title: 'Event Management System',
      technologies: 'React, Express',
      links: '/github /view',
      url: 'https://event-management-system-nu.vercel.app'
    },
    {
      date: '#3 [ 1 / July / 2024 ]',
      title: 'Substitute Faculty System',
      technologies: 'ExpressJS, MongoDB',
      links: '/github /view',
      url: 'https://substitute-faculty-system.onrender.com'
    },
    {
      date: '#4 [ 30 / June / 2024 ]',
      title: 'Training Data Share Platform',
      technologies: 'ExpressJS, MongoDB',
      links: '/github /view',
      url: 'https://tdsportal.onrender.com'
    },
    {
      date: '#5 [ 24 / May / 2024 ]',
      title: 'KiiT GPT',
      technologies: 'Python, Llama3',
      links: '/github /view',
      url: 'https://github.com/amaldeeppatra/KiiT-GPT'
    },
    {
      date: '#6 [ 02 / April / 2024 ]',
      title: 'Cat AR',
      technologies: 'Unity',
      links: '/github /view',
      url: 'https://github.com/amaldeeppatra/Cat-AR'
    },
    {
      date: '#7 [ 12 / March / 2024 ]',
      title: 'PDF Summarizer',
      technologies: 'Python, HuggingFace',
      links: '/github /view',
      url: 'https://github.com/amaldeeppatra/PDF-Summarizer'
    },
    {
      date: '#8 [ 01 / May / 2021 ]',
      title: 'RPG Game',
      technologies: 'Python',
      links: '/github /view',
      url: 'https://github.com/amaldeeppatra/Simple-RPG-Game'
    }
  ];

  return (
    <>
      <Navbar />
      <section className='flex flex-col items-center font-ibmMono mt-10 pb-10 px-8 md:px-[10rem]'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
          {projectData.map((project, index) => (
            <ProjectPageCard 
              key={index} 
              date={project.date} 
              title={project.title} 
              technologies={project.technologies} 
              links={project.links}
              url={project.url}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;