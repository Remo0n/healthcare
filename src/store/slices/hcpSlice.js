import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching all HCPs
export const fetchAllHcps = createAsyncThunk(
  'hcp/fetchAllHcps',
  async (_, { rejectWithValue }) => {
    try {
      // Fetch from mock data
      const response = await fetch('https://raw.githubusercontent.com/Remo0n/healthcare/refs/heads/main/data/mockdata.json');
      if (!response.ok) {
        throw new Error('Failed to fetch HCPs');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial state
const initialState = {
  // All HCPs data
  hcps: [],
  connections: [],
  
  // Loading state
  loading: false,
  
  // Error state
  error: null
};

// HCP slice
const hcpSlice = createSlice({
  name: 'hcp',
  initialState,
  reducers: {
    // Clear errors
    clearErrors: (state) => {
      state.error = null;
    },
    
    // Reset state
    resetHcpState: () => initialState
  },
  
  extraReducers: (builder) => {
    // Fetch All HCPs
    builder
      .addCase(fetchAllHcps.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllHcps.fulfilled, (state, action) => {
        state.loading = false;
        state.hcps = action.payload.hcps;
        state.connections = action.payload.connections;
      })
      .addCase(fetchAllHcps.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

// Export actions
export const {
  clearErrors,
  resetHcpState
} = hcpSlice.actions;

// Selectors
export const selectAllHcps = (state) => state.hcp.hcps;
export const selectAllConnections = (state) => state.hcp.connections;
export const selectHcpLoading = (state) => state.hcp.loading;
export const selectHcpError = (state) => state.hcp.error;

export default hcpSlice.reducer;