import LinearProgress from '@mui/material/LinearProgress';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { addExperience } from "../../../store/expReducer";
import ProgressBar from "./allProf/progressBar";
function Prof() {
    const dispatch = useDispatch()

    const addExp = () => {
        dispatch(addExperience({ exp: 5, skillId: "1" }));
    };
    useEffect(() => {
        const interval = setInterval(() => {
            addExp();
        }, 5000);

        return () => {
            clearInterval(interval); // Cleanup the interval on component unmount
        };
    }, []);
    return (

        <div id="prof">
            <ProgressBar></ProgressBar>

            <div className="wood-cutting-buttons">
                <div className={"prof-block pointer "} ></div>
                <div className={"prof-block pointer "} ></div>



            </div>


        </div>

    );
}

export default Prof;
