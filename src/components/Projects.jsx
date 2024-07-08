// import React from 'react'
// import ProjectCard from './ProjectCard'

// const Projects = () => {
//   return (
//     <section className='text-center flex flex-col items-center font-ibmMono mb-48'>
//         <div className='ml-20'>
//             <span className='text-lg text-[#548CA8] font-semibold'>[ 001 ]</span>
//         </div>
//         <h1 className='text-[3.5rem] font-bold text-[#334257] mb-5'>Projects</h1>

//         <div className='flex gap-28 mb-5'>
//             <ProjectCard/>
//             <ProjectCard/>
//             <ProjectCard/>
//         </div>
//     </section>
//   )
// }

// export default Projects




// import React from 'react'
// import ProjectCard from './ProjectCard'

// const Projects = () => {
//   const projectData = [
//     {
//       date: '#1 [ 11 / Mar / 2023 ]',
//       title: 'Substitute Faculty System',
//       technologies: 'ExpressJS, MongoDB',
//       links: '/github /view',
//       url: 'https://substitute-faculty-system.onrender.com'
//     },
//     {
//       date: '#2 [ 20 / Apr / 2023 ]',
//       title: 'Training Data Share Platform',
//       technologies: 'ExpressJS, MongoDB',
//       links: '/github /view',
//       url: 'https://tdsportal.onrender.com'
//     },
//     {
//       date: '#3 [ 15 / May / 2023 ]',
//       title: 'Kiit GPT',
//       technologies: 'Python, Llama3',
//       links: '/github /view',
//       url: 'https://github.com/amaldeeppatra/GPT-Web'
//     }
//   ];

//   return (
//     <section className='text-center flex flex-col items-center font-ibmMono mb-48'>
//         <div className='ml-20'>
//             <span className='text-lg text-[#548CA8] font-semibold'>[ 001 ]</span>
//         </div>
//         <h1 className='text-[3.5rem] font-bold text-[#334257] mb-5'>Projects</h1>

//         <div className='flex gap-28 mb-5'>
//             {projectData.map((project, index) => (
//               <ProjectCard 
//                 key={index} 
//                 date={project.date} 
//                 title={project.title} 
//                 technologies={project.technologies} 
//                 links={project.links}
//                 url={project.url}
//               />
//             ))}
//         </div>
//     </section>
//   )
// }

// export default Projects





// import React from 'react';
// import ProjectCard from './ProjectCard';

// const Projects = () => {
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
//     }
//   ];

//   return (
//     <section className='text-center flex flex-col items-center font-ibmMono mb-48 px-[7rem]'>
//       <div className='ml-20'>
//         <span className='text-lg text-[#548CA8] font-semibold'>[ 001 ]</span>
//       </div>
//       <h1 className='text-[3.5rem] font-bold text-[#334257] mb-5'>Projects</h1>

//       <div className='flex gap-28 mb-5'>
//         {projectData.map((project, index) => (
//           <ProjectCard 
//             key={index} 
//             date={project.date} 
//             title={project.title} 
//             technologies={project.technologies} 
//             links={project.links}
//             url={project.url}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectData = [
    {
      date: '#1 [ 1 / July / 2024 ]',
      title: 'Substitute Faculty System',
      technologies: 'ExpressJS, MongoDB',
      links: '/github /view',
      url: 'https://substitute-faculty-system.onrender.com'
    },
    {
      date: '#2 [ 30 / June / 2024 ]',
      title: 'Training Data Share Platform',
      technologies: 'ExpressJS, MongoDB',
      links: '/github /view',
      url: 'https://tdsportal.onrender.com'
    },
    {
      date: '#3 [ 24 / May / 2024 ]',
      title: 'KiiT GPT',
      technologies: 'Python, Llama3',
      links: '/github /view',
      url: 'https://github.com/amaldeeppatra/KiiT-GPT'
    }
  ];

  return (
    <section className='text-center flex flex-col items-center font-ibmMono mb-48 px-8 md:px-[7rem]'>
      <div className='ml-0 md:ml-20'>
        <span className='text-lg text-[#548CA8] font-semibold'>[ 001 ]</span>
      </div>
      <h1 className='text-[2rem] md:text-[3.5rem] font-bold text-[#334257] mb-5'>Projects</h1>

      <div className='flex flex-col md:flex-row gap-8 md:gap-28 '>
        {projectData.map((project, index) => (
          <ProjectCard 
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
  );
};

export default Projects;
