"use client"
import React, { useEffect } from 'react';
import { AiOutlineRead } from 'react-icons/ai';
import { BsBalloonFill, BsBasket3Fill, BsPaintBucket } from 'react-icons/bs';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { SiGooglemarketingplatform } from 'react-icons/si';

import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesSection = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='my-10'>
            <div data-aos="fade-up"
     data-aos-duration="3000" className='text-center my-10 '>
                <p className='text-xl text-gray-400'>We are Event Master</p>
            <h2 className='text-4xl font-bold'>Why to Choose Us</h2>
            <div className='border-t-4 border-orange-500 mt-1 w-36 mx-auto'></div>
            </div>

            <div data-aos="fade-up"
     data-aos-duration="3000" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 lg:mx-44'>
                <div  className='border rounded text-center px-3 py-4 hover:bg-gradient-to-br hover:from-orange-500  hover:to-yellow-500 hover:text-white hover:transform hover:scale-105  hover:transition-all hover:duration-300'>
                    
                    <AiOutlineRead className='w-16 h-16 mx-auto'></AiOutlineRead>
                    
                    <h3 className='text-2xl font-bold'>Event Planning and Coordination</h3>
                    <p className='mt-2'>
                    <small>Offer comprehensive event planning services, where you assist clients in organizing and managing their events from start to finish.</small> 
                    </p>
                </div>
                <div  className='border rounded text-center px-3 py-4 hover:bg-gradient-to-br hover:from-orange-500  hover:to-yellow-500 hover:text-white hover:transform hover:scale-105  hover:transition-all hover:duration-300'>
                    
                    <FaMoneyCheckAlt className='w-16 h-16 mx-auto'></FaMoneyCheckAlt>
                    
                    <h3 className='text-2xl font-bold'>Budget Planning</h3>
                    <p className='mt-2'>
                    <small>Help clients establish and manage their event budgets.</small> 
                    </p>
                </div>
                <div  className='border rounded text-center px-3 py-4 hover:bg-gradient-to-br hover:from-orange-500  hover:to-yellow-500 hover:text-white hover:transform hover:scale-105  hover:transition-all hover:duration-300'>
                    
                    <BsPaintBucket className='w-16 h-16 mx-auto'></BsPaintBucket>
                    
                    <h3 className='text-2xl font-bold'>Theme and Design</h3>
                    <p className='mt-2'>
                    <small>Provide creative concepts, décor ideas, and coordination of event styling elements.</small> 
                    </p>
                </div>
                <div  className='border rounded text-center px-3 py-4 hover:bg-gradient-to-br hover:from-orange-500  hover:to-yellow-500 hover:text-white hover:transform hover:scale-105  hover:transition-all hover:duration-300'>
                    
                    <BsBasket3Fill className='w-16 h-16 mx-auto'></BsBasket3Fill>
                    
                    <h3 className='text-2xl font-bold'>On-site Event Support</h3>
                    <p className='mt-2'>
                    <small>Provide on-site event support services, including event setup, registration desk management, attendee assistance, and troubleshooting during the event.</small> 
                    </p>
                </div>
                <div  className='border rounded text-center px-3 py-4 hover:bg-gradient-to-br hover:from-orange-500  hover:to-yellow-500 hover:text-white hover:transform hover:scale-105  hover:transition-all hover:duration-300'>
                    
                    <BsBalloonFill className='w-16 h-16 mx-auto'></BsBalloonFill>
                    
                    <h3 className='text-2xl font-bold'>Venue Selection</h3>
                    <p className='mt-2'>
                    <small>Help clients find suitable event venues based on their preferences, budget, and event requirements.</small> 
                    </p>
                </div>
                <div  className='border rounded text-center px-3 py-4 hover:bg-gradient-to-br hover:from-orange-500  hover:to-yellow-500 hover:text-white hover:transform hover:scale-105  hover:transition-all hover:duration-300'>
                    
                    <SiGooglemarketingplatform className='w-16 h-16 mx-auto'></SiGooglemarketingplatform>
                    
                    <h3 className='text-2xl font-bold'>Event Promotion and Marketing</h3>
                    <p className='mt-2'>
                    <small>Support clients in promoting their events through various marketing channels.</small> 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;