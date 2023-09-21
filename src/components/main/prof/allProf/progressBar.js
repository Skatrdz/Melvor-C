import LinearProgress from '@mui/material/LinearProgress';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { addExperience } from "../../../../store/expReducer";
import xpTable from "../../../../willBeAppi/xpTable";
function ProgressBar() {
    const skills = useSelector((state) => state.skills.skills[0])
    const exp = skills.exp
    const lvl = skills.currentLvl
    const reqExp = xpTable[lvl-1].exp
    const diff = xpTable[lvl-1].difference
    console.log(exp, reqExp, diff)
    console.log(10, 1-(reqExp-exp)/diff)
    const currentMastery = useSelector((state) => state.skills.skills[0].masteryExp)
    const maxMastery = 9000000

    const pers = (currentMastery/maxMastery).toFixed(2)

    console.log(pers)
    return (
        <div className="progress-bar">
            <div className="exp-bar">
                <LinearProgress variant="buffer" value={
                    (1-(reqExp-exp)/diff)*100

                } valueBuffer={100} />
            </div>
            <div className="horizontal-pool-nav">
                <div><span className="small-text">Skill Level<span className="content-skill-lvl rounded">{lvl}/99</span></span> </div>
                <div><span className="small-text">Skill XP<span className="content-skill-exp rounded">{exp}/{reqExp}</span></span> </div>
                <div><span className="small-text">Current Axe<span className="content-skill-tool rounded">Bronze Axe</span></span></div>
            </div>

            <div>

            <div className="progress-bar-mastery">
                <img className="nav-icons" src="https://melvoridle.com/assets/media/main/mastery_pool.svg" alt="ME"/>
                <div style={{width: "100%"}}>
                <LinearProgress
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.25);',
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: 'yellow'
                        }
                    }}
                    variant="determinate" value={currentMastery/maxMastery*100} valueBuffer={100} style={{ width: "100%" }}

                      />
                <span className="small-text">{currentMastery} / {maxMastery} ({pers}%) XP</span>
                </div>
            </div>

            </div>
        </div>
    );
}

export default ProgressBar;
