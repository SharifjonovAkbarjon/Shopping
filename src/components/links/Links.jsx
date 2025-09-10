import React from 'react'
import TooltipLink from '../tooltiplink/ToolTipLink'
import { NavLink } from 'react-router-dom';

const linkData = [
    { text: "About Us", tooltip: "About company info" },
    { text: "Contact", tooltip: "Our contact info" },
    { text: "Careers", tooltip: "Open job positions" },
    { text: "Help", tooltip: "How can we assist you?" },
    { text: "Privacy", tooltip: "Privacy policy details" },
    { text: "Terms", tooltip: "Terms & conditions" },
    { text: "Shipping", tooltip: "Shipping information" },
    { text: "Returns", tooltip: "Return policy" },
    { text: "Affiliate", tooltip: "Join our affiliate program" },
    { text: "Vendor", tooltip: "Become a vendor" },
    { text: "FAQ", tooltip: "Frequently asked questions" },
    { text: "Blog", tooltip: "Read our latest posts" },
];
{/* <div className="flex flex-wrap gap-[50px] p-10] container ">
                {linkData.map((item, index) => (
                    <TooltipLink key={index} text={item.text} tooltip={item.tooltip} />
                ))}
            </div> */}

const Links = () => {
    return (
        <>
            <div className='py-[15px]'>
                <div className='container flex  justify-between font-semibold text-[15px]'>
                    <div className='flex gap-[25px]'>
                        <select name="" id="">
                            <option value="">Home</option>
                        </select>
                        <select name="" id="">
                            <option value="">Shop</option>
                        </select>
                        <p>Fruits & Vegetables</p>
                        <p>Beverages</p>
                        <NavLink to='/blog'>
                            <p>Blog</p>
                        </NavLink>
                        <NavLink to='/contact'>
                            <p>Contact</p>
                        </NavLink>
                    </div>
                    <div className='flex gap-[25px]'>
                        <select name="" id="">
                            <option value="">Trending Products</option>
                        </select>
                        <select className='text-[rgb(220,38,38)] font-semibold' name="" id="">
                            <option value="">Almost Finished</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Links