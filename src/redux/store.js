import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "./UserReducer/userSlice" ;
import  citiesSlice , {cityModalStatus} from "./CityReducer/CitySlice";
import StoreSlice from "./StoreReducer/StoreSlice";



const store = configureStore({
    reducer:{
        userInfo: userSlice,
        citySolector: cityModalStatus.reducer,
        citiesList: citiesSlice,
        storeInfo: StoreSlice
    }
})

export default store