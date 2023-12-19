import { axiosOpen, axiosSecure } from "../../utils/axios";

// =============================================
//                    register
// =============================================
export const registerUser = async (user) => {
  try {
    const response = await axiosOpen.post("/users/register", user);

    // Store the token in localStorage
    const { token } = response.data;
    localStorage.setItem("userToken", token);

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.response.data.msg);
    throw error.response.data.msg;
  }
};

// =============================================
//                      login
// =============================================
export const loginUser = async (credentials) => {
  try {
    const response = await axiosOpen.post("/users/login", credentials);

    // Store the token in localStorage
    const { token } = response.data;
    localStorage.setItem("userToken", token);

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.response.data.msg);
    throw error.response.data.msg;
  }
};

// =============================================
//                     logout
// =============================================
export const logoutUser = async () => {
  try {
    // Clear the token from localStorage
    localStorage.removeItem("userToken");
    return { success: true };
  } catch (error) {
    console.error("Error:", error.response.data.msg);
    throw error.response.data.msg;
  }
};

// =============================================
//                  user details
// =============================================
export const getUserProfile = async () => {
  try {
    const response = await axiosSecure.get("/users/me");
    return response.data;
  } catch (error) {
    console.error("Error:", error.response.data.msg);
    throw error.response.data.msg;
  }
};