import { createSlice } from "@reduxjs/toolkit";
import { fetchById, fetchCars } from "./operations";

export const initialState = {
  items: [],
  carDetails: {},
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
      })
      .addCase(fetchById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.carDetails = action.payload;
        state.loading = false;
      })
      .addCase(fetchById.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default slice.reducer;
