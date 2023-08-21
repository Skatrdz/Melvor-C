
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
            console.log(state.actionArr)
            if (state.actionArr.length === 2){
                console.log(20)
                state.actionArr.push({ exp: state.actionArr[0].exp +
                    Math.floor(state.actionArr[0].actionTime /
                        state.actionArr[1].actionTime) * state.actionArr[1].exp,
                count: Math.floor(state.actionArr[0].actionTime /
                    state.actionArr[1].actionTime)
                })
            }
           // const bothExp = state.actionArr[0].exp +
            //     Math.floor(state.actionArr[0].actionTime / state.actionArr[1].actionTime) * state.actionArr[1].exp
            // state.actionArr.push({bothExp})
        },
        deleteWood: (state, action) => {
            const { id } = action.payload;
            if (state.actionArr.length === 3){
                state.actionArr.splice(2, 1)
                state.actionArr = state.actionArr.filter(item => item.id !== id);
            }
            else {
                state.actionArr = state.actionArr.filter(item => item.id !== id);
            }
        },
    },
});

export const { deleteWood, addWood } = expSlice.actions
export default expSlice.reducer