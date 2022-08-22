import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import data from "../Data/data";
// console.log("data=",data);

import axios from 'axios';
export const fetchUser = createAsyncThunk('/store/fetchUser', async () => {
    try {
        const res = await axios.get('http://localhost:3001/data');
        console.log("data from axios",res);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
})

let loading = true;
let data2 = []
const dataSlice = createSlice({
    name:'data',
    initialState:{
        data,
        data2,
        loading
    },
    reducers:{
        addMovie(state,action){
          
            
            state.data2.push(action.payload);
        },
        removeMovie(state,action){
            console.log("remove movie");
            state.data2 = state.data2.filter(item=>item.title!==action.payload.title)
            // state.data = state.data.filter(item=>item.title!==action.payload.title)
        },
        setMovie(state,action){
            state.data2 = action.payload
            // state.data = action.payload
        },
        addUser: (state, action) => {
            state.data2.push(action.payload)
        },
    },
    extraReducers: {
        [fetchUser.pending]: (state, action) => {
            console.log("pending promise");
            state.loading = true;
        },
        [fetchUser.rejected]: (state, action) => {
            console.log("rejected promise");
            state.loading = false;
        },
        [fetchUser.fulfilled]: (state, action) => {
            console.log("user fetch success");
            state.loading = false;
            state.data2 = [...state.data2, ...action.payload];
        }
    }
})

export const{addMovie,removeMovie,setMovie,addUser} = dataSlice.actions;
export default dataSlice.reducer; 