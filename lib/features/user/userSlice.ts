import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import exp from "constants";

const initialState: { value: any } = {
  value: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export default userSlice.reducer