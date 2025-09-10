import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../context/api/createApi';
import Skeleton from '../../components/skeleton/Skeleton';
import { FaStar } from 'react-icons/fa';

const Detail = () => {
    const { id } = useParams();
    const { data: product, isLoading, error } = useGetProductByIdQuery(id);

    if (isLoading) return <div><Skeleton /></div>;

    if (error) {
        return <p className="text-red-500 mt-10 text-center">Xatolik: {error?.message || "Ma'lumot olinmadi"}</p>;
    }

    if (!product) return null;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white  rounded-xl p-6">
                {/* Product Image */}
                <div className="flex justify-center items-center  rounded-lg overflow-hidden">
                    <img src={product.images} alt className="object-contain w-full h-[400px] transition-transform hover:scale-105 duration-300" />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                    <p className="text-gray-600 text-base">{product.description}</p>
                    <p className="text-green-600 font-bold text-2xl">{product.price} so'm</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <FaStar
                                key={index}
                                className={index < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                            />
                        ))}
                        <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
                    </div>

                    {/* Brand & Category */}
                    <p className="text-sm text-gray-500">Kategoriya: <span className="text-gray-700">{product.category}</span></p>
                    <p className="text-sm text-gray-500">Brend: <span className="text-gray-700">{product.brand}</span></p>

                    {/* Add to Cart */}
                    <button className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-full transition duration-300">
                        🛒 Savatga qo'shish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Detail;
