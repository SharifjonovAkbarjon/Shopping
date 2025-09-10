import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaTwitterSquare } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'

const Contact = () => {
    return (
        <>
            <div className='container flex flex-col gap-[20px]'>
                <div className='flex flex-col text-center gap-[10px] items-center mt-[20px]'>
                    <p className='font-bold text-[13px]'>Contact With Us</p>
                    <h2 className='font-bold text-[56px]'>You can ask us questions</h2>
                    <p className='text-[15px] w-[35%]'>Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact offices.</p>
                </div>
                <div className='bg-[#E5E7EB]  w-full h-[1px]'>
                </div>
                <div className='flex'>
                    <div className='flex flex-col gap-[25px]'>
                        <div className='flex flex-col gap-[8px]'>
                            <h3 className='font-semibold text-[22px]'>Our Offices</h3>
                            <p className='text-[#4B5563] text-[13px] w-[40%]'>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om
                                prerade i garanterad traditionell specialitet till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens
                                biov dijevis.
                            </p>
                        </div>
                        <div className="flex  items-start gap-12 ">
                            <div className="flex items-start gap-4 max-w-xs">
                                <IoLocationOutline className="text-xl mt-1" />
                                <div>
                                    <p className="text-sm text-gray-500">United States</p>
                                    <h3 className="text-lg font-semibold">United States Office</h3>
                                    <p className="text-sm text-gray-500">205 Middle Road, 2nd Floor, New York</p>
                                    <p className="mt-2 font-semibold">+02 1234 567 88</p>
                                    <a href="mailto:info@example.com" className="text-blue-600">info@example.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 max-w-xs">
                                <IoLocationOutline className="text-xl mt-1" />
                                <div>
                                    <p className="text-sm text-gray-500">Munich</p>
                                    <h3 className="text-lg font-semibold">Munich States Office</h3>
                                    <p className="text-sm text-gray-500">205 Middle Road, 2nd Floor, New York</p>
                                    <p className="mt-2 font-semibold">+5 456 123 22</p>
                                    <a href="mailto:contact@example.com" className="text-blue-600">contact@example.com</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-[5px] mb-[50px]'>
                            <p>Follow us:</p>
                            <button className='flex justify-center items-center bg-[#3B5998] rounded-[6px] w-[32px] h-[32px] '><FaFacebook className='text-white ' /></button>
                            <button className='flex justify-center items-center bg-[#3B5998] rounded-[6px] w-[32px] h-[32px] '><FaTwitterSquare className='text-white' /></button>
                            <button className='flex justify-center items-center bg-[#3B5998] rounded-[6px] w-[32px] h-[32px] '><FaInstagram className='text-white' /></button>
                            <button className='flex justify-center items-center bg-[#3B5998] rounded-[6px] w-[32px] h-[32px] '><FaTelegram className='text-white' /></button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-[#6B7280] text-[13px]'>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasaminte loba även om prerade i garanterad traditionell specialitet till bebel.</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact