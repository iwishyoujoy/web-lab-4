import { createSlice } from '@reduxjs/toolkit';

export const passwordReducer = createSlice({
    name: 'password',
    initialState: {
        value: null,
    },
    reducers: {
        setPassword: (state, action) => {
            state.value = action.payload;
        },
        resetPassword: (state) => {
            state.value = null;
        },
    },
})

//selector function
export const selectPassword = state => state.password.value;

// Action creators are generated for each case reducer function
export const {setPassword, resetPassword} = passwordReducer.actions;

export default passwordReducer.reducer;
