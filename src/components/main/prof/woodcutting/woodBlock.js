import React, {useEffect, useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import LinearProgress from "@mui/material/LinearProgress";
import {CircularProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addExperience} from "../../../../store/expReducer";
import {addWood, deleteWood} from "../../../../store/blocksReducers/woodCuttingReducer";


function WoodBlock(props) {
    const [on, setOn] = React.useState(
        props.on
    )

    const dispatch = useDispatch()
    const currentAction = useSelector(
        (state) => state.woodCutting.actionArr)
    const addExp = () => {
        dispatch(addExperience({ exp: props.exp, skillId: "1" }));
    };


    useEffect(() => {
        if (on) {
            const interval = setInterval(() => {
                addExp();
            }, props.cutTime * 1000);

            return () => {
                clearInterval(interval); // Cleanup the interval on component unmount
            };
        }
    }, [on]);
    // console.log(props.id)

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
            <LinearProgress variant="buffer" value={on ? 100 : 0} valueBuffer={100} className="progress" color="success" />

            </div>

    );
}

export default WoodBlock;
