import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'username',
    initialState: {
        value: window.localStorage.getItem("USERNAME"),
    },
    reducers: {
        setUser: (state, action) => {
            window.localStorage.setItem("USERNAME", action.payload);
            state.value = action.payload;
        },
        resetUser: (state) => {
            window.localStorage.removeItem("USERNAME");
            state.value = null;
        },
    },
})

//selector function
export const selectUser = state => state.user.value;

// Action creators are generated for each case reducer function
export const {setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
