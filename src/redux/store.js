import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import carsReducer from "../redux/campers/slice";
import filtersReducer from "../redux/filters/slice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// const initialState = {
//   campers: {
//     items: [],
//   },
// };

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// export const store = configureStore({
//   reducer: rootReducer,
// });
