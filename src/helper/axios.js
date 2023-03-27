import axios from "axios";
const rootUrl = "http://localhost:8001/api/v1";
const customerApi = rootUrl + "/customer";

const fetchProcessor = async ({ method, url, data }) => {
  try {
    const res = await axios({
      method,
      url,
      data,
    });
    return res.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//customer or  user
export const postNewUser = async (data) => {
  const url = customerApi + "register";
  const obj = {
    method: "post",
    url,
    data,
  };
  return fetchProcessor(obj);
};

//login user
export const loginUser = async (loginData) => {
  const url = customerApi + "/login";
  const obj = {
    method: "post",
    url,
    data: loginData,
  };
  return fetchProcessor(obj);
};

//reset password
export const resetPasswordRequest = async (formData) => {
  const url = customerApi + "reset-password";
  const obj = {
    method: "patch",
    url,
    data: formData,
  };
  return fetchProcessor(obj);
};
