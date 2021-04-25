import React from 'react'
import './style.css'
import pay from '../../assets/icons/pay.png'
import pay2 from '../../assets/icons/pay2.png'

const AccountSummary = ({title, amount, depositClick, withdrawClick}) => {
    return (
        <div className="summary">
            <div className="acc-summary">
            <div style={{color: '#898F99', fontSize: '14px'}}> {title} </div>
            <div style={{color: '#1A2841', fontWeight: 'bold', fontSize: '24px', marginTop: '10px'}}>{amount} NGN</div>
            </div>
            <div className="couple-buttons">
            <button onClick={depositClick} 
                style={{display: 'flex', cursor: 'pointer', maxWidth: '135px', gap: 8, padding: 0, margin: 0, justifyContent: 'center', alignItems: 'center', fontSize: '13px', fontWeight: '600'}}>
                <div>Deposit</div>
                <img src={pay} alt="deposit icon" />
            </button>
            <button onClick={withdrawClick}
                style={{display: 'flex', cursor: 'pointer', maxWidth: '135px', backgroundColor: '#F0F5FF', color: '#0059FF', gap: 8, padding: 0, margin: 0, justifyContent: 'center', alignItems: 'center', fontSize: '13px', fontWeight: '600'}}>
                <div>Withdraw</div>
            <img src={pay2} alt="withdraw icon" />
            </button>
            </div>
        </div>
    )
}

export default AccountSummary
