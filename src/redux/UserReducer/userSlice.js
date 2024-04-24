import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 1,
  storeID: null,
  name: "",
  lastName: "",
  image: '',
  phoneNumber: [],
  address: {
    ostan: '',
    city: '',
    address: ''
  },
  codeMelli: null,
  posts: [],
  favorites: [],
  notes: [],
  isLogin: false,
  tokan: null,
}

export const userSlice = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {
    setUserLogin: (state, action) => {
      return {
        ...state,
        phoneNumber: [action.payload.phone],
        isLogin: action.payload.value,
        tokan: action.payload.tokan
      }
    },
    setUserInfo: (state, action) => {
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
    addUserNote: (state, action) => {
      return {
        ...state,
        notes: state.notes.push(action.payload)
      }
    },
    removeUserNote: (state, action) => {
      return {
        ...state,
        notes: state.notes.filter(item => item.id != action.payload)
      }
    },
  },
})

export const { setUserLogin, setUserInfo, addUserPost, removeUserPost, addUserFavorites, removeUserFavorites, addUserNote, removeUserNote } = userSlice.actions;

export default userSlice.reducer