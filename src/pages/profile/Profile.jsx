import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../context/auth/authSlice";

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    if (!user) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-semibold text-gray-600">
                    Iltimos, avval login qiling!
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
            <h1 className="text-2xl font-bold text-center mb-6">My Profile</h1>

            <div className="flex flex-col items-center">
                {user.image ? (
                    <img
                        src={user.image}
                        alt={user.username}
                        className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4 object-cover"
                    />
                ) : (
                    <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full mb-4">
                        <span className="text-gray-500 text-lg">No Photo</span>
                    </div>
                )}
                <input type="file" placeholder="Rasm yuklash" /> 
                <p className="text-lg font-semibold">{user.username}</p>
                <p className="text-gray-600">{user.phone}</p>
            </div>

            <button
                onClick={() => dispatch(logout())}
                className="w-full mt-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
                Log Out
            </button>
        </div>
    );
};

export default Profile;

