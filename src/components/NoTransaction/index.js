import React from 'react'

const NoTransaction = () => {
    return (
        <>
          <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
          }}
        >
          <div
            style={{
              fontFamily: "Proxima Nova",
              fontSize: "16px",
              color: "#898F99",
            }}
          >
            You haven't done any transaction on Tether yet
          </div>
          <button style={{ marginTop: "20px", cursor: "pointer", fontSize: '14px', fontWeight: "600", fontFamily: "SF Pro Text"}}>Wallet</button>
        </div>  
        </>
    )
}

export default NoTransaction
