import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/campers");
      return response.data.items;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);

// export const fetchCars = createAsyncThunk(
//   "cars/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const filters = thunkAPI.getState().filters;
//       console.log("Current filters:", filters);

//       const params = new URLSearchParams();

//       if (filters.location) {
//         params.append("location", filters.location);
//       }

//       if (filters.equipment?.length > 0) {
//         filters.equipment.forEach((eq) => params.append("equipment", eq));
//       }

//       if (filters.vehicleType) {
//         params.append("vehicleType", filters.vehicleType);
//       }

//       const response = await axios.get(`/campers?${params.toString()}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchById = createAsyncThunk(
  "cars/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);
