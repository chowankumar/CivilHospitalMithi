import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/health-awareness');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col items-center sm:flex-row bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-10 md:mx-4 overflow-hidden">
            {/* Left Side Content */}
            <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
                    "Your Health, Our Priority"
                </h2>
                <p className="mt-4 text-lg sm:text-xl text-gray-100">
                    Ensuring quality healthcare services for every resident of Tharparkar. Stay healthy, stay safe!
                </p>
                 
            </div>

            {/* Right Side Image */}
            <div className="hidden sm:block md:w-1/2 lg:w-[300px] relative">
                <img 
                    className="w-[250px] rounded-xl" 
                    src="/DHO.jpg" 
                    alt="DHO Tharparkar Health Awareness"
                />
            </div>
        </div>
    );
};

export default Banner;
