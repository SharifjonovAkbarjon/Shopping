import React from 'react'
import { useGetCategoryQuery } from '../../context/api/createApi'
import { FaArrowRightLong } from 'react-icons/fa6';

const Kategory = () => {
  const { data: categories, isLoading, isError, error } = useGetCategoryQuery();

  if (isLoading) return <p>Yuklanmoqda...</p>;
  if (isError) return <p>Xatolik: {error?.message}</p>;
  if (!categories || categories.length === 0) return <p>Category topilmadi</p>;

  return (
    <div className="container flex flex-col gap-[10px] ">
      <div className='flex justify-between items-center mt-[20px]'>
        <div className='flex items-center gap-[10px]'>
          <p className='font-bold text-[18px]'>Top Categories</p>
          <p className='text-[13px] text-[#9CA3AF]'>New products with updated stocks.</p>
        </div>
        <div>
          <button className='flex items-center bg-amber-40 text-[12px] font-bold py-[10px] px-[13px] rounded-[20px] border border-[#E5E7EB] gap-[7px]'>Wiew All <FaArrowRightLong /> </button>
        </div>
      </div>
      <div className='flex'>
        {categories.map((cat) => (
          <div key={cat.id} className="flex items-center flex-col p-[5px] text-center">
            <img src={cat.image} alt={cat.name} className="w-[120px] h-[120px] object-contain  bg-[rgb(243,244,246)] rounded-[50%]" />
            <p className="text-[13px] font-bold">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kategory;
