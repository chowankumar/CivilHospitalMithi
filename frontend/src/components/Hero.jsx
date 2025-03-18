import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slide1 from '/Slide1.jpg';
import Slide2 from '/Slide2.jpg';
import Slide3 from '/Slide3.jpg';

import { MdOutlineExpandMore } from "react-icons/md";

const slidesData = [
  {
    title: "Transforming Ideas into Innovative Solutions",
    description:
      "Empowering businesses with cutting-edge solutions that drive growth and success. We blend creativity with expertise to turn visionary ideas into tangible results",
    button1Label: "Discover Now",
    button2Label: "Learn more",
    imageUrl: Slide1,
  },
  {
    title: "Transforming Ideas into Innovative Solutions",
    description:
      "Empowering businesses with cutting-edge solutions that drive growth and success. We blend creativity with expertise to turn visionary ideas into tangible results",
    button1Label: "Discover Now",
    button2Label: "Learn more",
    imageUrl: Slide2,
  },
  {
    title: "Transforming Ideas into Innovative Solutions",
    description:
      "Empowering businesses with cutting-edge solutions that drive growth and success. We blend creativity with expertise to turn visionary ideas into tangible results",
    button1Label: "Discover Now",
    button2Label: "Learn more",
    imageUrl: Slide3,
  },
];

const HeroSection = () => {
  return (
    <section className="dark:bg-surface-color bg-on-surface-color text-on-surface-color w-full h-screen">
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
          loop={true}
          effect="fade"
          speed={2000}
          className="w-full h-[80vh]"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex items-center justify-center h-full text-white">
                <img
                  src={slide.imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
                 
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
