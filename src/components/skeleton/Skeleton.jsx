import React from 'react'

const Skeleton = () => {
    return (
        <>
            <div className="flex gap-5 p-5 container">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div className="w-[300px] p-5 rounded-xl shadow items-start bg-white animate-pulse">
                        <div className="skeleton__img skeleton__animation w-full h-[250px] bg-gray-300 rounded-lg mb-4"></div>
                        <div className="skeleton__line skeleton__animation w-full h-6 bg-gray-300 rounded-md mb-3"></div>
                        <div className="skeleton__line skeleton__animation w-4/5 h-6 bg-gray-300 rounded-md mb-3"></div>
                        <div className="skeleton__line skeleton__animation w-3/5 h-6 bg-gray-300 rounded-md"></div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Skeleton