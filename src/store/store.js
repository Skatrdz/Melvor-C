import { combineReducers } from "redux";

import { configureStore } from '@reduxjs/toolkit'
import expReducer from "./expReducer";

export default configureStore({
    reducer: {
        skills: expReducer
    }
})

