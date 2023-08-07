
import pveInfo from "../willBeAppi/pveInfo";
import { createReducer, createAction } from "@reduxjs/toolkit";
import { createSlice, current  } from '@reduxjs/toolkit'

const initialState = {
    skills: pveInfo,
};


export const expSlice = createSlice({
    name: "exp",
    initialState,
    reducers: {
        addExperience: (state, action) => {
            const { exp, skillId } = action.payload;
            state.skills[skillId-1].exp += exp;

        },
    },
});

export const { addExperience } = expSlice.actions
export default expSlice.reducer