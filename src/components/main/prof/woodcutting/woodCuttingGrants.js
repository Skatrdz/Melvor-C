import LinearProgress from '@mui/material/LinearProgress';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { addExperience } from "../../../../store/expReducer";
import progressBar from "../allProf/progressBar";
function WoodCuttingGrants(props) {


    return (
            <div className="wood-cutting-grants">


                <div className="bank-item"><img className="resize-48" src="https://cdn.melvor.net/core/v018/assets/media/bank/logs_magic.png?2" /></div>
                <div className="bank-item"><img className="resize-48" src="https://melvoridle.com/assets/media/main/mastery_header.svg" /></div>

                <div className="bank-item"><img className="resize-48" src="https://melvoridle.com/assets/media/main/xp.svg" />
                    <div className="centered-badge-number">
                        <small className="badge-pill bg-primary-color">{props.exp}.00s</small>
                    </div>
                </div>
                <div className="bank-item"><img className="resize-48" src="https://melvoridle.com/assets/media/main/mastery_pool.svg" /></div>
                <div className="bank-item"><img className="resize-48" src="https://melvoridle.com/assets/media/main/timer.svg" />
                    <div className="centered-badge-number">
                        <small className="badge-pill bg-primary-color">{props.actionTime}.00s</small>
                    </div>
                </div>
            </div>
    );
}

export default WoodCuttingGrants;
