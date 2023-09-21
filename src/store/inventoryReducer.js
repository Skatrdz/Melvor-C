
import inventoryArr from "../willBeAppi/inventoryArr";
import {createSlice} from "@reduxjs/toolkit";
import xpTable from "../willBeAppi/xpTable";

const initialState = {
    inventory: inventoryArr,
};
export const expSlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        addResource: (state, action) => {
            const {obj} = action.payload;
            console.log(10, obj)
            let resource = obj[0].resource
            if (obj.length === 3){
                let resource2 = obj[1].resource
                let resource2Value = obj[2].count
                state.inventory.push({ title: resource2, count: resource2Value}, )
            }

            // let exp = obj[2] ? obj[2].exp : obj[0].exp;
            // if (state.skills[skillId - 1].exp + exp < xpTable[state.skills[skillId - 1].currentLvl - 1].exp) {
            //     state.skills[skillId - 1].exp += exp
            // } else {
            //     state.skills[skillId - 1].currentLvl += 1
            //     state.skills[skillId - 1].exp += exp
            // }
        },
    },
});
export const { addResource} = expSlice.actions
export default expSlice.reducer