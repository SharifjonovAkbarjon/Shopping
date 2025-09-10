import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import first from '../../assets/first.png'
import second from '../../assets/second.png'
import third from '../../assets/third.png'
import fourth from '../../assets/fourth.png'

const News = [
    {
        img: first,
        text:'How grocers are approaching delivery as the market evolves',
        paragraph:'Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass',      
    },
    {
        img: second,
        text:'The Friday Checkout: Food  keeps retailers off balance',
        paragraph:'Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass',      
    },
    {
        img: third,
        text:'Consumer want grocer to use AI to help them save money Dunnhumby',
        paragraph:'Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass',      
    },
    {
        img: fourth,
        text:'Order up! How grocers are replicating the restaurant experience in retail',
        paragraph:'Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass',      
    }
]

const OurNews = () => {
    return (
        <>
            <div className='flex flex-col gap-[20px] container'>
                <div className="flex justify-between items-center mb-6 gap-[50px]">
                    <h2 className="text-[18px] gap-[8px] flex items-center font-bold">Our News <p className='text-[#9CA3AF] text-[13px]'>Some of the new posts this week</p> </h2>
                    <div className='flex items-center gap-[10px] py-[8px] px-[13px] border border-[#E5E7EB] bg-[rgb(255,255,255)] rounded-[21px]'>
                        <button className='font-bold text-[12px] '>Wiew All  </button>
                        <FaArrowRightLong />
                    </div>
                </div>
                <div className='flex gap-[30px] mb-[50px]'>
                    {News.map((item, index) => (
                        <div key={index} className='flex flex-col gap-[10px]'>
                            <img className='w-[100%] h-[57%]' src={item.img} alt="" />
                            <p className='font-bold text-[18px] mt-[11px]'>{item.text}</p>
                            <p className='text-[#4B5563] text-[13px]'>{item.paragraph}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default OurNews