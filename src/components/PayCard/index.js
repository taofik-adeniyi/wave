import React from 'react'
import './style.css'

const PayCard = ({ master, visa, bank, visaAlt, masterAlt, bankAlt}) => {
    return (
        <div className="wrapper" style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
            <div >

            <img src={master} alt={masterAlt} />
            <img src={visa} alt={visaAlt} />
            <img src={bank} alt={bankAlt} />
            </div>
             <div style={{marginLeft: '20px'}}>Pay with your debit card</div>
        </div>
    )
}

export default PayCard
