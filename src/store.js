import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/login/LoginSlice";
import systemReducer from "./system/systemSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const counterPersistConfig = {
  key: "counter",
  storage: storage,
};

const persistedCounterReducer = persistReducer(
  counterPersistConfig,
  counterReducer
);

const store = configureStore({
  reducer: {
    user: authReducer,
    system: systemReducer,
    counter: persistedCounterReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
