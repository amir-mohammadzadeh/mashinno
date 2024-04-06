import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "./UserReducer/userSlice" ;
import { cartMenuSlice } from "./CartReducer/CartSlice";
import  citiesSlice from "./CityReducer/CitySlice";



const store = configureStore({
    reducer:{
        userInfo: userSlice,
        cartMenuStatus: cartMenuSlice,
        citiesList: citiesSlice
    }
})

export default store