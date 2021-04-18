import React from 'react'
import barcode from "../../assets/icons/barcode.png";
import copy from "../../assets/icons/copy.png";


const BuyCoin = () => {
    return (
        <div>
            <div className="wrapper" style={{ textAlign: "center" }}>
          <h2>Receive Bitcoin</h2>
          <p>
            Share the address below to receive Bitcoin (BTC) into your
            Wavewallet account
          </p>
          <div
            style={{
              background: "#F5F6F6",
              border: "1px solid #EBECEE",
              boxSizing: "border-box",
              borderRadius: "5px",
              display: "flex",
              padding: "10px 20px",
              justifyContent: "center",
            }}
          >
            <div>MDetsoRYtXps2Q7nhK6zyH23J5bannRUWT</div>
            <img src={copy} alt="copy logo" />
          </div>
          <p>Or you can also receive using the QR Code</p>
          <div style={{ margin: "50px 0" }}>
            <img src={barcode} alt="barcode scan" />
          </div>
        </div>
        </div>
    )
}

export default BuyCoin
