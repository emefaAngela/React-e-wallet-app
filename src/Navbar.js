// import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className='navbar'>
            <div className="logo">

            </div>
            <div className="account-info">
                <div className="info-container">
                    <div>@John Doe</div>
                    $200.00(USD)
                </div>
                <div className="logout-btn">
                    <button>Logout</button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;