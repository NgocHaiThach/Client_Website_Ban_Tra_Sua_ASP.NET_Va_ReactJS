import { createSlice } from "@reduxjs/toolkit";

const initialSearch = ''

const search = createSlice({
    name: 'search',
    initialState: initialSearch,
    reducers: {
        toInput: (state, action) => {

            state = action.payload
            return state
        },
        clearInput: (state,) => {

            return state = ''

        }
    }
})


const { reducer, actions } = search
export const { toInput, clearInput } = actions
export default reducer