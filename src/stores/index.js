import { configureStore } from "@reduxjs/toolkit";
import { api, rtkQueryErrorLogger } from "./api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // Diğer slice'larınızı da buraya ekleyin
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(rtkQueryErrorLogger),
});
