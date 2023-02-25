import loginReducer from "./redux/login";
import passwordReducer from "./redux/password";
import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        login: loginReducer,
        password: passwordReducer
    },
})
