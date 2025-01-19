import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
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
      } else {
        state.equipment.splice(equipmentIndex, 1);
      }
    },
    setVehicleType: (state, action) => {
      state.vehicleType =
        state.vehicleType === action.payload ? "" : action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { toggleEquipment, setVehicleType, setLocation } =
  filtersSlice.actions;

export default filtersSlice.reducer;
