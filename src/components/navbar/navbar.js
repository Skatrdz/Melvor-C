import coinsSvg from './navlink/navbarImages/coins.svg';
import Navlink from "./navlink/navlink";
import "@fontsource/inter";
import pveIcon from "./pveInfo";
import profIcon from "./profInfo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import OnOffSwitcher from "../generalComponents/onOffSwitcher";



function Navbar(props){
    const pve = pveIcon.map(item => {
        return (
            <Navlink
                key={item.id}
                {...item}

            />
        )
    })
    const prof = profIcon.map(item => {
        return (
            <Navlink
                key={item.id}
                {...item}

            />
        )
    })
    function toggle() {
        setOn(prevOn => !prevOn)
    }

    const [on, setOn] = React.useState(true)
    const iconDef  = on === true ? faEye : faEyeSlash;
    return (
        <div id="navbar">
            <OnOffSwitcher
            content={pve}
            contentName={"Боевые"}
            >

            </OnOffSwitcher>
            <OnOffSwitcher
                content={prof}
                contentName={"Не боевые"}
            >

            </OnOffSwitcher>
        </div>
    )
}
export default Navbar