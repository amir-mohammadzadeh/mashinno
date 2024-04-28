import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "./UserReducer/userSlice" ;
import  citiesSlice , {cityModalStatus} from "./CityReducer/CitySlice";
import StoreSlice from "./StoreReducer/StoreSlice";
import BrandSlice from "./BrandsReducer/BrandSlice";
import PostsSlice from "./PostsReducer/PostsSlice";



const store = configureStore({
    reducer:{
        userInfo: userSlice,
        citySolector: cityModalStatus.reducer,
        citiesList: citiesSlice,
        storeInfo: StoreSlice,
        brands:BrandSlice,
        posts:PostsSlice
    }
})

export default store