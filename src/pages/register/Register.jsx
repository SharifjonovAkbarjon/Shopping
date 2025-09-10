import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../context/api/createApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../context/auth/authSlice';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

  const dispatch = useDispatch();
  const rozilik = () => toast("Iltimos rozilik belgilang")
  const royhat = () => toast("Ro`yhatdan muvaffaqqiyatli o`tdingiz")
  const xato = () => toast("Xatolik")

  const [showPassword, setShowPassword] = useState(false);

  const [form, setFrom] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    user_image: null,
    role: "",
    privacy_policy_accepted: false,

  });

  const [register, { isLoading, isError, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFrom((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  console.log(form);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.privacy_policy_accepted) {
      rozilik();
      return;
    }

    try {
      const response = await register(form).unwrap();

      const token = response?.access || response?.access_token || response?.token;
      const user = response?.user || null;

      dispatch(setCredentials({ token, user })); // 🔥 Redux va localStorage update bo‘ladi

      royhat();
      navigate("/");
    } catch (err) {
      console.error("Xatolik:", err);
      const errorData = err?.data;

      if (typeof errorData === 'object' && errorData !== null) {
        Object.entries(errorData).forEach(([field, messages]) => {
          if (Array.isArray(messages)) {
            messages.forEach((msg) => toast.error(`${field}: ${msg}`));
          } else {
            toast.error(`${field}: ${messages}`);
          }
        });
      } else {
        toast.error("Noma'lum xatolik yuz berdi.");
      }
    }
  };



  return (
    <div className="min-h-screen flex items-start justify-center pt-16 px-4 bg-white">
      <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col items-center gap-6" >
        <div className="flex gap-6 text-2xl font-semibold">
          <NavLink
            to="/login"
            className="text-gray-400 text-[28px] hover:text-gray-600 transition"
          >
            Login
          </NavLink>
          <span className="text-gray-900 text-[28px] border-b-2 border-gray-900 pb-1">
            Register
          </span>
        </div>

        <p className="text-center text-gray-600 max-w-md">
          There are many advantages to creating an account: the payment process
          is faster, shipment tracking is possible and much more.
        </p>

        <div className="w-full flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.username}
              onChange={handleChange}
              name="username"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange}
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-purple-500 outline-none"
              />

              <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>


          <div>

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="input-style"
              required
            >
              <option value="">Tanlang</option>
              <option value="customer">customer</option>
              <option value="courier">courier</option>
              <option value="user">user</option>
            </select>

            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                name="privacy_policy_accepted"
                checked={form.privacy_policy_accepted}
                onChange={handleChange}
                className="accent-orange-500"
                required
              />
              <span>I agree to the processing of my data</span>
            </label>
          </div>
        </div>


        <button type="submit" className="w-full button py-3 rounded-lg transition font-medium">
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>

    </div>
  );
};

export default Register;
