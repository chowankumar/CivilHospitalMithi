import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        
        {/* Embedded Google Map for Mithi Civil Hospital */}
        <iframe
          className='w-full md:w-1/2 h-80 rounded-lg shadow-lg'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.7451437070786!2d69.80505957532822!3d24.7430829780107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3942e25e8b6e6ff3%3A0x9d78e908c5d2b3b4!2sCivil%20Hospital%20Mithi!5e0!3m2!1sen!2s!4v1710557425672!5m2!1sen!2s'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
        
        <div className='w-full md:w-1/2 flex flex-col justify-center items-start gap-6 bg-gray-100 p-6 rounded-lg shadow-lg h-80'>
          <p className='font-semibold text-lg text-gray-600 flex items-center gap-2'><FaMapMarkerAlt /> OUR OFFICE</p>
          <p className='text-gray-500'>Civil Hospital Mithi <br />
            Tharparkar, Sindh, Pakistan</p>
          
          <p className='font-semibold text-lg text-gray-600 flex items-center gap-2'><FaPhone /> CONTACT INFO</p>
          <p className='text-gray-500'>Tel: (000) 000-0000 <br />
            <span className='flex items-center gap-2'><FaEnvelope /> Email: info@mithicivilhospital.com</span></p>
          
         
           
        </div>
      </div>
    </div>
  );
};

export default Contact;
