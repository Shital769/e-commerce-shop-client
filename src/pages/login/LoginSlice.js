import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  unRegisteredUser: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    requestSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    },
    setUnRegisteredUser: (state, { payload }) => {
      state.unRegisteredUser = payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = userSlice;

export const { requestPending, requestSuccess, setUnRegisteredUser } = actions;
export default reducer;
