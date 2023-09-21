
import { createReducer, createAction } from "@reduxjs/toolkit";
import { createSlice, current  } from '@reduxjs/toolkit'
import xpTable from "../willBeAppi/xpTable";
import profInfo from "../willBeAppi/profInfo";
import WoodBlockReqTemp from "../willBeAppi/WoodBlockReq(temp)";
const initialState = {
    skills: profInfo,
    woodCuttingMastery: WoodBlockReqTemp
};

function masteryLvl(currentExp, Exp, Lvl) {

    return currentExp + Exp < xpTable[Lvl].exp;
}


    export const expSlice = createSlice({
        name: "exp",
        initialState,
        reducers: {
            addExperience: (state, action) => {
                const {obj} = action.payload;
                console.log(10, obj)
                const skillId = 1 // PLACEHOLDER
                let exp = obj[2] ? obj[2].exp : obj[0].exp;
                if (state.skills[skillId - 1].exp + exp < xpTable[state.skills[skillId - 1].currentLvl - 1].exp) {
                    state.skills[skillId - 1].exp += exp
                } else {
                    state.skills[skillId - 1].currentLvl += 1
                    state.skills[skillId - 1].exp += exp
                }
            },
            addMastery: (state, action) => {
                const {obj} = action.payload;
                const skillId = 1 // PLACEHOLDER
                if (obj.length === 3){
                    const obj2 = state.woodCuttingMastery[obj[1].id - 1]
                    const currentExp2 = obj2.masteryExp
                    const masteryLvl2 = obj2.mastery
                    const expGain2 = state.woodCuttingMastery[obj[1].id - 1].mastery * 10
                    state.skills[0].masteryExp += expGain2 * 4
                    if (masteryLvl(currentExp2, expGain2, masteryLvl2)){
                        state.woodCuttingMastery[obj[1].id - 1].masteryExp += expGain2
                    }
                    else {
                        state.woodCuttingMastery[obj[1].id - 1].mastery += 1
                        state.woodCuttingMastery[obj[1].id - 1].masteryExp += expGain2
                    }
                }
                const obj1 = state.woodCuttingMastery[obj[0].id - 1]
                const currentExp1 = obj1.masteryExp
                const masteryLvl1 = obj1.mastery
                const expGain = state.woodCuttingMastery[obj[0].id - 1].mastery * 10
                state.skills[0].masteryExp += expGain * 4
                if (masteryLvl(currentExp1, expGain, masteryLvl1)){
                    state.woodCuttingMastery[obj[0].id - 1].masteryExp += expGain
                }
                else {
                    state.woodCuttingMastery[obj[0].id - 1].mastery += 1
                    state.woodCuttingMastery[obj[0].id - 1].masteryExp += expGain
                }
            },

        }

    });

export const { addExperience, addMastery} = expSlice.actions
export default expSlice.reducer