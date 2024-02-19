import { AiOutlinePrinter } from "react-icons/ai";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoIosArrowDropright,IoIosRefresh } from "react-icons/io";
import { LuChevronDown } from "react-icons/lu";
import { MdOutlineArrowBackIos,MdOutlineArrowForwardIos} from "react-icons/md";

import "./OrderTable.css"


function OrderTable(){

    return (
      <div className="table-container">
        <div className="table-tab">
          <ul className="table-tab-menu">
            <li>
              <button type="button" className="table-button">
                <LiaFileImportSolid />
                Import Orders
              </button>
            </li>
            <li>
              <button type="button" className="table-button">
                <IoIosArrowDropright />
                Accept
              </button>
            </li>
            <li>
              <button type="button" className="table-button">
                <AiOutlinePrinter />
                Print
                <LuChevronDown />
              </button>
            </li>
          </ul>
          <button type="button" className="refreshButton">
            <IoIosRefresh />
            Refresh
          </button>
        </div>
        <table className="tableCreation">
          <tr>
            <th>{undefined}</th>
            <th>
              <input type="checkbox" />
            </th>
            <th>Channel</th>
            <th>Order No</th>
            <th>Order date</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Value</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
          <tr>
            <td>+</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>S</td>
            <td>#TKN20203754</td>
            <td>2022-05-04</td>
            <td>Lucknow</td>
            <td>Abhishek Dixit</td>
            <td>0.00</td>
            <td>
              <p>Pending</p>
            </td>
            <td>
              <p>
                Actions
                <LuChevronDown />
              </p>
            </td>
          </tr>
          <tr>
            <td>+</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>S</td>
            <td>#TKN20203753</td>
            <td>2022-05-04</td>
            <td>Lucknow</td>
            <td>Abhishek Dixit</td>
            <td>0.00</td>
            <td>
              <p>Pending</p>
            </td>
            <td>
              <p>
                Actions
                <LuChevronDown />
              </p>
            </td>
          </tr>
          <tr>
            <td>+</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>S</td>
            <td>#TKN20203752</td>
            <td>2022-05-04</td>
            <td>Lucknow</td>
            <td>Abhishek Dixit</td>
            <td>0.00</td>
            <td>
              <p>Pending</p>
            </td>
            <td>
              <p>
                Actions
                <LuChevronDown />
              </p>
            </td>
          </tr>
        </table>
        <div className="bottom-container">
          <div className="page-container">
            <div className="pagearrow">
              <MdOutlineArrowBackIos />
            </div>
            <div className="pagearrow">1</div>
            <div className="pagearrow">
              <MdOutlineArrowForwardIos />
            </div>
          </div>

            <p className="totalPage">20/page</p>
        </div>
      </div>
    );
}

export default OrderTable