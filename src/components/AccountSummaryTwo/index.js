import React from 'react'
import './style.css'
import pay from '../../assets/icons/pay.png'
import pay2 from '../../assets/icons/pay2.png'

const AccountSummaryTwo = ({title, amount, depositClick, withdrawClick}) => {
    return (
        <div className="th-summary">
            <div className="th-acc-summary">
                <div className="bal-title"> {title} </div>
                <div className="amount-ngn">{amount} NGN</div>
            </div>
            <div className="th-couple-buttons">
                <button onClick={depositClick} className="deposit-btn">
                    <div>Deposit</div>
                    <img src={pay} alt="deposit icon" />
                </button>
                <button onClick={withdrawClick} className="withdraw-btn">
                    <div>Withdraw</div>
                    <img src={pay2} alt="withdraw icon" />
                </button>
            </div>
        </div>
    )
}

export default AccountSummaryTwo
