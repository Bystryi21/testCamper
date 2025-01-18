import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  location: "",
  equipment: [],
  vehicleType: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleEquipment: (state, action) => {
      const equipment = action.payload;
      const equipmentIndex = state.filters.equipment.indexOf(equipment);
      if (equipmentIndex === -1) {
        state.filters.equipment.push(equipment);
      } else state.filters.equipment.splice(equipmentIndex, 1);
    },
  },

  setVehicleType: (state, action) => {
    state.filters.vehicleType =
      state.filters.vehicleType === action.payload ? "" : action.payload;
  },

  setLocation: (state, action) => {
    state.filters.location = action.payload;
  },

  resetFilters: (state) => {
    state.filters = initialState.filters;
  },
});

export const { toggleEquipment, setVehicleType, setLocation, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
