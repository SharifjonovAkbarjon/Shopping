import { useGetProductsQuery } from '../../context/api/createApi';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import Skeleton from '../skeleton/Skeleton';

const Product = () => {
    const [limit, setLimit] = useState(5);
    const { data, isLoading, isError, isFetching, error } = useGetProductsQuery({ limit });

    // const products = data?.filter((_, index) => index < limit) || [];
 
    // const products = data?.products?.slice(5, limit) || [];

    const products = Array.isArray(data) ? data.slice(0, limit) : [];

    const shortDesc = (desc = '', wordCut = 5) => {
        const words = desc.split(' ');
        if (words.length < 3) return desc;
        return words.slice(0, wordCut).join(' ') + ' ... '
    }


    if (isLoading) return (
        <div className="flex mt-[100px]">
            <Skeleton />
        </div>
    );

    return (
        <div className=" py-8 px-4">
            <div className="container flex flex-col gap-[40px] justify-between">
                <div className="flex justify-between items-center mb-6 gap-[50px]">
                    <h2 className="text-2xl font-bold">Mahsulotlar </h2>
                    <a href="#" className="text-sm text-gray-500 hover:text-black transition">Hammasini ko'rish →</a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-[1px] ">
                    {products.map((product) => (
                        <div key={product.id} className="overflow-hidden mt-[10px] border border-[#E5E7EB] items-center  w-[100%] h-[349px] gap-[10px] rounded-[4px]  hover:shadow-lg transition p-[6px] pb-[10px] flex flex-col ">
                            <div className="relative w-[200px] h-[160px] transition-transform duration-300 hover:scale-110">
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.images[0]?.image} alt={product.name} className="absolute left-1/2 top-1/2 w-[360px] h-[160px] object-contain -translate-x-1/2 -translate-y-1/2" />
                                </Link>
                                <CiHeart className="absolute right-0 top-[20px]" />
                            </div>

                            <div className="flex flex-col gap-[10px] w-full">
                                <p className="text-lg font-bold mb-[16px] text-left">{product.price_usd} so`m</p>
                                <p className="text-sm text-gray-700">{product.name}</p>
                                <p>
                                    {shortDesc(product.description)}
                                </p>
                                <div className="flex items-center mt-1">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <FaStar key={index} className={index < Math.round(product.rating) ? 'text-orange-400' : 'text-gray-300'} />
                                    ))}
                                </div>
                            </div>
                            <button className="w-full border    mt-[20px] border-green-500 text-green-600 py-1 rounded hover:bg-green-50 transition">
                                В корзину
                            </button>
                        </div>
                    ))}
                </div>

                {isError && (
                    <p className="text-red-500 text-center mt-4">
                        Xatolik: {error?.message || "Ma'lumot olinmadi"}
                    </p>
                )}

                {isFetching && !isLoading && (
                    <div className="mt-6">
                        <Skeleton />
                    </div>
                )}

                <div className="flex justify-center mt-6">
                    <button onClick={() => setLimit((prev) => prev + 5)}
                        className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 transition disabled:opacity-50"
                        disabled={isFetching}
                    >
                        {isFetching ? 'Yuklanmoqda...' : 'See more'} 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;























