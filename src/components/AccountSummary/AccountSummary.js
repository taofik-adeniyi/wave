import React from 'react'
import './style.css'

const AccountSummary = ({title, amount, depositClick, withdrawClick}) => {
    return (
        <div className="summary">
            <div className="balance">
            <div style={{color: '#3B4455', fontSize: '14px', marginBottom: '10px'}}> {title} </div>
            <div style={{color: '#1A2841', fontWeight: 'bold', fontSize: '24px'}}>{amount} NGN</div>
            </div>
            <div className="couple-buttons">
            <button onClick={depositClick}>Deposit</button>
            <button onClick={withdrawClick}>Withdraw</button>
            </div>
        </div>
    )
}

export default AccountSummary
