import coinsSvg from './navlink/navbarImages/coins.svg';
import Navlink from "./navlink/navlink";
import "@fontsource/inter";
import pveIcon from "../../willBeAppi/pveInfo";
import profIcon from "../../willBeAppi/profInfo"
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
            <div className="shop-bank">
                <a className="nav-main-link pointer">
                    <img src="https://cdn.melvor.net/core/v018/assets/media/main/gp.svg" className="nav-icons"/>
                    <span className="nav-icons-title">Магазин</span>
                    <small className="nav-icons-level">
                        <img src="https://cdn.melvor.net/core/v018/assets/media/main/coins.svg" width="16px" style={{marginRight: 4}} />
                        3000
                    </small>
                    {/*<img src="" width="16px" height="16px" style="margin-right: 4px;">*/}

                    </a>

            </div>
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