import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: any } = {
  value: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
