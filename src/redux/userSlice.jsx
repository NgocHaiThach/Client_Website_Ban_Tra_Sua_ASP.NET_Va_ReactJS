import { createSlice } from "@reduxjs/toolkit";
import cookies from 'react-cookies';
import jwt_decode from 'jwt-decode';

const tokenCookies = cookies.load('user')
const userCookies = tokenCookies && jwt_decode(tokenCookies).UserName
const initialUser = {
    "UserName": userCookies || null
    //"UserName": null
}

const user = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                "UserName": action.payload
            }
        },
        logout: (state,) => {
            return {
                ...state,
                "UserName": null
            }
        }
    }
})

const { reducer, actions } = user
export const { login, logout } = actions
export default reducer