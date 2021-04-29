import React from 'react'
import Tag from '../Tag'
import './style.css'

const BtcTransactionDetails = (props) => {
    const { 
        logo,
        date,
        typeOftrans,
        result,
        amount,
        symb,
        crypto,
        fiatamount,
        withdrawal,} = props
    return (
        <div>
            <div className="samehere logo">
        <img src={logo} alt="logog" />
        </div>
        <div className="samehere typeoftrans">{typeOftrans}</div>
        <div className="samehere date">{date}</div>
        <div className="samehere pricinghere">
          <div>
            {amount} {symb}
          </div>
          <div style={{marginBottom: '20px'}}>
            <Tag tag={result} />
          </div>
        </div>
        {crypto && <div className="cryptohere samehere" style={{marginTop: '10px', marginBottom: '20px'}} >{fiatamount} NGN</div>}
        {withdrawal && (
          <div className="last-container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid gray",
              }}
            >
              <div>Bank Details</div>
              <div className="bank-details">
                <div>John Doe</div>
                <div>0123456789</div>
                <div>Access Bank</div>
              </div>
            </div>
            <div
              className="charge"
            >
              <div>Fee charged</div>
              <div>100 NGN</div>
            </div>
          </div>
        )}
        </div>
    )
}

export default BtcTransactionDetails
