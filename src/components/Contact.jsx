// import React from 'react'
// import { LuMail } from "react-icons/lu";
// import { GrLocation } from "react-icons/gr";
// import { TbSend } from "react-icons/tb";

// const Contact = () => {
//   return (
//     <section className='text-center flex flex-col items-center font-ibmMono pb-20 px-[7rem]'>
//         <div className='ml-64'>
//             <span className='text-lg text-[#548CA8] font-semibold'>[ 002 ]</span>
//         </div>
//         <h1 className='text-[3.5rem] font-bold text-[#334257] mb-5'>Get In Touch</h1>

//         <div className='flex'>
//             <div className='flex flex-col border-[3px] p-16' style={{ borderColor: 'var(--border-color)' }}>
//                 <label htmlFor="name" className='text-[#636363] text-[2.1rem] font-semibold mb-7'><span className='text-[#979797] text-xl font-semibold'>01 </span>What's Your Name?</label>
//                 <input type="text" name='name' placeholder='Name*' className='bg-transparent mb-7 text-xl border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500'/>

//                 <label htmlFor="email" className='text-[#636363] text-[2.1rem] font-semibold mb-7'><span className='text-[#979797] text-xl font-semibold'>02 </span>What's Your Mail?</label>
//                 <input type="text" name='email' placeholder='example@gmail.com*' className='bg-transparent mb-7 text-xl border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500'/>

//                 <label htmlFor="message" className='text-[#636363] text-[2.1rem] font-semibold mb-7 text-left'><span className='text-[#979797] text-xl font-semibold'>03 </span>Your Message</label>
//                 <textarea name='message' placeholder="Hello amaldeep, can you help me with...*" 
//                           className="bg-transparent text-left text-xl border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" 
//                           rows="2"></textarea>
//                 <div className='text-right mt-7'>
//                     <button className='border-[3px] w-fit px-4 py-1 text-xl font-semibold' style={{ borderColor: 'var(--border-color)' }}><TbSend style={{ display: 'inline-block', fontSize: '24px', marginRight: '10px'}}/>Submit</button>
//                 </div>
//             </div>
//             <div className='border-[3px] border-l-0 h-fit p-5 pb-0 px-0' style={{ borderColor: 'var(--border-color)' }}>
//                 <p className='text-[#548CA8] font-semibold mb-3 px-5'>[ CONTACT INFORMATION ]</p>
//                 {/* <p className='font-semibold text-[#424242]'>Bhubaneswar, India</p> */}
//                 <p className='font-semibold text-lg text-left mb-2 px-5'><GrLocation style={{ display: 'inline-block', fontSize: '32px' }}/> <span className='text-[#424242]'>Bhubaneswar, India</span></p>
//                 <p className='font-semibold text-lg mb-5 px-5'><LuMail style={{ display: 'inline-block', fontSize: '32px' }}/> <span className='text-[#424242]'>amaldeeppatra21@gmail.com</span></p>
//                 <div className='h-7' style={{ backgroundColor: 'var(--blackbox-color)' }}></div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Contact







// import React from 'react';
// import { LuMail } from "react-icons/lu";
// import { GrLocation } from "react-icons/gr";
// import { TbSend } from "react-icons/tb";

// const Contact = () => {
//   return (
//     <section className='text-center flex flex-col items-center font-ibmMono pb-20 px-4 md:px-[7rem]'>
//       <div className='ml-0 md:ml-64'>
//         <span className='text-lg text-[#548CA8] font-semibold'>[ 002 ]</span>
//       </div>
//       <h1 className='text-[2.5rem] md:text-[3.5rem] font-bold text-[#334257] mb-5'>Get In Touch</h1>

//       <div className='flex flex-col md:flex-row items-center md:items-start'>
//         <div className='flex flex-col border-[3px] p-6 md:p-16 mb-6 md:mb-0' style={{ borderColor: 'var(--border-color)' }}>
//           <label htmlFor="name" className='text-[#636363] text-[1.5rem] md:text-[2.1rem] font-semibold mb-4 md:mb-7'>
//             <span className='text-[#979797] text-xl font-semibold'>01 </span>What's Your Name?
//           </label>
//           <input type="text" name='name' placeholder='Name*' className='bg-transparent mb-4 md:mb-7 text-base md:text-xl border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500'/>

//           <label htmlFor="email" className='text-[#636363] text-[1.5rem] md:text-[2.1rem] font-semibold mb-4 md:mb-7'>
//             <span className='text-[#979797] text-xl font-semibold'>02 </span>What's Your Mail?
//           </label>
//           <input type="text" name='email' placeholder='example@gmail.com*' className='bg-transparent mb-4 md:mb-7 text-base md:text-xl border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500'/>

//           <label htmlFor="message" className='text-[#636363] text-[1.5rem] md:text-[2.1rem] font-semibold mb-4 md:mb-7 text-left'>
//             <span className='text-[#979797] text-xl font-semibold'>03 </span>Your Message
//           </label>
//           <textarea name='message' placeholder="Hello amaldeep, can you help me with...*" 
//                     className="bg-transparent text-left text-base md:text-xl border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" 
//                     rows="2"></textarea>
//           <div className='text-right mt-4 md:mt-7'>
//             <button className='border-[3px] w-fit px-4 py-1 text-base md:text-xl font-semibold' style={{ borderColor: 'var(--border-color)' }}>
//               <TbSend className='inline-block text-[20px] md:text-[24px] mr-2' />Submit
//             </button>
//           </div>
//         </div>
//         <div className='border-[3px] border-t-0 md:border-t-[3px] md:border-l-0 md:h-fit p-4 md:p-5 pb-0 md:pb-0 px-0 md:px-0' style={{ borderColor: 'var(--border-color)' }}>
//           <p className='text-[#548CA8] font-semibold mb-3 px-5'>[ CONTACT INFORMATION ]</p>
//           <p className='font-semibold text-left mb-2 px-5'>
//             <GrLocation className='inline-block text-[28px] md:text-[32px]' />{' '}
//             <span className='text-[#424242]'>Bhubaneswar, India</span>
//           </p>
//           <p className='font-semibold mb-5 px-5'>
//             <LuMail className='inline-block text-[28px] md:text-[32px]' />{' '}
//             <span className='text-[#424242]'>amaldeeppatra21@gmail.com</span>
//           </p>
//           <div className='h-7' style={{ backgroundColor: 'var(--blackbox-color)' }}></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;





import React, { useState } from 'react';
import { LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { TbSend } from "react-icons/tb";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required";
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Invalid email format";
    }

    if (!formData.message) {
      formErrors.message = "Message is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await fetch('https://portfolio-backend-rpxe.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Contact data sent successfully');
        // Reset form data and errors
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setErrors({});
        // You can add more actions here, like showing a success message
      } else {
        console.error('Failed to send contact data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className='text-center flex flex-col items-center font-ibmMono pb-20 px-4 md:px-[7rem]'>
      <div className='ml-0 md:ml-64'>
        <span className='text-lg text-[#548CA8] font-semibold'>[ 002 ]</span>
      </div>
      <h1 className='text-[2.5rem] md:text-[3.5rem] font-bold text-[#334257] mb-5'>Get In Touch</h1>

      <div className='flex flex-col md:flex-row items-center md:items-start'>
        <form onSubmit={handleSubmit} className='flex flex-col border-[3px] p-6 md:p-16 mb-6 md:mb-0' style={{ borderColor: 'var(--border-color)' }}>
          <label htmlFor="name" className='text-[#636363] text-[1.5rem] md:text-[2.1rem] font-semibold mb-4 md:mb-7'>
            <span className='text-[#979797] text-xl font-semibold'>01 </span>What's Your Name?
          </label>
          <input 
            type="text" 
            name='name' 
            value={formData.name} 
            onChange={handleChange} 
            placeholder='Name*' 
            className='bg-transparent mb-4 md:mb-7 text-base md:text-xl border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500'
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <label htmlFor="email" className='text-[#636363] text-[1.5rem] md:text-[2.1rem] font-semibold mb-4 md:mb-7'>
            <span className='text-[#979797] text-xl font-semibold'>02 </span>What's Your Mail?
          </label>
          <input 
            type="text" 
            name='email' 
            value={formData.email} 
            onChange={handleChange} 
            placeholder='example@gmail.com*' 
            className='bg-transparent mb-4 md:mb-7 text-base md:text-xl border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500'
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <label htmlFor="message" className='text-[#636363] text-[1.5rem] md:text-[2.1rem] font-semibold mb-4 md:mb-7 text-left'>
            <span className='text-[#979797] text-xl font-semibold'>03 </span>Your Message
          </label>
          <textarea 
            name='message' 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Hello amaldeep, can you help me with...*" 
            className="bg-transparent text-left text-base md:text-xl border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" 
            rows="2"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <div className='text-right mt-4 md:mt-7'>
            <button 
              type="submit" 
              className='border-[3px] w-fit px-4 py-1 text-base md:text-xl font-semibold' 
              style={{ borderColor: 'var(--border-color)' }}
            >
              <TbSend className='inline-block text-[20px] md:text-[24px] mr-2' />Submit
            </button>
          </div>
        </form>
        <div className='border-[3px] border-t-0 md:border-t-[3px] md:border-l-0 md:h-fit p-4 md:p-5 pb-0 md:pb-0 px-0 md:px-0' style={{ borderColor: 'var(--border-color)' }}>
          <p className='text-[#548CA8] font-semibold mb-3 px-5'>[ CONTACT INFORMATION ]</p>
          <p className='font-semibold text-left mb-2 px-5'>
            <GrLocation className='inline-block text-[28px] md:text-[32px]' />{' '}
            <span className='text-[#424242]'>Bhubaneswar, India</span>
          </p>
          <p className='font-semibold mb-5 px-5'>
            <LuMail className='inline-block text-[28px] md:text-[32px]' />{' '}
            <span className='text-[#424242]'>amaldeeppatra21@gmail.com</span>
          </p>
          <div className='h-7' style={{ backgroundColor: 'var(--blackbox-color)' }}></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;