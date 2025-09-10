import React from 'react'
import { useGetCaruselQuery } from '../../context/api/createApi'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Carusel = () => {
    const { data: carusel, isLoading, isError, error } = useGetCaruselQuery();

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error: {error?.message}</p>
    if (!carusel || carusel.length === 0) return <p>No data  </p>
    return (
        <>
            <div className='container'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}  
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }} 
                    className="w-[100%] flex gap-[10px]  h-[400px] mt-[20px]"   
                >
                    {carusel.map((Pro) => (
                        <SwiperSlide key={Pro.id}> 
                            <img src={Pro.image} alt="" className="w-full h-full object-cover" /> 
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Carusel
