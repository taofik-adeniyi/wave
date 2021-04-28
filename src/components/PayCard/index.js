import React from 'react'
import './style.css'

const PayCard = ({ master, visa, bank, visaAlt, masterAlt, bankAlt}) => {
    return (
        <div className="wrapper" style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '20px', cursor: 'pointer'}}>
                <img src={master} alt={masterAlt} />
                <img src={visa} alt={visaAlt} />
                {bank && <img src={bank} alt={bankAlt} />}
            </div>
             <div style={{marginLeft: '10px', fontSize: '16px', cursor: 'pointer'}}>Pay with your debit card</div>
        </div>
    )
}

export default PayCard
