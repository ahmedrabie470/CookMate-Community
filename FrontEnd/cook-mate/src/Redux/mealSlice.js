// mealSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const mealSlice = createSlice({
  name: 'meal',
  initialState: {
    selectedImage: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetState: (state) => {
      state.selectedImage = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { setImage, setLoading, setError, resetState } = mealSlice.actions;


export const selectMeal = (state) => state.meal;
export const mealReducer = mealSlice.reducer;

