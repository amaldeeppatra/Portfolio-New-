import React, { useEffect } from 'react';

const WakeupServer = () => {
  useEffect(() => {
    const wakeUp = async () => {
      try {
        const response = await fetch('https://portfolio-backend-rpxe.onrender.com/');
        if (response.ok) {
          console.log('Backend server is awake');
        } else {
          console.error('Error waking up the backend server:', response.statusText);
        }
      } catch (error) {
        console.error('Error waking up the backend server:', error);
      }
    };
    wakeUp();
  }, []);

  return null; // This component does not render anything
};

export default WakeupServer;