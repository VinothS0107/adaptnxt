import { AiOutlineMenuFold } from "react-icons/ai";
import { CiDark,CiBellOn } from "react-icons/ci";
import { SiGoogletranslate } from "react-icons/si";
import "./NavigationBar.css"

function NavigationBar(){

    return(
        <nav className="navbar-container">
            <AiOutlineMenuFold className="icons" />

            <div className="navbar-left-icons">
                <CiDark className="icons" />
                <CiBellOn className="icons"/>
                <SiGoogletranslate className="icons" />
            </div>

        </nav>
    )
}
export default NavigationBar