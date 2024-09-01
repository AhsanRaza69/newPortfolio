import { createSlice } from '@reduxjs/toolkit';

export const Storeslice  = createSlice({
  name: 'store',
  initialState: {
    dynamicRouteCOn: false,
  },
  reducers: {
    DynamicDAta: (state) => {
      state.dynamicRouteCOn  = !dynamicRouteCOn
    },
  
}
});

export const { DynamicDAta} = Storeslice.actions;

export default Storeslice.reducer;
