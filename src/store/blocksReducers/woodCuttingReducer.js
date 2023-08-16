
import { createReducer, createAction } from "@reduxjs/toolkit";
import { createSlice, current  } from '@reduxjs/toolkit'
import woodCutting from "../../willBeAppi/contentManager/woodCuttingAction";

const initialState = {
    actionArr: woodCutting,

};


export const expSlice = createSlice({
    name: "exp",
    initialState,
    reducers: {
        addWood: (state, action) => {
            const { id,  actionTime, exp, } = action.payload;
            state.actionArr.push({id, actionTime, exp})
            state.actionArr.sort((a, b) => b.actionTime - a.actionTime);

        },
        deleteWood: (state, action) => {
            const { id } = action.payload;
            state.actionArr = state.actionArr.filter(item => item.id !== id);
        },
    },
});

export const { deleteWood, addWood } = expSlice.actions
export default expSlice.reducer