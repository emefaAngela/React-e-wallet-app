import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name:"transaction",
  initialState:{
    balance:''
  },
  reducers:{
  increment:(state,action)=>{
    state.balance +=action.payload;
  },
  decrement:(state,action)=>{
    state.balance-=action.payload;
  }
  }
});
export const{increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;