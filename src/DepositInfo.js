import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import card from "./images/credit-card.jpg";
const DepositInfo = () => {
    const location = useLocation();
  const state = location.state;
    return ( 
        <div className="deposit-info">
            <div className="filled-form">
            {/* <div className="deposit-form"> */}
            <div className="text">Deposit amount</div>
            <div className="deposit-amount">
                <span className="light-bold-text">Deposit Amount:</span>
                <input className="mini-input" type="number"  value={state.depositAmount}/>
            </div>
            <div className="payment-method">
                <span className="light-bold-text">Deposit method:</span>
               
            </div>
            <div className="link-btn link">
                <Link to="/">Pay</Link>
            </div>
            {/* </div>  */}
            </div>

            <div className="info-form">
                <div className="title text">Deposit Information</div>
                <div className="payment-image">
                    <img id="card" src={card} alt="" />
                </div>
                <div className="payment-number payment-field">

                    <input type="text" placeholder="Card Number " />
                </div>
                <div className="payment-name payment-field">
                    <input type="text" placeholder="Card Holder Name" />
                </div>
                <div className="link-btn link">
                    <Link to="/DepositReview" state={state}>Continue</Link>
                </div>
            </div>
        </div>
     );
}
 
export default DepositInfo;