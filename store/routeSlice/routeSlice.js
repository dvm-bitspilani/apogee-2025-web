import { createSlice } from "@reduxjs/toolkit";

const routeSlice = createSlice({
  name: "routes",
  initialState: {
    currentRoute: "/",
    prevRoute: null,
  },
  reducers: {
    setCurrentRoute: (state, action) => {
      state.prevRoute = state.currentRoute;
      state.currentRoute = action.payload;
    },
  },
});

export const routeActions = routeSlice.actions;
export default routeSlice.reducer;
