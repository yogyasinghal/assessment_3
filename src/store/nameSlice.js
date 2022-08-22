import { createSlice } from "@reduxjs/toolkit"

const initialState = [];
let name,password;
// reducers are pure fn
const nameSlice = createSlice({
    name:'name',
    initialState:{
        name:'',
        password:''
    },
    reducers:{
        add(state,action){
            console.log("action.payload",action.payload);
            // old redux
            // return [...state,action.payload]
            state.name = action.payload.name
            state.password = action.payload.password
        },
        // remove(state,action){
        //     return state.filter(item=>item.title!==action.payload)
        // }
    }
})

export const{add} = nameSlice.actions;
export default nameSlice.reducer; 