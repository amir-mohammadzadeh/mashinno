import { createSlice } from '@reduxjs/toolkit'

const initialState = [];
const cartMenuStatus = {
    value: false
}

export const cartListSlice = createSlice({
    name: 'cartList',
    initialState: initialState,
    reducers: {
    },
})

//export const { } = cartListSlice.actions ;

export default cartListSlice.reducer

//__________ This slice is for open / close cart sidemenu ....
const cartMenu = createSlice({
    name: 'cartMenu',
    initialState: cartMenuStatus,
    reducers: {
        openCartMenu: (state) => { state.value = true },
        closeCartMenu: (state) => { state.value = false }
    },
})

export const { openCartMenu, closeCartMenu } = cartMenu.actions
export const cartMenuSlice = cartMenu.reducer