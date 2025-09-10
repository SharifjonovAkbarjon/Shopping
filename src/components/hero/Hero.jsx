import React from 'react';

const Hero = () => {
  return (
    <div className=" bg-[rgb(219,212,230)] h-[500px] w-full flex justify-center items-center ">
      <div className='container flex flex-col gap-[42px]'>
        <div className='flex flex-col gap-[7px]'>
          <div className="bg-gradient-to-r items-center from-[#16A34A]/50 via-[#22C55E]/0 to-[#22C55E]/0 w-[128px] h-[28px] px-[10px] pb-[12px] pt-[6px] rounded-[6px]">
            <p className='text-[rgb(22,101,52)] font-semibold text-[12px]'>Weekend Discount</p>
          </div>
          <div className='flex w-[50%]'>
            <h2 className='text-[58px] leading-[60px] text-[rgb(57,36,95)] font-bold'>Shopping with us for better quality and the best price</h2>
          </div>
          <div className='w-[35%]'>
            <p className='text-[16px]'>We have prepared special discounts for you on grocery products. Don't miss these opportunities...</p>
          </div>
        </div>
        <div className='flex items-center gap-[16px] '>
          <div>
            <button className='bg-[rgb(99,76,159)] text-white font-bold text-[14px] py-[12.5px] pl-[18px] pr-[48px] rounded-[8px]'>Shop Now</button>
          </div>
          <div className='flex flex-col  '>
            <div className='flex items-center'>
              <p className='text-[28px] font-bold text-[rgb(220,38,38)]'>$21.67</p>
              <p className='text-[20px]'>$26.67</p>
            </div>
            <div>
              <p className='text-[11px] text-[rgb(3,7,18)] '>Don't miss this limited time offer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
