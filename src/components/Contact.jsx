import React from 'react'
import { LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { TbSend } from "react-icons/tb";

const Contact = () => {
  return (
    <section className='text-center flex flex-col items-center font-ibmMono mb-20'>
        <div className='ml-64'>
            <span className='text-lg text-[#548CA8] font-semibold'>[ 002 ]</span>
        </div>
        <h1 className='text-[3.5rem] font-bold text-[#334257] mb-5'>Get In Touch</h1>

        <div className='flex'>
            <div className='flex flex-col border-[3px] border-black p-16'>
                <label htmlFor="name" className='text-[#636363] text-[2.1rem] font-semibold mb-7'><span className='text-[#979797] text-xl font-semibold'>01 </span>What's Your Name?</label>
                <input type="text" name='name' placeholder='Name*' className='bg-transparent mb-7 text-xl border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500'/>

                <label htmlFor="email" className='text-[#636363] text-[2.1rem] font-semibold mb-7'><span className='text-[#979797] text-xl font-semibold'>02 </span>What's Your Mail?</label>
                <input type="text" name='email' placeholder='example@gmail.com*' className='bg-transparent mb-7 text-xl border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500'/>

                <label htmlFor="message" className='text-[#636363] text-[2.1rem] font-semibold mb-7 text-left'><span className='text-[#979797] text-xl font-semibold'>03 </span>Your Message</label>
                <textarea name='message' placeholder="Hello amaldeep, can you help me with...*" 
                          className="bg-transparent text-left text-xl border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" 
                          rows="2"></textarea>
                <div className='text-right mt-7'>
                    <button className='border-[3px] border-black w-fit px-4 py-1 text-xl font-semibold'><TbSend style={{ display: 'inline-block', fontSize: '24px', marginRight: '10px' }}/>Submit</button>
                </div>
            </div>
            <div className='border-[3px] border-l-0 border-black h-fit p-5 pb-0 px-0'>
                <p className='text-[#548CA8] font-semibold mb-3 px-5'>[ CONTACT INFORMATION ]</p>
                {/* <p className='font-semibold text-[#424242]'>Bhubaneswar, India</p> */}
                <p className='font-semibold text-lg text-left mb-2 px-5'><GrLocation style={{ display: 'inline-block', fontSize: '32px' }}/> <span className='text-[#424242]'>Bhubaneswar, India</span></p>
                <p className='font-semibold text-lg mb-5 px-5'><LuMail style={{ display: 'inline-block', fontSize: '32px' }}/> <span className='text-[#424242]'>amaldeeppatra21@gmail.com</span></p>
                <div className='h-7 bg-black'></div>
            </div>
        </div>
    </section>
  )
}

export default Contact