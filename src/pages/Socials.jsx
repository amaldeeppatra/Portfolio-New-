import React from 'react'
import Navbar from '../components/Navbar'
import { TiSocialLinkedin } from "react-icons/ti";

const Socials = () => {
  return (
    <>
      <Navbar/>
      <div className='p-10'>
        <span className='hover:text-blue-600'>
        <TiSocialLinkedin style={{
          fontSize:'5rem',
          border:'2px solid black',
          borderRadius:'20px',
          cursor:'pointer',
          }}/>
        </span>
      </div>
    </>
  )
}

export default Socials