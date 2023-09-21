import LinearProgress from '@mui/material/LinearProgress';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { addExperience, addMastery } from "../../../../store/expReducer";
import progressBar from "../allProf/progressBar";
import WoodCuttingGrants from "./woodCuttingGrants";
import xpTable from "../../../../willBeAppi/xpTable";
import {addResource} from "../../../../store/inventoryReducer";
function WoodProgress() {
    const dispatch = useDispatch()
    const inventory = useSelector(
        (state) => state.inventory
    )
    console.log("inv", inventory)
    const currentAction = useSelector(
        (state) => state.woodCutting.actionArr)
    const masteryLvl1 = currentAction[0] ? currentAction[0].masteryLvl : 0
    const masteryLvl2 = currentAction[1] ? currentAction[1].masteryLvl : 0
    const [exp, setExp] = React.useState(currentAction ? 0 : currentAction[0].exp)
    const addExp = () => {
        dispatch(addExperience({ obj: currentAction }));
    };
    const addMt = () =>{
        dispatch(addMastery({ obj: currentAction }));
    }
    const addRes = () => {
        dispatch(addResource({ obj: currentAction }));
    }

    useEffect(() => {
        if (currentAction[0]) {
            const interval = setInterval(() => {
                addMt();
                addExp();
                addRes();


            }, currentAction[0].actionTime * 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [currentAction]);


    return (
        <div className="wood-progress">

            <div className="wood-progress-animation wood-progress-bar-animation">
                    <div className="wood-progress-bar-animation"
                     style={{
                    animation: currentAction[0]
                        ? `progressAnimation ${currentAction[0].actionTime}s infinite linear`
                        : "none",
                }}
                         key={currentAction[0] ? currentAction[0].actionTime : "default"}
                >

                </div>
            </div>
            { currentAction[0]
                ?
            <WoodCuttingGrants
                currentAction={currentAction}
                exp = {currentAction[2] ? currentAction[2].exp: currentAction[0].exp}
                count = {currentAction[2] ? currentAction[2].count : null}
                mastery = {[masteryLvl1, masteryLvl2]}

            ></WoodCuttingGrants>
                :
                <h1>info will display here</h1>
            }
                 </div>
    );
}

export default WoodProgress;
