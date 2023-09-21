import LinearProgress from '@mui/material/LinearProgress';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { addExperience } from "../../../../store/expReducer";
import progressBar from "../allProf/progressBar";
function WoodCuttingGrants(props) {


    const wood1Exp = props.mastery[0]
    const wood2Exp = props.mastery[1]
    return (
            <div className="wood-cutting-grants">

                <div className="wood1-grants">
                    <div className="bank-item"><img className="resize-48" src="https://cdn.melvor.net/core/v018/assets/media/bank/logs_magic.png?2" />
                        <div className="centered-badge-number">
                            <small className="badge-pill">1</small>
                        </div>
                    </div>
                    <div className="bank-item"><img className="resize-48" src="https://melvoridle.com/assets/media/main/mastery_header.svg" />
                        <div className="centered-badge-number">
                            <small className="badge-pill">{wood1Exp*10}</small>

                        </div>
                    </div>

                </div>
                {props.count &&
                <div className="wood2-grants" >
                    <div className="bank-item "><img className="resize-48" src="https://cdn.melvor.net/core/v018/assets/media/bank/logs_magic.png?2" />
                        <div className="centered-badge-number">
                        <small className="badge-pill">{props.count}</small>
                        </div>
                    </div>

                    <div className="bank-item"><img className="resize-48" src="https://melvoridle.com/assets/media/main/mastery_header.svg" />
                        <div className="centered-badge-number">
                            <small className="badge-pill">{wood2Exp*10}</small>
                        </div>
                    </div>

                </div>
                }
                <div className="all-wood-grants">
                    <div className="bank-item"><img className="resize-48" src="https://melvoridle.com/assets/media/main/xp.svg" />
                        <div className="centered-badge-number">
                            <small className="badge-pill">{props.exp}</small>
                        </div>
                    </div>
                    <div className="bank-item"><img className="resize-48" src="https://melvoridle.com/assets/media/main/mastery_pool.svg" />
                            <div className="centered-badge-number">
                                <small className="badge-pill">{(wood1Exp*10 + wood2Exp*10) * 4 }</small>
                            </div>
                    </div>
                    <div className="bank-item"><img className="resize-48" src="https://melvoridle.com/assets/media/main/timer.svg" />
                        <div className="centered-badge-number">
                            <small className="badge-pill bg-primary-color">{props.currentAction[0].actionTime}.00s</small>
                        </div>
                    </div>
                </div>


            </div>
    );
}

export default WoodCuttingGrants;
