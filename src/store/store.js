import { combineReducers } from "redux";

import { configureStore } from '@reduxjs/toolkit'
import expReducer from "./expReducer";
import woodCuttingReducer from "./blocksReducers/woodCuttingReducer";
import inventoryReducer from "./inventoryReducer";

export default configureStore({
    reducer: {
        skills: expReducer,
        woodCutting: woodCuttingReducer,
        inventory: inventoryReducer
    }
})

