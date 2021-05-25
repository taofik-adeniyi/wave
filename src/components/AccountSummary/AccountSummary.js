import React from 'react'
import './style.css'
import pay from '../../assets/icons/pay.png'
import pay2 from '../../assets/icons/pay2.png'

const AccountSummary = ({title, amount, depositClick, withdrawClick}) => {
    return (
        <div className="summary">
            <div className="acc-summary">
                <div className="acc-title"> {title} </div>
                <div className="acc-amt-ngn">{amount} NGN</div>
            </div>
            <div className="couple-buttons">
                <button onClick={depositClick} className="acc-btn-dep">
                    <div>Deposit</div>
                    <img src={pay} alt="deposit icon" />
                </button>
                <button onClick={withdrawClick} className="acc-btn-with">
                    <div>Withdraw</div>
                <img src={pay2} alt="withdraw icon" />
                </button>
            </div>
        </div>
    )
}

export default AccountSummary
