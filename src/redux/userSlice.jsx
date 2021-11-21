import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from 'jwt-decode';
import { accessToken, } from "../utils/getToken";

const userCookies = accessToken && jwt_decode(accessToken).UserName
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