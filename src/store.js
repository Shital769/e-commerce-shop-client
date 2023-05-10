import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    system: systemReducer,
  },
});

export default store;
