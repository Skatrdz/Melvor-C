import LinearProgress from '@mui/material/LinearProgress';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { addExperience } from "../../../store/expReducer";
import ProgressBar from "./allProf/progressBar";
import WoodBlock from "./woodcutting/woodBlock";
import pveIcon from "../../../willBeAppi/pveInfo";
import Navlink from "../../navbar/navlink/navlink";
import WoodBlockReqTemp from "../../../willBeAppi/WoodBlockReq(temp)";
function Prof() {
    const currentAction = useSelector((state) => state.woodCutting.actionArr)
    const blocks = WoodBlockReqTemp.map(item => {
        const isOn = currentAction.some(action => action.id === item.id);
        return (
            <WoodBlock
                key={item.id}
                title={item.tree}
                exp={item.xp}
                cutTime={item.cutTime}
                img={item.img}
                on={isOn}
                {...item}

            />
        )
    })
    return (

        <div id="prof">
            <ProgressBar></ProgressBar>

            <div className="wood-cutting-buttons">
                {blocks}




            </div>


        </div>

    );
}

export default Prof;
