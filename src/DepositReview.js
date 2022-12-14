import {Link} from "react-router-dom";
const DepositReview = () => {
    return ( 
        <div className="deposit-info">
            <div className="filled-form">
            {/* <div className="deposit-form"> */}
            <div className="text">Deposit amount</div>
            <div className="deposit-amount">
                <span className="light-bold-text">Deposit Amount:</span>
                <input className="mini-input" type="text" />
            </div>
            <div className="payment-method">
                <span className="light-bold-text">Deposit method:</span>
               
            </div>
            <div className="link-btn link">
                <Link to="/">Pay</Link>
            </div>
            {/* </div>  */}
            </div>

            <div className="review-order">
                <div className="text">Review Order</div>
                <div className="order-info">
                  <div className="order-info-item padding">
                    <div className="title">
                        Payment information
                    </div>
                    <div className="text">
                        John Doe
                    </div>
                    <div className="text">
                        Card ending 1111
                    </div>
                    <div className="action-on-order">
                        <Link to="">change</Link>
                    </div>
                  </div>

                  <div className="order-info-item">
                    <div className="title">
                        Deposit Amount:
                    </div>
                    <div className="text">
                        $20.00
                    </div>
                    <div className="text">
                        US Dollars
                    </div>
                    
                  </div>
                </div>
                <div className="billing-address padding">
                    <div className="title">
                        Billing address
                    </div>
                    <div className="text">
                        123 New Street
                    </div>
                    <div className="text">
                        New York,NY 10186
                    </div>
                    <div className="action-on-order">
                        <Link to="">update</Link>
                    </div>
                </div>
                <div className="link-btn link">
                    <Link to="/">Submit Payment</Link>
                </div>
            </div>
        </div>
     );
}
 
export default DepositReview;