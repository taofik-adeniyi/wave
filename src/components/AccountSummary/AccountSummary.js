import React from 'react'
import './style.css'

const AccountSummary = () => {
    return (
        <div className="summary">
            <div className="balance">
            <div>Your Naira Balance </div>
            <div>2,000,000 NGN</div>
            </div>
            <div className="couple-buttons">
            <button>Deposit</button>
            <button>Withdraw</button>
            </div>
        </div>
    )
}

export default AccountSummary
