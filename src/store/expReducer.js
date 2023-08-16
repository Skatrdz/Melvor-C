
import pveInfo from "../willBeAppi/pveInfo";
import { createReducer, createAction } from "@reduxjs/toolkit";
import { createSlice, current  } from '@reduxjs/toolkit'
import xpTable from "../willBeAppi/xpTable";
const initialState = {
    skills: pveInfo,
};


export const expSlice = createSlice({
    name: "exp",
    initialState,
    reducers: {
        addExperience: (state, action) => {
            const { exp, skillId, currentLvl } = action.payload;
            // if (obj.length === 1){
            //     state.skills[skillId-1].exp += obj[0].exp;
            // }
            // if (obj.length === 2){
            //     console.log(Math.floor(obj[0].actionTime / obj[1].actionTime) * obj[1].exp)
            //     console.log(obj[1].exp, obj[1].actionTime, obj[0].actionTime)
            //     state.skills[skillId-1].exp += obj[0].exp +
            //         Math.floor(ob
            //         j[0].actionTime / obj[1].actionTime) * obj[1].exp
            // }
            console.log("exp: ", exp)
            state.skills[skillId-1].exp += exp



        },
        addLvl: (state, action) => {
            const { exp, skillId } = action.payload;
            state.skills[skillId-1].exp += exp;

        },
    },
});

export const { addExperience } = expSlice.actions
export default expSlice.reducer