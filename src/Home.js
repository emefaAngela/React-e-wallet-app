import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const {balance}=useSelector((state)=>state.transaction);
    return ( 
        <div className="container">
            <div className="balance-info">
                    
                    <div className="text">Account Balance</div>
                    <div className="balance-value">{balance}</div>
                    <div className="mini-text text">US Dollars</div>
                    <div className="link-btn link">
                        <Link to="/">Withdraw</Link>
                    </div>
                    <div className="link-btn link">
                        <Link to="/Deposit">Deposit</Link>
                    </div>
            </div>

            <div className="transaction-history">
                <table  width="500" >
                    
                    <tr>
                        <th>Date</th>
                        
                        <th>Operation</th>
                        
                        <th>Amount</th>
                        <th>Balance</th>
                       
                    </tr>
                    
                    
                    <tr>
                        <td>1 november 2001</td>
                        <td>Netflix subscription</td>
                        <td className="debit">-$20</td>
                        <td>$160</td>
                    </tr>
                    <tr>
                        <td>1 november 2001</td>
                        <td>Cash In</td>
                        <td className="credit">+$20</td>
                        <td>$180</td>
                    </tr>
                </table>
            </div>
        </div>
     );
}
 
export default Home;