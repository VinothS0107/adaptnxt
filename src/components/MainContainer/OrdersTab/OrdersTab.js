import "./OrdersTab.css"

function OrdersTab(){
return(
    <ul className="orders-tab-container">
        <li>Pending</li>
        <li>Accepted</li>
        <li>AWB Created</li>
        <li>Ready to Ship</li>
        <li>Shipped</li>
        <li>Completed</li>
        <li>Cancelled</li>
        
    </ul>
)
}
export default OrdersTab