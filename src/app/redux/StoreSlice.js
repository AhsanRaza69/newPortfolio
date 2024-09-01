import { createSlice } from '@reduxjs/toolkit';

export const Storeslice  = createSlice({
  name: 'store',
  initialState: {
    dynamicRouteCOn: false,
  },
  reducers: {
    DynamicDAtaFun: (state,actions) => {
      state.dynamicRouteCOn  =  !state.dynamicRouteCOn
    },
  
}
});

export const { DynamicDAtaFun} = Storeslice.actions;

export default Storeslice.reducer;
