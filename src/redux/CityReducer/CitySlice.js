import { createSlice } from '@reduxjs/toolkit'

const initialState = [];


const citiesSlice = createSlice({
    name: 'selectedCities',
    initialState: initialState,
    reducers: {
        setCitiesList: (state, action) => [...action.payload],
        cleanCityList: (state) => [],
        removeCity: (state, action) => {
            return [...state.filter(item => item != action.payload)]
        },

    },
})

export const { setCitiesList, cleanCityList, removeCity } = citiesSlice.actions;

export default citiesSlice.reducer


export const cityModalStatus = createSlice({
    name: 'selectedCities',
    initialState: { value: false },
    reducers: {
        openCityModal: (state) => { state.value = true },
        closeCityModal: (state) => { state.value = false },
    },
})

export const { openCityModal, closeCityModal } = cityModalStatus.actions