import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "./UserReducer/userSlice" ;
import  citiesSlice , {cityModalStatus} from "./CityReducer/CitySlice";



const store = configureStore({
    reducer:{
        userInfo: userSlice,
        citySolector: cityModalStatus.reducer,
        citiesList: citiesSlice
    }
})

export default store