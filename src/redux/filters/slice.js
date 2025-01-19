import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    equipment: [],
    form: "",
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
    selectForm: (state, action) => {
      state.form = state.form === action.payload ? "" : action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    resetFilters(state) {
      state.location = "";
      state.equipment = [];
      state.form = "";
    },
  },
});

export const { toggleEquipment, selectForm, setLocation, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
