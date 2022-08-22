import { createSlice } from "@reduxjs/toolkit"
// import data from "../Data/data";
// console.log("data=",data);
const initialState = [];
// reducers are pure fn
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            // old redux
            // return [...state,action.payload]
            state.push(action.payload);
        },
        remove(state,action){
            return state.filter(item=>item.title!==action.payload.title)
        }
    }
})

export const{add,remove} = cartSlice.actions;
export default cartSlice.reducer; 