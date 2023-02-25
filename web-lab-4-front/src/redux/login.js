import { createSlice } from '@reduxjs/toolkit';

export const loginReducer = createSlice({
    name: 'login',
    initialState: {
        value: null,
    },
    reducers: {
        setLogin: (state, action) => {
            state.value = action.payload;
        },
        resetLogin: (state) => {
            state.value = null;
        },
    },
})

//selector function
export const selectLogin = state => state.login.value;

// Action creators are generated for each case reducer function
export const {setLogin, resetLogin} = loginReducer.actions;

export default loginReducer.reducer;
