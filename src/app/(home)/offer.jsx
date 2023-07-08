import React from 'react';

const Offers = () => {
    return (
        <div className='offers z-20 flex items-center justify-between lg:px-32'>
            <div className=''>
            <h2 className='text-white text-2xl font-bold mb-2'><span  className='text-5xl text-orange-700'>20%</span> off In July  Month for Wedding</h2>
            <p>Reach out to us today and let us create an extraordinary and memorable experience for your event.</p>
            </div>
            <div>
            <button className='bg-white py-4 px-5 font-bold rounded-full text-orange-500 hover:bg-orange-600 hover:text-white'>Register for an Event</button>
            </div>
        </div>
    );
};

export default Offers;