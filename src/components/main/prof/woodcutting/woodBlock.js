import React, {useEffect, useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import LinearProgress from "@mui/material/LinearProgress";
import {CircularProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addExperience} from "../../../../store/expReducer";
import {addWood, deleteWood} from "../../../../store/blocksReducers/woodCuttingReducer";
import WoodProgress from "./woodProgress";


function WoodBlock(props) {
    const [on, setOn] = React.useState(
        props.on
    )

    const dispatch = useDispatch()
    const currentAction = useSelector(
        (state) => state.woodCutting.actionArr)



    function toggle() {
        if (on) {
            console.log("delete")
            dispatch(deleteWood({ id: props.id}))
            console.log(currentAction)
            setOn(prevOn => !prevOn)
        }
        else if (currentAction.length < 2) {
            console.log("add")
            dispatch(addWood({ id: props.id, actionTime: props.cutTime, exp: props.exp }))
            console.log(currentAction)
            setOn(prevOn => !prevOn)
        }


    }


    return (

        <div className={"prof-block pointer "} onClick={toggle}>

            <br/>
            <small>Cut</small>
            <br/>
            <span>{props.title}</span>
            <br/>
            <small>
                <span>{props.exp} XP</span>
                /
                <span><FontAwesomeIcon icon={faClock} /> </span>
                <span>{props.cutTime} seconds</span>
            </small>
            <br/>
            <img src={props.img} width="65px"></img>
            <br/>
            <div className="wood-progress-animation">
                    <div className={on ? "wood-full-bar" : "wood-empty-bar"}> </div>
            </div>

            {/*<LinearProgress variant="buffer" value={on ? 100 : 0} valueBuffer={100} className="progress" color="success" />*/}

            </div>

    );
}

export default WoodBlock;
