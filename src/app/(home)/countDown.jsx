"use client"
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {

    
    
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft,calculateTimeLeft]);

  const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
  return (
    <div className='mt-20 md:mt-0'>
        <div className='text-white w-full'>
      {timeLeft.days > 0 && <span className='p-6 border-2 border-white rounded text-2xl font-bold '>{timeLeft.days}d </span>}
      {timeLeft.hours > 0 && <span  className='p-6 border-2 border-white rounded text-2xl font-bold '>{timeLeft.hours}h </span>}
      {timeLeft.minutes > 0 && <span className='p-6 border-2 border-white rounded text-2xl font-bold '>{timeLeft.minutes}m </span>}
      {timeLeft.seconds > 0 && <span className='p-6 border-2 border-white rounded text-2xl font-bold '>{timeLeft.seconds}s</span>}
    </div>

    <div className='mt-6 mx-10 ml-20'>
    
            <button className="btn-outline border-2 border-orange-600 hover:bg-orange-600  hover:border-none text-white font-semibold py-3 px-6 rounded-full mt-6 ml-6">
              Book Ticket
            </button>
    </div>
    </div>
  );
};

export default CountdownTimer;
