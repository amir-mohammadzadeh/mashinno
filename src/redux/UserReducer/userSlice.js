import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name:"",
    lastName:"",
    phoneNumber:"",
    address:"",
    codeMelli:null,
    posts:[],
    favorites:[],
    payments:[],
    isLogin: false
}

export const userSlice = createSlice({
  name: 'userInfo',
  initialState: initialState ,
  reducers: {
    setUserLogin: (state, action) => {
      return {
        ...state,
        isLogin: action.payload
      }
    },
    setUserInfo: (state,action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    addUserPost: (state, action) => {
      return {
        ...state,
        posts: state.posts.push(action.payload)
      }
    },
    removeUserPost: (state, action) => {
      return {
        ...state,
        posts: state.posts.filter(post => post.id != action.payload)
      }
    },
    addUserFavorites: (state, action) => {
      return {
        ...state,
        favorites: state.favorites.push(action.payload)
      }
    },
    removeUserFavorites: (state, action) => {
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id != action.payload)
      }
    },
    addUserPayment: (state, action) => {
      return {
        ...state,
        payments: state.payments.push(action.payload)
      }
    },
    removeUserPayment: (state, action) => {
      return {
        ...state,
        payments: state.payments.filter(item => item.id != action.payload)
      }
    },
  },
})

export const { setUserLogin, setUserInfo,addUserPost ,removeUserPost ,addUserFavorites ,removeUserFavorites ,addUserPayment ,removeUserPayment  } = userSlice.actions ;

export default userSlice.reducer