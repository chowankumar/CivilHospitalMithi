import React from 'react'
import {assets} from '../assets/assets'


const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div className='flex gap-2 items-center justify-center'> 
                <img  className=' w-20' src={assets.logo2} alt="" />
                <p className='flex flex-col gap-2 text-gray-600'>Mithi Civil Hospital is a government healthcare facility providing essential medical services, including emergency care, outpatient treatment, and maternal health, ensuring quality and affordable care for the community.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+92 3499435773</li>
                    <li>chowanmalhani5@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Chowan.com. All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer