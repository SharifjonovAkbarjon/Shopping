import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { TbMail, TbXboxXFilled } from 'react-icons/tb'
import google from '../../assets/google.png'
import app from '../../assets/app.png'

const Footer = () => {
  return (
    <>
      <div className='bg-[rgb(243,244,246)]  py-[50px]'>
        <div className='container flex flex-col gap-[50px] '>
          <div className='flex justify-between'>
            <div className='flex flex-col w-[25%]'>
              <b className='font-bold text-[20px]'>Join our newsletter for £10 offs</b>
              <p className='text-[#6b7280] text-[13px]'>Register now to get latest updates on promotions & coupons.Don’t worry, we not spam! </p>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <div className='flex bg-amber-00 items-center border border-[#9CA3AF] h-[48px] rounded-[8px] py-[15px] pl-[15px] justify-between'>
                <TbMail className='text-[#9CA3AF]' />
                <input className='ml-[-95px] outline-none' type="email" placeholder='Enter your email address' />
                <button className='bg-[#634C9F] text-[14px] text-white rounded-r-[8px] font-bold px-[18px] h-[48px]'>Send</button>
              </div>
              <p className='text-[#6B7280] text-[11px]'>By subscribing you agree to our <span className='text-[#634C9F] font-medium'>Terms & Conditions and Privacy & Cookies Policy.</span> </p>
            </div>
          </div>
          <div className='border border-[#D1D5DB] border-r-[#F3F4F6] border-l-[#F3F4F6] py-[50px] flex justify-between '>
            <div className='flex flex-col gap-[30px] w-[25%] '>
              <div className='flex flex-col gap-[10px] w-[80%]'>
                <p className='text-[14px] font-semibold'>Do You Need Help ?</p>
                <p className='text-[13px] text-[#6B7280]'>Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.</p>
              </div>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex items-center gap-[20px]'>
                  <FaPhoneAlt />
                  <div className='flex flex-col'>
                    <p className='text-[12px] text-[#111827] opacity-[60%]'>Monday-Friday: 08am-9pm</p>
                    <p className='text-[#111827] font-bold text-[20px]'>97-254-33-54</p>
                  </div>
                </div>
                <div className='flex items-center gap-[20px]'>
                  <MdOutlineMail />
                  <div className='flex flex-col'>
                    <p className='text-[12px] text-[#111827] opacity-[60%]'>Need help with your order?</p>
                    <p className='text-[#111827] font-bold text-[20px]'>akb@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-[5px]'>
              <p className='text-[14px] font-semibold mb-[15px]'>Make Money with Us</p>
              <p className='text-[13px] text-[#4B5563]'>Sell on Grogin</p>
              <p className='text-[13px] text-[#4B5563]'>Sell Your Services on Grogin</p>
              <p className='text-[13px] text-[#4B5563]'>Sell on Grogin Business</p>
              <p className='text-[13px] text-[#4B5563]'>Sell Your Apps on Grogin</p>
              <p className='text-[13px] text-[#4B5563]'>Become an Affilate</p>
              <p className='text-[13px] text-[#4B5563]'>Advertise Your Products</p>
              <p className='text-[13px] text-[#4B5563]'>Sell-Publish with Us</p>
              <p className='text-[13px] text-[#4B5563] mt-[5px]'>Become an Blowwe Vendor</p>
            </div>
            <div className='flex flex-col gap-[5px]'>
              <p className='text-[14px] font-semibold mb-[15px]'>Let Us Help You</p>
              <p className='text-[13px] text-[#4B5563]'>Accessibility Statement</p>
              <p className='text-[13px] text-[#4B5563]'>Your Orders</p>
              <p className='text-[13px] text-[#4B5563]'>Returns & Replacements</p>
              <p className='text-[13px] text-[#4B5563]'>Shipping Rates & Policies</p>
              <p className='text-[13px] text-[#4B5563]'>Refund and Returns Policy</p>
              <p className='text-[13px] text-[#4B5563]'>Privacy Policy</p>
              <p className='text-[13px] text-[#4B5563]'>Terms and Conditions</p>
              <p className='text-[13px] text-[#4B5563]'>Cookie Settings</p>
              <p className='text-[13px] text-[#4B5563] mt-[5px]'>Help Center</p>
            </div>
            <div className='flex flex-col gap-[5px]'>
              <p className='text-[14px] font-semibold mb-[15px]'>Get to Know Us</p>
              <p className='text-[13px] text-[#4B5563]'>Careers for Grogin</p>
              <p className='text-[13px] text-[#4B5563]'>About Grogin</p>
              <p className='text-[13px] text-[#4B5563]'>Inverstor Relations</p>
              <p className='text-[13px] text-[#4B5563]'>Grogin Devices</p>
              <p className='text-[13px] text-[#4B5563]'>Customer reviews</p>
              <p className='text-[13px] text-[#4B5563]'>Social Responsibility</p>
              <p className='text-[13px] text-[#4B5563] mt-[5px]'>Store Locations</p>
            </div>
            <div className='flex flex-col gap-[50px]'>
              <div className='flex flex-col gap-[20px]'>
                <p className='text-[14px] font-semibold'>Download our app</p>
                <div className='flex flex-col gap-[10px]'>
                  <div className='flex w-[80%] gap-[15px] items-center'>
                    <img src={google} alt="" />
                    <p className='text-[#6B7280] text-[10px]'>Download App Get -10% Discount</p>
                  </div>
                  <div className='flex w-[80%] gap-[15px] items-center'>
                    <img src={app} alt="" />
                    <p className='text-[#6B7280] text-[10px]'>Download App Get -20% Discount</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <p className='text-[12px] text-[#111827]'>Follow us on social media:</p>
                <div className='flex gap-[10px]'>
                  <button className='bg-white w-[36px] h-[36px] flex items-center justify-center rounded-[6px]'><FaFacebookF className='text-[#1877F2]' /></button>
                  <button className='bg-white w-[36px] h-[36px] flex items-center justify-center rounded-[6px]'><TbXboxXFilled /></button>
                  <button className='bg-white w-[36px] h-[36px] flex items-center justify-center rounded-[6px]'><FaInstagram className='text-[#FD1D1D]' /></button>
                  <button className='bg-white w-[36px] h-[36px] flex items-center justify-center rounded-[6px]'><FaLinkedinIn className='text-[#0077B5]' /></button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col '>
            <p className='text-[#6B7280] text-[12px]'>Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right reserved. Powered by <span className='text-[#634C9F] font-semibold'>BlackRise Themes.</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer