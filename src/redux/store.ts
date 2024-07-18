import accountReducer from "@/redux/slices/accountSlice";
import { configureStore } from "@reduxjs/toolkit";
export const makeStore = () => {
  return configureStore({
    reducer: {
      account: accountReducer,
      // method: methodReducer,
      // form: formReducer,
      // [accountApi.reducerPath]: accountApi.reducer,
      // [methodApi.reducerPath]: methodApi.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat([
    //     accountApi.middleware,
    //     methodApi.middleware,
    //   ]),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
