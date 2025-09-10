import React, { useState } from 'react';

const TooltipLink = ({ text, tooltip }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            className="relative inline-block mx-2"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <p className="cursor-pointer mt-[10px]">{text}</p>

            {showTooltip && (
                <div className="fixed left-1/2 -translate-x-1/2 w-[94%] h-[400px] z-50 bg-white text-black text-sm rounded-[20px]  py-2  px-4 shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-opacity duration-300 overflow-auto">
                    {tooltip}
                </div>
            )}
        </div>
    );
};

export default TooltipLink;