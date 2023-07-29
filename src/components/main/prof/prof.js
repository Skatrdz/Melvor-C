import LinearProgress from '@mui/material/LinearProgress';
import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { addExperience } from "../../../store/expReducer";
function Prof() {
    const exp = useSelector((state) => state.skills.skills)
    const dispatch = useDispatch()
    console.log(exp)

    const addExp = () => {
        dispatch(addExperience({ exp: 5, skillId: "1" }));
    };
    const reqExp = 120
    return (
        <div id="prof">
            <div className="progress-bar">
                <div className="exp-bar">
                    <LinearProgress variant="buffer" value={0/reqExp*100}/>
                </div>
                <div className="horizontal-pool-nav">
                    <div><span className="small-text">Skill Level<span className="content-skill-lvl rounded">1/99</span></span> </div>
                    <div><span className="small-text">Skill XP<span className="content-skill-exp rounded">exp/{reqExp}</span></span> </div>
                    <div><span className="small-text">Current Axe<span className="content-skill-tool rounded">Bronze Axe</span></span></div>
                </div>

                <div className="mastery">
                    <img className="nav-icons" src="https://melvoridle.com/assets/media/main/mastery_pool.svg" alt="ME"/>

                </div>

            </div>

            <div className="wood-cutting">
                <button onClick={() => addExp()} className="pointer full-div"></button>
            </div>
        </div>

    );
}

export default Prof;
