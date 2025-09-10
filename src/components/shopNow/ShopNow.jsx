import React from 'react'
import juice from '../../assets/juice.png'
import popcorn from '../../assets/popcorn.png'
import shaftoli from '../../assets/shaftoli.png'
import { FaArrowRightLong } from 'react-icons/fa6'

const shop = [
    {
        bg: juice,
        text: 'We provide you the best quality products',
        paragrapg: 'A family place for grocery',
    },
    {
        bg: popcorn,
        text: 'We make your grocery shopping more exciting ',
        paragrapg: 'Shine the morning...',
    },
    {
        bg: shaftoli,
        text: 'The one supermarket that saves your money',
        paragrapg: 'Breakfast made better',
    }
]
const ShopNow = () => {
    return (
        <>
            <div className='container flex  gap-[30px] '>
                {shop.map((item, index) => (
                    <div key={index} className='mb-[20px] rounded-[6px] py-[32px] px-[20px] flex flex-col gap-[10px] items-start' style={{ backgroundImage: `url(${item.bg})`, backgroundRepeat: 'no-repeat', objectFit: 'cover' }}>
                        <p className='text-[#EA580C] text-[12px]'>Only This Week</p>
                        <p className='font-bold text-[22px] w-[65%]'>{item.text}</p>
                        <p className='text-[#6B7280] font-[13px] mt-[-5px]'>{item.paragrapg}</p>
                        <div className='flex items-center gap-[10px] py-[8px] px-[13px] border border-[#E5E7EB] bg-[rgb(255,255,255)] rounded-[21px]'>
                            <button className='font-bold text-[12px] '>Shop Now  </button>
                            <FaArrowRightLong />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ShopNow