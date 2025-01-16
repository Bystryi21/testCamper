import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

export const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "cars",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCars.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default slice.reducer;
