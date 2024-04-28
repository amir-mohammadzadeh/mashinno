import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const BrandsSlice = createSlice({
    name: 'brands',
    initialState: initialState,
    reducers: {
        setBrands:(state, action)=>{
            return [...state,
                ...action.payload
            ]
        }
    },
})

export const { setBrands } = BrandsSlice.actions ;

export default BrandsSlice.reducer
