import App from "../App";
import pveInfo from "../components/navbar/pveInfo";
import { createReducer, createAction } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    skills: pveInfo,
};


export const expSlice = createSlice({
    name: "exp",
    initialState,
    reducers: {
        addExperience: (state) => {
            console.log(10)
        }
    }
})
export const { addExperience } = expSlice.actions
export default expSlice.reducer