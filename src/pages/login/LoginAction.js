import {
  fetchNewAccessJWT,
  fetchUserProfile,
  loginUser,
  updateUserProfile,
} from "../../helper/axios";
import { requestPending, requestSuccess } from "./LoginSlice";
import { toast } from "react-toastify";

//review name for login action later
export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending());

    //call axios-helper api

    const pendingResp = loginUser(formData);
    toast.promise(pendingResp, { pending: "Please wait..." });

    const { status, message, tokens } = await pendingResp;
    toast[status](message);
    console.log(tokens);

    if (status === "success") {
      const { accessJWT, refreshJWT } = tokens;

      sessionStorage.setItem("accessJWT", accessJWT);
      localStorage.setItem("refreshJWT", refreshJWT);

      dispatch(getUserProfile());
    }
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//get customer/user profile
const getUserProfile = () => async (dispatch) => {
  const { status, user, message } = await fetchUserProfile();

  console.log(user?._id, status, message);

  status === "success"
    ? dispatch(requestSuccess(user))
    : dispatch(requestSuccess({}));
};

//update user profile
export const updateProfileAction = (data) => async (dispatch) => {
  const { status, message } = await updateUserProfile(data);
};
toast[status](message);
status === "success" && dispatch(getUserProfile());
console.log(status);

//auto-login
export const autoLogin = () => async (dispatch) => {
  //if accessJWT exist, get the user and mount in our redux store
  //check if accessJWT exists  or not

  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  if (accessJWT) {
    dispatch(getUserProfile());
  } else if (refreshJWT) {
    //call for new accessJWT

    const { status, accessJWT } = await fetchNewAccessJWT();

    if (status === "success") {
      sessionStorage.setItem("accessJWT", accessJWT);
      dispatch(getUserProfile());
      return;
    }
    dispatch(forceLogout());
  } else {
    //force logout
    dispatch(forceLogout());
  }
};

//force-logout
const forceLogout = () => (dispatch) => {
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
  dispatch(requestSuccess({}));
};
