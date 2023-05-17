import axios from "axios";
const rootUrl = "http://localhost:8001/api/v1";
const customerApi = rootUrl + "/customer";
const productInDashBoardApi = rootUrl + "/product";
const categoryApi = rootUrl + "/category";
const paymentApi = rootUrl + "/payments";
const orderApi = rootUrl + "/order";

const fetchProcessor = async ({ method, url, data, token, isPrivate }) => {
  try {
    const jwtToken = token || sessionStorage.getItem("accessJWT");
    const headers = isPrivate ? { Authorization: jwtToken } : null;

    const res = await axios({
      method,
      url,
      data,
      headers,
    });
    return res.data;
  } catch (error) {
    const message = error.message;

    if (error?.response?.data?.message === "jwt expired") {
      const { accessJWT } = await fetchNewAccessJWT();

      sessionStorage.setItem("accessJWT", accessJWT);
      return fetchProcessor({ method, url, data, isPrivate, token: accessJWT });
    }
    return {
      status: "error",
      message: error.message,
    };
  }
};

//customer or  user
export const postNewUser = async (data) => {
  const url = customerApi + "/register";
  const obj = {
    method: "post",
    url,
    data,
  };
  return fetchProcessor(obj);
};

//customer email verification
export const postCustomerEmailVerification = async (data) => {
  const url = customerApi + "/verify";
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

//get user profile
export const fetchUserProfile = async () => {
  const url = customerApi + "/user-profile";
  const obj = {
    method: "get",
    url,
    // isPrivate: true
  };
  return fetchProcessor(obj);
};

// otp request
export const fetchOtpRequest = async (formData) => {
  const url = customerApi + "/request-otp";
  const obj = {
    method: "post",
    url,
    data: formData,
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

//fetching new accessJWT
export const fetchNewAccessJWT = async () => {
  const url = customerApi + "/new-accessjwt";
  const token = localStorage.getItem("refreshJWT");
  console.log(token);
  const obj = {
    method: "get",
    url,
    token,
  };
  return fetchProcessor(obj);
};

export const updateUserProfile = async (data) => {
  const url = customerApi + "/user-profile";
  const obj = {
    method: "put",
    url,
    data,
  };
  return fetchProcessor(obj);
};

//products
export const fetchCustomertProduct = async (slug) => {
  const url = slug ? productInDashBoardApi + "/" + slug : productInDashBoardApi;

  const obj = {
    method: "get",
    url,
    slug,
    isPrivate: true,
  };
};

//categories
export const fetchCategory = async () => {
  const url = categoryApi;
  const obj = {
    method: "get",
    url,
    isPrivate: true,
  };
  return fetchProcessor(obj);
};

//payment
export const fetchPayment = async () => {
  const url = paymentApi;
  const obj = {
    method: "get",
    url,
    isPrivate: true,
  };
  return fetchProcessor(obj);
};

//orders
export const postOrder = async (order) => {
  const url = orderApi + "/add";
  const obj = {
    method: "post",
    url,
    isPrivate: true,
    data: order,
  };
  return fetchProcessor(obj);
};

export const getOrder = async () => {
  const url = orderApi;
  const obj = {
    method: "get",
    url,
    isPrivate: true,
  };
  return fetchProcessor(obj);
};
