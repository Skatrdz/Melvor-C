import LinearProgress from '@mui/material/LinearProgress';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { addExperience } from "../../../../store/expReducer";
import progressBar from "../allProf/progressBar";
import WoodCuttingGrants from "./woodCuttingGrants";
import xpTable from "../../../../willBeAppi/xpTable";
function WoodProgress() {
    const dispatch = useDispatch()

    const currentAction = useSelector(
        (state) => state.woodCutting.actionArr)

    const [exp, setExp] = React.useState(currentAction ? 0 : currentAction[0].exp)
    const addExp = () => {
        dispatch(addExperience({ obj: currentAction }));


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
                currentAction={currentAction}
                exp = {currentAction[2] ? currentAction[2].exp: currentAction[0].exp}
                count = {currentAction[2] ? currentAction[2].count : null}

            ></WoodCuttingGrants>
                :
                <h1>info will display here</h1>
            }
                 </div>
    );
}

export default WoodProgress;
