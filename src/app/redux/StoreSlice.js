import { createSlice } from '@reduxjs/toolkit';

export const Storeslice  = createSlice({
  name: 'store',
  initialState: {
    dynamicRouteCOn: false,
    details : {
      img : "",
      toppara:""
    }
  },
  reducers: {
    DynamicDAtaFun: (state,action) => {
      state.dynamicRouteCOn  =  !state.dynamicRouteCOn
      state.details  = action.payload
    }
  
}
});

export const { DynamicDAtaFun} = Storeslice.actions;

export default Storeslice.reducer;
