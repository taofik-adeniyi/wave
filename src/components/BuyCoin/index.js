import React from 'react'
import barcode from "../../assets/icons/barcode.png";
import copy from "../../assets/icons/copy.png";
import './style.css'


const BuyCoin = () => {
    return (
        <div>
            <div className="receive-wrapper">
              <div style={{color: '#1A2841', fontSize: '14px', fontWeight: 600, padding: '25px 0 15px 30px'}}>
                Receive Bitcoin
              </div>
              <div style={{display: 'flex', width: '70%', margin: '30px auto', color: '#626977', textAlign: 'center', fontSize: '13px'}}>
                Share the address below to receive Bitcoin (BTC) into your
                Wavewallet account
              </div>
          <div
            style={{
              width: '75%',
              margin: '0 auto 30px auto',
              background: "#F5F6F6",
              border: "1px solid #EBECEE",
              boxSizing: "border-box",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              padding: "15px 20px",
              justifyContent: "space-between",
            }}
          >
              <div>MDetsoRYtXps2Q7nhK6zyH23J5bannRUWT</div>
              <div><img src={copy} alt="copy logo" style={{cursor: 'pointer'}} /></div>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px'}}>
          <div style={{display: 'flex', color: '#626977', fontSize: '13px'}}>
            Or you can also receive using the QR Code
          </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '100px' }}>
            <img src={barcode} alt="barcode scan" />
          </div>
        </div>
        </div>
    )
}

export default BuyCoin
