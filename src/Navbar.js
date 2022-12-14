// import {Link} from 'react-router-dom';
import logo from "./images/new-logo.png";
const Navbar = () => {
    return ( 
        <div className='navbar'>
            <div className="logo">
                <img id="logo" src={logo} alt="" />
            </div>
            <div className="account-info">
                <div className="info-container">
                    <div className="text">@John Doe</div>
                    <span className="balance-value">$200.00</span><span className="mini-text">(USD)</span>
                </div>
                <div className="logout-btn">
                    <button>Logout</button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;