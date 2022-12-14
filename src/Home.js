import {Link} from "react-router-dom";

const Home = () => {
    return ( 
        <div className="container">
            <div className="balance-info">
                    
                    <div><h4>Account Balance</h4></div>
                    <div><h1>$200.00</h1></div>
                    <div><h5>US Dollars</h5></div>
                    <div>
                       <Link to="/Deposit"> Deposit</Link>
                        <button>Deposit </button></div>
                    <div><button>Withdraw</button></div>
            </div>

            <div className="transaction-history">

            </div>
        </div>
     );
}
 
export default Home;