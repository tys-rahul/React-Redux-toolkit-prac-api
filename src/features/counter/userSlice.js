import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

export const getUserData = createAsyncThunk("users/getUserData", async () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()
  )
})
// export const pp = (state) => state.counter.value;

// console.log(getUserData,'raj');
export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  extraReducers: {
    [getUserData.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getUserData.rejected]: (state, action) => {
      state.loading = false;
    },
  }
})
export default userSlice.reducer;
