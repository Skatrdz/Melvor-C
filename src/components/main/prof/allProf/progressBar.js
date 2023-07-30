import LinearProgress from '@mui/material/LinearProgress';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { addExperience } from "../../../../store/expReducer";
function ProgressBar() {
    const exp = useSelector((state) => state.skills.skills[0].exp)

    const reqExp = 1200
    return (
        <div className="progress-bar">
            <div className="exp-bar">
                <LinearProgress variant="buffer" value={exp/reqExp*100} valueBuffer={100} />
            </div>
            <div className="horizontal-pool-nav">
                <div><span className="small-text">Skill Level<span className="content-skill-lvl rounded">1/99</span></span> </div>
                <div><span className="small-text">Skill XP<span className="content-skill-exp rounded">{exp}/{reqExp}</span></span> </div>
                <div><span className="small-text">Current Axe<span className="content-skill-tool rounded">Bronze Axe</span></span></div>
            </div>

            <div className="mastery">
                <img className="nav-icons" src="https://melvoridle.com/assets/media/main/mastery_pool.svg" alt="ME"/>
            </div>
        </div>
    );
}

export default ProgressBar;
