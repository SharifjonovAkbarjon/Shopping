import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import hero from "../../assets/hero3.jpg";
import hero2 from "../../assets/hero4.jpg";
import hero3 from "../../assets/hero.jpg";
import hero4 from "../../assets/hero2.jpeg";
import one from '../../assets/onthis1.png'
import two from '../../assets/onthis2.png'


const BuHafta = () => {
    return (
        <div className='container'>
            <Swiper modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="w-[100%] flex gap-[10px]  h-[400px] mt-[20px]"
            >
                <SwiperSlide>
                    <div className="w-full h-full flex items-center justify-center">
                        <img className='object-cover rounded-[20px] w-full h-full' src={hero} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full flex items-center justify-center">
                        <img className='object-cover rounded-[20px] w-full h-full' src={hero2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full flex items-center justify-center">
                        <img className='object-cover rounded-[20px] w-full h-full' src={hero3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full flex items-center justify-center">
                        <img className='object-cover rounded-[20px] w-full h-full' src={hero4} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BuHafta