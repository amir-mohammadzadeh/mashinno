import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "./UserReducer/userSlice" ;
import { cartMenuSlice } from "./CartReducer/CartSlice";



const store = configureStore({
    reducer:{
        userInfo: userSlice,
        cartMenuStatus: cartMenuSlice,
    }
})

export default store