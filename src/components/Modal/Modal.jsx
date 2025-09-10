import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed   w-[500px] bg-[rgba(207,201,201,0.63)] flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg relative">
        {children}
        <button  onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
