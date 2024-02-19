import OrdersTab from "./OrdersTab/OrdersTab.js";
import OrderTable from "./OrderTable/OrderTable.js";
import { IoMdClose } from "react-icons/io";

import "./Maincontainer.css"

function MainContainer(){
return(
    <div className="main-container">
    <button type="button" title="order_button" className="orders-button">Orders <IoMdClose className="close-icon"/></button>
    <OrdersTab />
    <OrderTable />
    </div>
)
}
export default MainContainer