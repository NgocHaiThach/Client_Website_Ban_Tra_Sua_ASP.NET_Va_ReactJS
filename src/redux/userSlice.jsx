import { createSlice } from "@reduxjs/toolkit";
const initialUser = localStorage.getItem('user')
// [
//     {
//         username: 'ngchai2410@gmail.com',
//         password: '123456',
//         repeatPassword: '123456'
//     }
// ]
const user = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
    }
})

const { reducer, actions } = user
export const { addUser } = actions
export default reducer