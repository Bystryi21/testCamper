import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    equipment: [],
    vehicleType: "",
  },
  reducers: {
    toggleEquipment: (state, action) => {
      const equipment = action.payload;
      const equipmentIndex = state.equipment.indexOf(equipment);
      if (equipmentIndex === -1) {
        state.equipment.push(equipment);
      } else state.equipment.splice(equipmentIndex, 1);
    },
    setVehicleType: (state, action) => {
      state.vehicleType =
        state.vehicleType === action.payload ? "" : action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    resetFilters: (state) => {
      state.equipment = [];
      state.vehicleType = "";
      state.location = "";
    },
  },
});

export const { toggleEquipment, setVehicleType, setLocation, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
