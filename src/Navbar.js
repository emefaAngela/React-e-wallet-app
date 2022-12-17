// import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import logo from "./images/new-logo.png";
const Navbar = () => {
    const {balance}=useSelector((state)=>state.transaction);
    return ( 
        <div className='navbar'>
            <div className="logo">
                <img id="logo" src={logo} alt="" />
            </div>
            <div className="account-info">
                <div className="info-container">
                    <div className="text">@John Doe</div>
                    <span className="balance-value">{balance}</span><span className="mini-text">(USD)</span>
                </div>
                <div className="logout-btn">
                    <button>Logout</button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;