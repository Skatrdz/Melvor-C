import { combineReducers } from "redux";

import { configureStore } from '@reduxjs/toolkit'
import expReducer from "./expReducer";
import woodCuttingReducer from "./blocksReducers/woodCuttingReducer";

export default configureStore({
    reducer: {
        skills: expReducer,
        woodCutting: woodCuttingReducer
    }
})

