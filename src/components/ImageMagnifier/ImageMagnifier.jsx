import React, { useState, useRef } from 'react';

const ImageMagnifier = () => {
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { top, left, width, height } = imgRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setMagnifierPosition({
      x: (x / width) * 100,
      y: (y / height) * 100,
    });
  };

  return (
    <div className="flex gap-5 items-start">
      {/* Original Image */}
      <div
        className="relative w-96 h-96 overflow-hidden border"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          ref={imgRef}
          src="https://m.media-amazon.com/images/I/61nPIFFH4HL._AC_SL1500_.jpg"
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Zoomed Image */}
      <div className="w-96 h-96 border overflow-hidden hidden md:block">
        {isHovering && (
          <div
            className="w-full h-full bg-no-repeat bg-cover scale-150 transition-all duration-150"
            style={{
              backgroundImage: `url('https://m.media-amazon.com/images/I/61nPIFFH4HL._AC_SL1500_.jpg')`,
              backgroundPosition: `${magnifierPosition.x}% ${magnifierPosition.y}%`,
              backgroundSize: '250%',
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default ImageMagnifier;
