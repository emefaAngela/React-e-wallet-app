import {Link} from "react-router-dom";
import { useState } from "react";
// import { useNavigate} from "react-router-dom";
const Deposit = () => {
    const [form,setForm]=useState({
        depositAmount:'0',
        

    });
   
    
    return ( 
        <div className="deposit-page">
           <div className="deposit-form">
            <form action="" >
            <div className="text">Deposit amount</div>
            <div className="deposit-amount">
                <span className="light-bold-text">Deposit Amount:</span>
                <input className="mini-input" type="number"  value={form.depositAmount} onChange={e=>{
                    setForm({depositAmount:e.target.value});
                }}/>
            </div>
            <div className="payment-method">
                <div className="light-bold-text ">Deposit method:</div>
               
            </div>
            <div className="link-btn link">
            <Link  to="/DepositInfo" state={form}>Credit Card</Link>
            </div>
            <div className="link-btn link">
            <Link  to="/DepositInfo">Mobile Money</Link>
            </div>
            </form>
            </div> 
        </div>
     );
    }
 
export default Deposit;