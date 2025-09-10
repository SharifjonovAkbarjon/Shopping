import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import fruit from '../../assets/fruit.png'
import baby from '../../assets/baby.png'
import bever from '../../assets/bever.png'
import fish from '../../assets/fish.png'
import biscuit from '../../assets/biscuit.png'
import bread from '../../assets/bread.png'
import dairy from '../../assets/dairy.png'
import frozen from '../../assets/frozen.png'
import staple from '../../assets/staple.png'

const category = [
    { img: fruit, text: 'Fruits & Vegetables' },
    { img: baby, text: 'Baby & Pregnancy' },
    { img: bever, text: 'Beverages' },
    { img: fish, text: 'Meats & Seafood' },
    { img: biscuit, text: 'Biscuits & Snacks' },
    { img: bread, text: 'Breads & Bakery' },
    { img: dairy, text: 'Breaksfast & Dairy' },
    { img: frozen, text: 'Frozen Foods' },
    { img: staple, text: 'Grocery & Staples' }
]

const Category = () => {
    return (
        <>
            <div className='container flex flex-col gap-[25px]'>
                <div className='flex justify-between items-center mt-[20px]'>
                    <div className='flex items-center gap-[10px]'>
                        <p className='font-bold text-[18px]'>Top Categories</p>
                        <p className='text-[13px] text-[#9CA3AF]'>New products with updated stocks.</p>
                    </div>
                    <div>
                        <button className='flex items-center bg-amber-40 text-[12px] font-bold py-[10px] px-[13px] rounded-[20px] border border-[#E5E7EB] gap-[7px]'>Wiew All <FaArrowRightLong /> </button>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    {category.map((item, index) => (
                        <div key={index} className='flex flex-col p-[5px] text-center'>
                            <div className='bg-[rgb(243,244,246)] rounded-[50%]'>
                                <img src={item.img} alt="" />
                            </div>
                            <p className='font-bold text-[13px]'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Category