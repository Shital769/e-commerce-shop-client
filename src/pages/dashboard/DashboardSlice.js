import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotDealsProducts: [],
};

const hotDealsProductSlice = createSlice({
  name: "products",
  initialState,
  reduceres: {
    setHotDealsProduct: (state, { payload = [] }) => {
      state.hotDealProducts = payload;
    },
  },
});

const { reducer, actions } = hotDealsProductSlice;
export const { setHotDealsProduct } = actions;
export default reducerF;
