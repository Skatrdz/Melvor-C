
import { createReducer, createAction } from "@reduxjs/toolkit";
import { createSlice, current  } from '@reduxjs/toolkit'
import xpTable from "../willBeAppi/xpTable";
import profInfo from "../willBeAppi/profInfo";
const initialState = {
    skills: profInfo,
};


export const expSlice = createSlice({
    name: "exp",
    initialState,
    reducers: {
        addExperience: (state, action) => {
            const { obj } = action.payload;
            const skillId = 1 // PLACEHOLDER
            console.log(obj)
            console.log(obj[2] ? obj[2]: obj[0].exp)
            let exp = obj[2] ? obj[2].exp: obj[0].exp;
            // if (obj.length === 1){
            //     exp = obj[0].exp;
            // }
            // else if (obj.length === 3){
            //     console.log(Math.floor(obj[0].actionTime / obj[1].actionTime) * obj[1].exp)
            //     console.log(obj[1].exp, obj[1].actionTime, obj[0].actionTime)
            //     exp = obj[0].exp +
            //         Math.floor(obj[0].actionTime / obj[1].actionTime) * obj[1].exp
            // }
            if (state.skills[skillId-1].exp + exp < xpTable[state.skills[skillId-1].currentLvl-1].exp){
                console.log("12")
                state.skills[skillId-1].exp += exp
            }
            else {
                console.log("24")
                state.skills[skillId-1].currentLvl += 1
                state.skills[skillId-1].exp += exp
            }
            // console.log(skillId)
            // if (obj.length === 1) {
            //     console.log(obj[0].exp)
            //     state.skills[skillId-1].exp += obj[0].exp
            // }
            // else if (obj.length === 2){
            //     state.skills[skillId-1].exp += obj[0].exp + obj[1].exp
            // }




        },
        addLvl: (state, action) => {
            const { exp, skillId } = action.payload;
            state.skills[skillId-1].exp += exp;

        },
    },
});

export const { addExperience } = expSlice.actions
export default expSlice.reducer