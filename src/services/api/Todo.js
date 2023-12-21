import { axiosSecure } from "../../utils/axios";
// =============================================
//                   Create Todo
// =============================================
export const createTodo = async (taskDetails) => {
  try {
    const response = await axiosSecure.post("/tasks/", taskDetails);
    // console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(error.response?.data?.msg);
    throw error.response?.data?.msg;
  }
};

// =============================================
//                Get Todos for User
// =============================================
export const getUserTodos = async () => {
  try {
    const response = await axiosSecure.get("/tasks/");

    return response.data;
  } catch (error) {
    console.error(error.response?.data?.msg);
    throw error.response?.data?.msg;
  }
};

// =============================================
//                  Delete Todo
// =============================================
export const deleteTodo = async (todoId) => {
  try {
    const response = await axiosSecure.delete(`/tasks/${todoId}`);

    return response.data;
  } catch (error) {
    console.error(error.response?.data?.msg);
    throw error.response?.data?.msg;
  }
};