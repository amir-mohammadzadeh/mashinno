import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userID: null ,
    storeName: '',
    phoneNumbers: [],
    storeAddress: {
        ostan: '',
        city: '',
        address: ''
    },
    siteURL: '',
    LPKimage:[],
    images: ['/Images/NoPhoto.jpg','/Images/no-image.webp'],
    aboutStore:''
};

const StoreSlice = createSlice({
    name: 'StorePanel',
    initialState: initialState,
    reducers: {
        setStoreInfo:(state, action)=>{
            return {...state,
                ...action.payload
            }
        }
    },
})

export const { setStoreInfo } = StoreSlice.actions ;

export default StoreSlice.reducer
