import {Link} from "react-router-dom";
const Deposit = () => {
    return ( 
        <div className="deposit-page">
           <div className="deposit-form">
            <div className="text">Deposit amount</div>
            <div className="deposit-amount">
                <span className="light-bold-text">Deposit Amount:</span>
                <input className="mini-input" type="text" />
            </div>
            <div className="payment-method">
                <div className="light-bold-text ">Deposit method:</div>
               
            </div>
            <div className="link-btn link">
            <Link  to="/DepositInfo">Credit Card</Link>
            </div>
            <div className="link-btn link">
            <Link  to="/DepositInfo">Mobile Money</Link>
            </div>
            </div> 
        </div>
     );
}
 
export default Deposit;