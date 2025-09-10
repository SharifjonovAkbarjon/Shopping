import { createSlice } from "@reduxjs/toolkit";

const getUserFromStorage = () => {
  try {
    const userData = localStorage.getItem("user");
    if (userData && userData !== "undefined") {
      return JSON.parse(userData);
    }
    return null;
  } catch (error) {
    console.error("❌ Userni JSON.parse qilishda xato:", error);
    return null;
  }
};

const initialState = {
  token: localStorage.getItem("token") || null,
  user: getUserFromStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      const { token, user } = payload;
      state.token = token;
      state.user = user || null;

      localStorage.setItem("token", token);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }
    },

    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
