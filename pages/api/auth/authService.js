import axios from "axios";

const register = async (userData) => {
  const response = await axios.post("/signin", userData);

  return response.config.data;
};

const authService = {
  register,
};

export default authService;
