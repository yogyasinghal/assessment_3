import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './cartSlice'
import nameReducer from "./nameSlice";

import dataReducer from './dataSlice';


const store = configureStore({
    reducer:{
        cart:cartReducer,
        name:nameReducer,
        data:dataReducer,
    }
})

export default store;