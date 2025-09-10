import React, { useState } from 'react';

const LostPassword = () => {
  const [step, setStep] = useState(1); // 1: phone, 2: verify code, 3: new password
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <div className=" flex items-center justify-center bg-[#f5f5f5]">
      <div className="w-full max-w-md bg-whte p-8 rounded-xl shadow-lg m-[50px]">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Reset Password</h2>

        {step === 1 && (
          <>
            <label className="block mb-2 text-sm font-medium text-gray-600">Enter your phone number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 __ ___ __ __"
              className="w-full border px-4 py-2 rounded-md mb-4"
            />
            <button
              onClick={() => setStep(2)}
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            >
              Send Code
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label className="block mb-2 text-sm font-medium text-gray-600">Enter the code sent to your phone</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="123456"
              className="w-full border px-4 py-2 rounded-md mb-4"
            />
            <button
              onClick={() => setStep(3)}
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            >
              Verify Code
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <label className="block mb-2 text-sm font-medium text-gray-600">Enter new password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
              className="w-full border px-4 py-2 rounded-md mb-4"
            />
            <button
              onClick={() => alert('Password successfully changed!')}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Set New Password
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LostPassword;
