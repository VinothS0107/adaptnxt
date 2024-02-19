import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineInventory,MdOutlineLocalShipping,MdOutlineShare } from "react-icons/md";
import { VscListUnordered } from "react-icons/vsc";
import {  } from "react-icons/md";

import "./sideBar.css"

function SideBar(){
    return(
        <div className="sidebar-container">
            <div className="sidebar-menu">
                <AiOutlineDashboard className="sidemenu-icon" />
                <p className="sidemenu-heading">Dashboard</p>
            </div>
            <div className="sidebar-menu">
                <MdOutlineInventory className="sidemenu-icon" />
                <p className="sidemenu-heading">Inventory</p>
            </div>
            <div className="sidebar-menu">
                <VscListUnordered className="sidemenu-icon" />
                <p className="sidemenu-heading">Orders</p>
            </div>
            <div className="sidebar-menu">
                <MdOutlineLocalShipping className="sidemenu-icon" />
                <p className="sidemenu-heading">Shipping</p>
            </div>
            <div className="sidebar-menu">
                <MdOutlineShare className="sidemenu-icon" />
                <p className="sidemenu-heading">Channel</p>
            </div>
        </div>
    )
}

export default SideBar