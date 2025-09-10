import React from 'react'
import notFound from '../../assets/404.png'
import { NavLink, useNavigate } from 'react-router-dom'


const NotFound = () => {

    const navigate = useNavigate()

    const Back = () => {
        navigate(-1);
    }

    return (
        <>
            <div className='bg-[rgb(245,244,254)] py-[20px]'>
                <div className='container flex flex-col items-center '>
                    <div className='flex w-[50%]'>
                        <img src={notFound} alt="" />
                    </div>
                    <div className='flex flex-col items-center gap-[10px]'>
                        <h2 className='text-[40px]'>Page not found</h2>
                        <p className='text-[#6C757D] text-[14px]'>The page you want to go is not currently available</p>
                        <div className='flex items-center gap-[10px]'>
                            <NavLink to='/'>
                                <button className='text-white px-[20px] py-[13px] rounded-[8px] bg-[#634C9F]'>Home Page</button>
                            </NavLink>
                            <button onClick={Back} className='bg-white px-[20px] py-[13px] rounded-[8px] '>Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound