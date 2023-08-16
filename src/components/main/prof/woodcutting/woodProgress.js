import LinearProgress from '@mui/material/LinearProgress';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { addExperience } from "../../../../store/expReducer";
import progressBar from "../allProf/progressBar";
import WoodCuttingGrants from "./woodCuttingGrants";
function WoodProgress() {
    const dispatch = useDispatch()

    const currentAction = useSelector(
        (state) => state.woodCutting.actionArr)
    const [exp, setExp] = React.useState(currentAction[0].exp)
    const addExp = () => {

        if (currentAction.length === 1){
            console.log("len1")
            setExp(currentAction[0].exp)
        }
        if (currentAction.length === 2){
            console.log("len2")

            const newExp = currentAction[0].exp + Math.floor(currentAction[0].actionTime /
                currentAction[1].actionTime) * currentAction[1].exp;
            console.log("newExp", newExp)
            setExp(newExp)

        }
        console.log("expdis: ", exp)
        dispatch(addExperience({ exp: exp, skillId: "1", }));

    };
    useEffect(() => {
        if (currentAction[0]) {
            const interval = setInterval(() => {
                addExp();

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
                exp = {exp}
                actionTime={currentAction[0].actionTime}
            ></WoodCuttingGrants>
                :
                <h1>info will display here</h1>
            }
                 </div>
    );
}

export default WoodProgress;
