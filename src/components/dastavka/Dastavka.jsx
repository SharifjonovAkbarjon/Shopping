import React from 'react'
import { FaRegCreditCard, FaRocketchat } from 'react-icons/fa'
import { TbTruckDelivery } from 'react-icons/tb'
import { VscDebugStepBack } from 'react-icons/vsc'

const Dastavka = () => {
    return (
        <>
            <div className='container '>
                <div className='flex justify-between mt-[40px] shadow-lg  '>
                    <div className='flex items-center gap-[10px] w-[300px] px-[10px] py-[15px] '>
                        <div>
                            <TbTruckDelivery />
                        </div>
                        <div>
                            <p>Bepul yetkazib berish</p>
                            <p>1 000 000 dan ortiq xarid qilsangiz</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[10px] w-[300px] px-[10px] py-[15px]'>
                        <div>
                            <FaRocketchat />
                        </div>
                        <div>
                            <p>Biz 24/7 ishlaymiz</p>
                            <p>Istagan vaqtingizda bog'laning</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[10px] w-[300px] px-[10px] py-[15px]'>
                        <div>
                            <VscDebugStepBack />
                        </div>
                        <div>
                            <p>Qoniqarli yoki qaytib keladi</p>
                            <p>Oson 30 kunlik qaytarish siyosati</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[10px] w-[300px] px-[10px] py-[15px]'>
                        <div>
                            <FaRegCreditCard />
                        </div>
                        <div>
                            <p>100% xavfsiz to'lovlar</p>
                            <p>Visa, Xazna, Click, Payme</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dastavka