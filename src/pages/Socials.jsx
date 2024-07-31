// import React from 'react'
// import Navbar from '../components/Navbar'
// import SocialCard from '../components/Socials/SocialCard';
// import ResumeDownload from '../components/Socials/ResumeDownload';


// const Socials = () => {
//   const socialProfiles = [
//     {
//       platform: 'linkedin',
//       username: '/amaldeep-patra',
//       profileLink: 'https://www.linkedin.com/in/amaldeep-patra-246bb8247/',
//       followers: 635,
//       connections: 500,
//     },
//     {
//       platform: 'github',
//       username: '/amaldeeppatra',
//       profileLink: 'https://www.github.com/amaldeeppatra',
//       followers: 300,
//     },
//     {
//       platform: 'twitter',
//       username: '@amaldeep_patra',
//       profileLink: 'https://twitter.com/amaldeep_patra',
//       followers: 200,
//     },
//     {
//       platform: 'instagram',
//       username: '@amaldeep.21022',
//       profileLink: 'https://instagram.com/amaldeep.21022',
//       followers: 266,
//     },
//   ];

//   return (
//     <>
//       <Navbar/>

//       <section className="grid grid-cols-2 gap-6 pt-10 relative font-ibmMono pb-[9.7rem]">
//             <SocialCard {...socialProfiles[0]} />
//             <SocialCard {...socialProfiles[1]} />
//             <div className="col-span-2 flex justify-center items-center">
//               <ResumeDownload/>
//             </div>
//             <SocialCard {...socialProfiles[2]} />
//             <SocialCard {...socialProfiles[3]} />
//       </section>
//     </>
//   )
// }

// export default Socials


import React from 'react';
import Navbar from '../components/Navbar';
import SocialCard from '../components/Socials/SocialCard';
import ResumeDownload from '../components/Socials/ResumeDownload';

const Socials = () => {
  const socialProfiles = [
    {
      platform: 'linkedin',
      username: '/amaldeep-patra',
      profileLink: 'https://www.linkedin.com/in/amaldeep-patra-246bb8247/',
      followers: 635,
      connections: 500,
    },
    {
      platform: 'github',
      username: '/amaldeeppatra',
      profileLink: 'https://www.github.com/amaldeeppatra',
      followers: 300,
    },
    {
      platform: 'twitter',
      username: '@amaldeep_patra',
      profileLink: 'https://twitter.com/amaldeep_patra',
      followers: 200,
    },
    {
      platform: 'instagram',
      username: '@amaldeep.21022',
      profileLink: 'https://instagram.com/amaldeep.21022',
      followers: 266,
    },
  ];

  return (
    <>
      <Navbar />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 pt-10 md:pb-[9.7rem] pb-7 relative font-ibmMono">
        <SocialCard {...socialProfiles[0]} />
        <SocialCard {...socialProfiles[1]} />
        <div className="col-span-1 sm:col-span-2 flex justify-center items-center">
          <ResumeDownload />
        </div>
        <SocialCard {...socialProfiles[2]} />
        <SocialCard {...socialProfiles[3]} />
      </section>
    </>
  );
};

export default Socials;