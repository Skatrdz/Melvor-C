
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";


function OnOffSwitcher(props) {
    function toggle() {
        setOn(prevOn => !prevOn)
    }
    const [on, setOn] = React.useState(true)
    const iconDef  = on === true ? faEye : faEyeSlash;
    return (
        <div>
        <span className="nav-main-heading">{props.contentName} <FontAwesomeIcon icon={iconDef} className="nav-eye" onClick={toggle}/></span>
        {on && props.content}
        </div>
    );
}


export default OnOffSwitcher;