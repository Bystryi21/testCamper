import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  campers: {
    items: [],
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
