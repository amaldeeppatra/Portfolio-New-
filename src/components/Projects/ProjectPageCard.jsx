import React from 'react'

const ProjectPageCard = ({ date, title, technologies, links, url }) => {
  return (
    <div className='text-left border-[3px] font-bold' style={{ borderColor: 'var(--border-color)' }}>
      <div className='p-5'>
        <p className='text-[#548CA8]'>{date}</p>
        <p className='text-[1rem]'>{title}</p>
      </div>
      <div className='flex border-t-[3px]' style={{ borderColor: 'var(--border-color)' }}>
        <div className='p-3 border-r-[3px] w-1/3' style={{ borderColor: 'var(--border-color)' }}>{technologies}</div>
        <div className='p-3'>{links}</div>
        <div className='relative w-[7rem]' style={{ backgroundColor: 'var(--blackbox-color)' }}>
          <a href={url} target='blank' className='absolute inset-0 flex items-center justify-center p-7 opacity-0 hover:opacity-100 transition-opacity duration-300' style={{ color: 'var(--blackbox-text)' }}>
            Open Project
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectPageCard