import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>


      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Mithi Civil Hospital is a government healthcare facility committed to delivering quality medical care to the people of Mithi and surrounding areas. We provide a wide range of healthcare services, including emergency care, outpatient treatment, maternal and child health, and specialized medical services. Our hospital is equipped with modern facilities and a dedicated team of healthcare professionals who work tirelessly to ensure the well-being of our patients. We believe in compassionate, patient-centered care and strive to make quality healthcare accessible to all.</p>
          <b className='text-gray-800'>Our Vision
          </b>
          <p>To be a leading government healthcare institution that ensures accessible, high-quality, and affordable medical services for all. We aim to strengthen the public healthcare system by providing advanced medical care, promoting preventive health initiatives, and enhancing medical infrastructure. Our vision is to create a healthier society where every individual, regardless of socio-economic status, receives compassionate and effective treatment.</p>
        </div>
      </div>

      <div className='text-4xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE USE</span></p>
      </div>


      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>We prioritize timely, effective healthcare by optimizing resources, streamlining processes, and ensuring prompt diagnosis and treatment for all patients.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>We ensure accessible and hassle-free healthcare through well-organized facilities, efficient patient services, and a streamlined appointment system for a seamless experience.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>We provide patient-centered care, tailoring treatments to individual needs with compassion, respect, and a commitment to improving overall well-being.</p>
        </div>
      </div>

    </div>
  )
}

export default About
