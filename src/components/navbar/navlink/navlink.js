import coinsSvg from './navbarImages/coins.svg';
import "@fontsource/inter";
function Navbar(props){
    return (
            <a className="nav-main-link pointer">
                <img src={props.imgsource} className="nav-icons"/>
                <span className="nav-icons-title">{props.title}</span>
                <small className="nav-icons-level">
                    ({props.currentLvl}/{props.lvlMax})
                </small>
            </a>
    )
}
export default Navbar