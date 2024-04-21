import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id:1,
    name:"امیر",
    lastName:"محمدزاده اسداغی",
    image:'',
    phoneNumber:["09141234567"],
    address:{
      ostan:'آذربایجان شرقی',
      city:'مرند',
      address:' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'
    },
    codeMelli:null,
    posts:[],
    favorites:[],
    notes:[],
    isLogin: true
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