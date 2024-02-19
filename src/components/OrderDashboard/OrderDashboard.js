import NavigationBar from "../NavigationBar/NavigationBar"
import MainContainer from "../MainContainer/MainContainer";
import SideBar from "../SideBar/sideBar";

import { Component } from "react";

class OrderDashboard extends Component{

    render(){
        return(
            <>
             <NavigationBar />
      <div className="App">
        <SideBar className="sidebar-component" />
        <MainContainer className="main-component" />
      </div>
                
            </>
        )
    }
};

export default OrderDashboard