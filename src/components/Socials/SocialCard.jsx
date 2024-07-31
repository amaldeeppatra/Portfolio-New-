// import React, { useState, useEffect } from 'react';
// import { TiSocialLinkedin } from "react-icons/ti";
// import { IoLogoGithub } from "react-icons/io5";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

// const SocialCard = ({ platform, username, profileLink, followers, connections }) => {
//   const [currentFollowers, setCurrentFollowers] = useState(0);
//   const [currentConnections, setCurrentConnections] = useState(0);

//   useEffect(() => {
//     const duration = 2000; // duration of the animation in milliseconds
//     const intervalTime = 10; // interval time in milliseconds

//     const incrementFollowers = followers / (duration / intervalTime);
//     const incrementConnections = connections / (duration / intervalTime);

//     const interval = setInterval(() => {
//       setCurrentFollowers((prev) => {
//         if (prev < followers) {
//           return Math.min(prev + incrementFollowers, followers);
//         } else {
//           return prev;
//         }
//       });
//       setCurrentConnections((prev) => {
//         if (prev < connections) {
//           return Math.min(prev + incrementConnections, connections);
//         } else {
//           return prev;
//         }
//       });
//     }, intervalTime);

//     return () => clearInterval(interval);
//   }, [followers, connections]);

//   const iconMap = {
//     linkedin: <TiSocialLinkedin className="text-[5rem] bg-blue-600 text-white p-2 rounded-[15px]" />,
//     github: <IoLogoGithub className="text-[6rem] p-2" />,
//     twitter: <FaTwitter className="text-[5rem] text-[#1DA1F2] p-2" />,
//     instagram: <FaInstagram className="text-[5rem] p-2 instaIcon" />,
//   };

//   return (
//     <div className="flex justify-center font-ibmMono">
//       <div className="border-[3px] border-black flex items-center p-6 space-x-6 shadow-lg rounded-lg">
//         {iconMap[platform]}
//         <div className="space-y-2">
//           <div className="text-xl font-semibold">{username}</div>
//           <div className="text-sm text-gray-700">Followers: {Math.floor(currentFollowers)}</div>
//           <div className="text-sm text-gray-700">Connections: {Math.floor(currentConnections)}+</div>
//           <button
//             className="bg-blue-600 text-white rounded-full px-4 py-2 font-semibold hover:bg-blue-700 transition"
//             onClick={() => window.open(profileLink, '_blank')}
//           >
//             View Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SocialCard;






import React, { useState, useEffect } from 'react';
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io5";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const SocialCard = ({ platform, username, profileLink, followers, connections }) => {
  const [currentFollowers, setCurrentFollowers] = useState(0);
  const [currentConnections, setCurrentConnections] = useState(0);

  useEffect(() => {
    const duration = 2000; // duration of the animation in milliseconds
    const intervalTime = 10; // interval time in milliseconds

    const incrementFollowers = followers / (duration / intervalTime);
    const incrementConnections = connections ? connections / (duration / intervalTime) : 0;

    const interval = setInterval(() => {
      setCurrentFollowers((prev) => {
        if (prev < followers) {
          return Math.min(prev + incrementFollowers, followers);
        } else {
          return prev;
        }
      });
      setCurrentConnections((prev) => {
        if (connections && prev < connections) {
          return Math.min(prev + incrementConnections, connections);
        } else {
          return prev;
        }
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [followers, connections]);

  const iconMap = {
    linkedin: <TiSocialLinkedin className="text-[5rem] bg-blue-600 text-white p-2 rounded-[15px]" />,
    github: <IoLogoGithub className="text-[6rem] p-2" />,
    twitter: <FaTwitter className="text-[5rem] text-[#1DA1F2] p-2" />,
    instagram: <FaInstagram className="text-[5rem] p-2 instaIcon" />,
  };

  return (
    <div className="flex justify-center font-ibmMono">
      <div className="border-[3px] border-black flex items-center p-6 space-x-6 shadow-lg rounded-lg" style={{ borderColor: 'var(--border-color)' }}>
        {iconMap[platform]}
        <div className="space-y-3">
          <div className="text-xl font-semibold">{username}</div>
          <div className="text-sm ">Followers: {Math.floor(currentFollowers)}</div>
          {platform === 'linkedin' && (
            <div className="text-sm ">Connections: {Math.floor(currentConnections)}+</div>
          )}
          <button
            className="bg-blue-600 text-white rounded-full px-4 py-2 font-semibold hover:bg-blue-700 transition"
            onClick={() => window.open(profileLink, '_blank')}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;