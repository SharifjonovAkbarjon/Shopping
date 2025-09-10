import React, { useState } from "react";
import { useLoginMutation } from "../../context/api/createApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../context/auth/authSlice";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [loginData, setLoginData] = useState({ phone: "", password: "", username: "" });
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { showPassword, setShowPassword } = useState(false)

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login(loginData).unwrap();
      const token = result?.access || result?.access_token || result?.token;
      const user = result?.user || null;
      console.log("Login result:", result);

      if (!token) throw new Error("Token topilmadi (access)");

      dispatch(setCredentials({ token, user }));

      toast.success("✅ Kirish muvaffaqiyatli!", { autoClose: 2000 });
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      toast.error("❌ Telefon/username yoki parol noto‘g‘ri!", { autoClose: 3000 });
    }
  };

  return (
    <div className="container flex items-center justify-center bg-[#f9f9f9]">
      <div className="w-full max-w-[40%]  flex flex-col gap-[20px] p-8 rounded-xl  mt-[50px] mb-[50px]">
        <div className="flex items-center gap-5 justify-center ">
          <span className="text-gray-900 text-2xl font-semibold border-b-2 border-gray-900 pb-1">
            Login
          </span>
          <NavLink
            to="/register"
            className="text-gray-400 text-2xl font-semibold hover:text-gray-600"
          >
            Register
          </NavLink>
        </div>
        <div className="">
          <p className="text-[13px] text-center">If you have an account, sign in with your username or email address.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="phone" value={loginData.phone} onChange={handleChange}
            placeholder="Telefon raqam (+998...)" className="w-full border border-[#D1D5DB]  px-4 py-2 rounded-md outline-purple-500" />

          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full border border-[#D1D5DB] outline-purple-500 px-4 py-2 rounded-md"
          />

          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Parol"
            required
            className="w-full border border-[#D1D5DB] outline-purple-500 px-4 py-2 rounded-md"
          />

          <div className="flex justify-between items-center">
            <div className="flex justify-center gap-[6px]">
              <input type="checkbox" className="text-[#D1D5DB]" />
              <p>Remember me</p>
            </div>
            <NavLink to='/lostPassword' className='text-[#1D4ED8] text-[13px]'>
              lost your Password?
            </NavLink>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full button py-2 rounded-md "
          >
            {isLoading ? "Yuklanmoqda..." : "Kirish"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

