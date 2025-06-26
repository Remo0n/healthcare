import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hcpProfileDetails: {
    id: null,
    name: null,
    title: null,
    location: null,
    avatar: null,
    peers: null,
    following: null,
    patientsServed: null,
    successRate: null,
    education: [],
    workExperience: [],
    publications: [],
    activeData: false
  },
};

export const hcpProfileDetailsSlice = createSlice({
  name: "hcpProfileDetails",
  initialState,
  reducers: {
    setHcpProfileDetails: (state, action) => {
      state.hcpProfileDetails = action.payload;
    },
  },
});

export const {
  setHcpProfileDetails
} = hcpProfileDetailsSlice.actions;

export default hcpProfileDetailsSlice.reducer;
