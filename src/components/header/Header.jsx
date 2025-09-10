import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='py-[13px]'>
                <div className='container flex justify-between '>
                    <div className='flex items-center gap-[15px] text-[12px] text-[rgb(107,114,128)]'>
                        <NavLink to='/about'>
                            <p>About Us</p>
                        </NavLink>
                        <NavLink to='/myAccaunt'>
                            <p>My account</p>
                        </NavLink>
                        <p>We deliver to you every day from <span className='text-[rgb(234,88,12)] font-bold'>7:00 to 23:00</span></p>
                    </div>
                    <div className='flex items-center gap-[15px] text-[12px] text-[rgb(107,114,128)]'>
                        <select name="" id="">
                            <option value="">Eng</option>
                            <option value="">Uzb</option>
                            <option value="">Rus</option>
                            <option value="">Tojik</option>
                        </select>
                        <select name="" id="">
                            <option value="">USD</option>
                            <option value="">SUM</option>
                        </select>
                        <p>Order Tracking</p>
                        <select name="" id="">
                            <option value="">Dark</option>
                            <option value="">Light</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header